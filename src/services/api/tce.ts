import { axiosInstance } from "../request/request";

export const getTCEColleges = async (body: any) => {
  const varToken = localStorage.getItem("AUTH_TOKEN");

  return axiosInstance
    .post("/tce", {
      insts: {
        ENG_CLG: ["ASAPCCC0207", "ASAPCCC0774"],
        POLY: ["ASAPCCC0892", "ASAPCCC0171"],
        ARTS: ["ASAPCCC0783"],
      },
    })
    .then((res) => res.data);
};
