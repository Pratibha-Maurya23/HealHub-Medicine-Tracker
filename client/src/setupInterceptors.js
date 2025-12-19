import authAPI from './api/authService';

export function setupInterceptors(auth) {
  // auth must expose setAccessToken
  authAPI.interceptors.response.use(
    (res) => res,
    async (error) => {
      const originalRequest = error.config;
      
      if (error.response && error.response.status === 401 && !originalRequest._retry) {
        originalRequest._retry = true;
        
        // call refresh endpoint (cookie included automatically)
        try {
          const r = await authAPI.post('/auth/refresh-token'); // returns new access token
          const newToken = r.data.accessToken;

          auth.setAccessToken(newToken);
          authAPI.defaults.headers.common["Authorization"] = `Bearer ${newToken}`;

          originalRequest.headers['Authorization'] = `Bearer ${newToken}`;
          return authAPI(originalRequest);
        } catch (err) {
          // refresh fails => force logout
          auth.setAccessToken(null);
        }
      }

      return Promise.reject(error);
    }
  );
}
