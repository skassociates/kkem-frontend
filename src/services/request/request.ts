"use client"
import axios from "axios";


let token


try {
  token = localStorage.AUTH_TOKEN || ''
} catch (error) {

}
const productionurl = "https://kkem-backend.vercel.app/"



export const axiosInstance = axios.create({
  // baseURL: productionurl ? productionurl : "http://localhost:3001/",
  baseURL: "http://localhost:3001/",
  headers: {
    // 'Content-Type': "application/json",
    Authorization: token,
  },
});

