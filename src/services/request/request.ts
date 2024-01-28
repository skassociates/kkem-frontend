"use client"
import axios from "axios";


let token


try {
  token = localStorage.AUTH_TOKEN || ''
} catch (error) {

}




export const axiosInstance = axios.create({
  baseURL: "http://localhost:3001/",
  headers: {
    // 'Content-Type': "application/json",
    "Authorization": token
  }
});
