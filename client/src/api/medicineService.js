import axios from "axios";

const medicineAPI = axios.create({
  baseURL:"http://localhost:5000/api",
  headers:{
  "Content-Type":"application/json"
},
});

medicineAPI.interceptors.request.use((config) => {
  const token = localStorage.getItem("accessToken");
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export const addMedicine = (data) => medicineAPI.post('/medicine/add',data);
export const editMedicine = (id,data) => medicineAPI.put(`/medicine//edit/${id}`,data);
export const deleteMedicine = (id) => medicineAPI.delete(`/medicine/delete/${id}`);
export const getAllmedicine = () => medicineAPI.get('/medicine/all');

export default medicineAPI;