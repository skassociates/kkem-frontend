import axios from "axios";




const token = ''

export const axiosInstance = axios.create({
  baseURL: "http://localhost:3001/",
  headers: {
    'Content-Type': "application/json",
    "Authorization": token
  }
});
