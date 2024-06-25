import { axiosInstance } from "../request/request";

export const getTopColleges = async (ins: any) => {
  const varToken = localStorage.getItem("AUTH_TOKEN");
  const INST_TYPE = localStorage.getItem("INST_TYPE");

  return axiosInstance
    .get("/cc/topfiveCollege", {
      headers: { Authorization: varToken, INSTTYPE: INST_TYPE },
    })
    .then((res) => res.data);
};

export const getTopStudents = async () => {
  const varToken = localStorage.getItem("AUTH_TOKEN");
  const INST_TYPE = localStorage.getItem("INST_TYPE");

  return axiosInstance
    .get("/cc/topfiveStu", {
      headers: { Authorization: varToken, INSTTYPE: INST_TYPE },
    })
    .then((res) => res.data);
};
//getstudIns

export const getgetstudIns = async (body: any) => {
  const varToken = localStorage.getItem("AUTH_TOKEN");

  return axiosInstance
    .get("/cc/getstudIns", {
      headers: { Authorization: varToken },
    })
    .then((res) => res.data);
};
export const getgetstudInstce = async (insId: any) => {
  const varToken = localStorage.getItem("AUTH_TOKEN");
  const body = { instid: insId };
  return axiosInstance
    .post("/tce/getInstDet", body, {
      headers: { Authorization: varToken },
    })
    .then((res) => res.data);
};

//Check data response and set up data in tce and institutions
export const getTopCollegesTCE = async (insId: string[]) => {
  const varToken = localStorage.getItem("AUTH_TOKEN");
  const body = { instid: insId };
  return axiosInstance
    .post("/tce/getTopIns", body, {
      headers: { Authorization: varToken },
    })
    .then((res) => res.data);
};
export const getTopStudentsTCE = async (insId: any) => {
  const varToken = localStorage.getItem("AUTH_TOKEN");
  console.log("body ", insId);
  const body = { instid: insId };
  return axiosInstance
    .post("/tce/getTopStu", body, {
      headers: { Authorization: varToken },
    })
    .then((res) => res.data);
};
