import { axiosInstance } from "../request/request";

export const getTopColleges = async () => {
  const varToken = localStorage.getItem("AUTH_TOKEN");

  return axiosInstance.get("/cc/topfiveCollege").then((res) => res.data);
};

export const getTopStudents = async () => {
  const varToken = localStorage.getItem("AUTH_TOKEN");

  return axiosInstance.get("/cc/topfiveStu").then((res) => res.data);
};
