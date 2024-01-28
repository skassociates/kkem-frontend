import axios from "axios";




const token = localStorage.AUTH_TOKEN || ''

export const axiosInstance = axios.create({
  baseURL: "http://localhost:3001/",
  headers: {
    // 'Content-Type': "application/json",
    "Authorization": token
  }
});
