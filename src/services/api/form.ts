import { toast } from "react-toastify";
import { axiosInstance } from "../request/request";

const getStudentDetails = async () => {
  const varToken = localStorage.getItem("AUTH_TOKEN");
  try {
    const response = await axiosInstance.get("/students/", {
      headers: { Authorization: varToken },
    });
    return response;
  } catch (error) {
    throw error;
  }
};

const updateStudentDetails = async (body: any) => {
  const varToken = localStorage.getItem("AUTH_TOKEN");
  try {
    const response = await axiosInstance.put("/students/update", body, {
      headers: { Authorization: varToken },
    });
    return response;
  } catch (error) {
    throw error;
  }
};

const getStudentDashboard = async () => {
  const varToken = localStorage.getItem("AUTH_TOKEN");
  console.log("varToken", varToken);

  try {
    const response = await axiosInstance.post("/students/dashboard", {
      headers: { Authorization: varToken },
    });
    return response;
  } catch (error) {
    throw error;
  }
};

const getInstituteDetails = async () => {
  const varToken = localStorage.getItem("AUTH_TOKEN");

  try {
    const response = await axiosInstance.get("/institutions/", {
      headers: { Authorization: varToken },
    });
    return response;
  } catch (error) {
    throw error;
  }
};

const updateInstitutionDetails = async (body: any) => {
  const varToken = localStorage.getItem("AUTH_TOKEN");
  try {
    const response = await axiosInstance.put("/institutions/update", body, {
      headers: { Authorization: varToken },
    });
    return response;
  } catch (error) {
    throw error;
  }
};

const getAdminDetails = async () => {
  const varToken = localStorage.getItem("AUTH_TOKEN");

  try {
    const response = await axiosInstance.get("/career-ambassadors/", {
      headers: { Authorization: varToken },
    });
    return response;
  } catch (error) {
    throw error;
  }
};

const upateAdminDetails = async (body: any) => {
  const varToken = localStorage.getItem("AUTH_TOKEN");

  try {
    const response = await axiosInstance.put(
      "/career-ambassadors/update",
      body,
      {
        headers: { Authorization: varToken },
      }
    );

    return response;
  } catch (error) {
    throw error;
  }
};

export const getCAdash = async () => {
  const varToken = localStorage.getItem("AUTH_TOKEN");

  return axiosInstance.get("/career-ambassadors/dashboard", {
    headers: { Authorization: varToken },
  });
};

export const getinstdash = async () => {
  const varToken = localStorage.getItem("AUTH_TOKEN");
  return axiosInstance.get("/institutions/dashboard", {
    headers: { Authorization: varToken },
  });
};

export const gettopStuIns = async () => {
  const varToken = localStorage.getItem("AUTH_TOKEN");
  return axiosInstance.get("/institutions/gettopStuIns", {
    headers: { Authorization: varToken },
  });
};
export const calculateStudents = async () => {
  const varToken = localStorage.getItem("AUTH_TOKEN");
  try {
    const response = await axiosInstance.get("/students/calc", {
      headers: { Authorization: varToken },
    });
    return response;
  } catch (error) {
    throw error;
  }
};

export const form = {
  getStudentDetails,
  updateStudentDetails,
  getInstituteDetails,
  updateInstitutionDetails,
  getAdminDetails,
  upateAdminDetails,
  getStudentDashboard,
  getCAdash,
  calculateStudents,
};
