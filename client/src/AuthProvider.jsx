import React, { createContext, useContext, useState, useEffect } from "react";
import { register, login, logout as apiLogout, refreshToken } from "./api/authService";
import authAPI from "./api/authService";
import { setupInterceptors } from "./setupInterceptors";

const AuthContext = createContext(undefined);

export const AuthProvider = ({ children }) => {
  const [accessToken, setAccessToken] = useState(null);
  const [user, setUser] = useState(() => {
    const stored = localStorage.getItem("authUser");
    return stored ? JSON.parse(stored) : null;
  });

  useEffect(() => {
    setupInterceptors({ setAccessToken });
  }, []);

  useEffect(() => {
    if (user) localStorage.setItem("authUser", JSON.stringify(user));
    else localStorage.removeItem("authUser");
  }, [user]);

  const signin = async (email, password) => {
    try {
      const res = await login({ email, password });
      const { accessToken, user } = res.data;

      setAccessToken(accessToken);
      setUser(user);

      localStorage.setItem("accessToken", accessToken);

      authAPI.defaults.headers.common["Authorization"] = `Bearer ${accessToken}`;
      return user;
    } catch (err) {
      throw new Error(err.response?.data?.message || "Login failed");
    }
  };

  const signup = async (name, email, password, role) => {
    await register({ name, email, password, role });
  };

  const signout = async () => {
    try {
      await apiLogout();
    } catch (e) {
      console.warn("Logout authAPI failed, but clearing session");
    }
    setAccessToken(null);
    setUser(null);
    delete authAPI.defaults.headers.common["Authorization"];
  };

  useEffect(() => {
    const refresh = async () => {
      try {
        if (!accessToken) return;
        const res = await refreshToken();
        const newToken = res.data.accessToken;

        setAccessToken(newToken);
        authAPI.defaults.headers.common["Authorization"] = `Bearer ${newToken}`;
      } catch (err) {
        console.log("No refresh token, user probably logged out.");
      }
    };

    refresh();
  }, []);

  return (
    <AuthContext.Provider value={{ user, accessToken, signin, signup, signout, setAccessToken }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) throw new Error("useAuth must be used within an AuthProvider");
  return context;
};
