import * as yup from "yup";

export const studentFormvalidationSchema = yup.object({
  EMAIL_ID: yup.string().required("Email ID is required"),
  INST_NAME: yup.string().required("Institution Name is required"),
  STU_NAME: yup.string().required("Name is required"),
  DWMS_ID: yup.string().required("DWMS ID is required"),
  // Curation Activities
  DWMS_COMPLETE: yup.boolean().required("DWMS completion is required"),
  CA_COMP: yup.boolean(),
  CC_COMP: yup.boolean().required("Carrer Counsiling is required"),
  PDT_COMP: yup.boolean().required("PDT is required"),
  BCEST_GRADE: yup.string().required("Test Score is required"),
  RI_COMP: yup.boolean().required("Robotic Interview is required"),
  WRP_COMP: yup.boolean().required(), // change to file upload
  // Industry Connect Activities
  PT_WRK_SHP_COUNT: yup
    .string()
    .required("Placement Training Count is required"), //change to string change to drop down or radio group
  IIP_PART: yup.boolean(),
  LCP_PART: yup.boolean(),
  // Placement Activities
  SP_DWMS: yup.boolean().required(),
  INTERN_COMP: yup.boolean().required("Intership is required"),
  ATTN_PLCMNT_DRV: yup.boolean().required("Placement Drive is required"),
  OFR_LTR: yup.boolean().required("Offer Letter is required"),
  JB_SHRT_LST: yup.boolean().required("Job Short List is required"),
  PLMNT_ACCT_TEXT: yup.string(),
});

// replace the object with enum from backend
export const institutionFormvalidationSchema = yup.object({
  EMAIL_ID: yup.string().required("Email ID is required"),
  INST_NAME: yup.string().required("Institution is required"),
  PLC_CORD_NAME: yup
    .string()
    .required("Placement Coordinator Name is required"),
  TOT_STR: yup.string().required("Total Student Strength is required"),

  RRCMNT_DRV_COUNT: yup
    .string()
    .required("Recruitment Drive count is required"),
  PLC_DRV_JOB_OFR_COUNT: yup
    .string()
    .required("Placement Drive Job offer count is required"),
  INTRN_SHP_STD_COUNT: yup
    .string()
    .required("Internship Student Count is required"),
  PLCMNT_ACT: yup.boolean().required("Placement Activity is required"),
});

export const adminFormvalidationSchema = yup.object({
  // sec 1
  EMAIL_ID: yup.string().required("Email ID is required"),
  INST_NAME: yup.string().required("Institute Name is required"),
  CA_NAME: yup.string().required("Carrer Ambasidor name is required"),
  TOT_STR: yup.string().required("Total Strength is required"),
  // sec 2
  DWMS_ORT_SSN: yup.boolean().required("DWMS Orientation is required"),
  CUR_SRV_COMP: yup.array().required("Curration Service is required"),
  PCT_STD_DWMS_PROF_COMP: yup
    .string()
    .required("DWMS profile completion count is required"),
  DWMS_HLP_DSK: yup.boolean().required("DWMS help desk setup is required"),
  // sec 3
  PCT_FY_STD_WEBNR: yup.string().required("Student Webinar Count is required"),
  PCT_STD_RSM_WRK_SHP: yup
    .string()
    .required("Resume Workshop Count is required"),
  KKEM_IIP: yup.boolean().required("is required"),
  PCT_STD_RCM_DRV: yup.string().required("Recruitment Drive Count is required"),
  PCT_STD_JOB_OFFR: yup.string().required("Job Offer Count is required"),
});

export const loginValidationSchema = yup.object({
  email: yup.string().email().required("Email ID is required"),
  dwmsid: yup.string().required("DWMS ID is required"),
});
export const instloginValidationSchema = yup.object({
  email: yup.string().email().required("Email ID is required"),
  instid: yup.string().required("Institute ID is required"),
});
export const carrerAmbloginValidationSchema = yup.object({
  email: yup.string().email().required("Email ID is required"),
  dwmsid: yup.string().required("DWMS ID is required"),
});
