import { axiosInstance } from "../request/request";

export const getTCEColleges = async (body: any) => {
  const varToken = localStorage.getItem("AUTH_TOKEN");
  const varInst = localStorage.getItem("InstList") || "";

  return axiosInstance
    .post("/tce", {
      headers: { Authorization: varToken },

      // insts: {
      //   ENG_CLG: ["ASAPCCC0774", "ASAPCCC0334"],
      //   POLY: ["ASAPCCC0171"],
      //   ARTS: ["ASAPCCC0222", "ASAPCCC0878", "ASAPCCC0867"],
      // },
      insts: JSON.parse(varInst),
    })
    .then((res) => res.data);
};

export const getStudents = async (body: any) => {
  const varToken = localStorage.getItem("AUTH_TOKEN");

  return axiosInstance.get("/students/getStu").then((res) => res.data);
};
