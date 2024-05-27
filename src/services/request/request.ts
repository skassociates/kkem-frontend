"use client";
import axios from "axios";

let token;

try {
  token = localStorage.AUTH_TOKEN || "";
} catch (error) {}

export const axiosInstance = axios.create({
  // baseURL: process.env.NEXT_PUBLIC_BASE_URL,
  // baseURL: "http://localhost:3001/",
  baseURL: "https://52.66.197.135:3001",
  headers: {
    // 'Content-Type': "application/json",
    Authorization: token,
  },
});
