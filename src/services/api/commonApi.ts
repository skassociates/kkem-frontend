import { axiosInstance } from "../request/request";

export const getTopColleges = async () => {
  const varToken = localStorage.getItem("AUTH_TOKEN");

  return axiosInstance.get("/cc/topfiveCollege").then((res) => res.data);
};

export const getTopStudents = async () => {
  const varToken = localStorage.getItem("AUTH_TOKEN");

  return axiosInstance.get("/cc/topfiveStu").then((res) => res.data);
};
//getstudIns

export const getgetstudIns = async (body: any) => {
  const varToken = localStorage.getItem("AUTH_TOKEN");

  return axiosInstance
    .post("/cc/getstudIns", {
      headers: { Authorization: varToken },
      ...body,
    })
    .then((res) => res.data);
};
//Check data response and set up data in tce and institutions
