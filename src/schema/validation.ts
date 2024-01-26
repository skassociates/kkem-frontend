import * as yup from "yup"

export const studentFormvalidationSchema = yup
    .object({
        EMAIL_ID: yup.string().required(),
        INST_NAME: yup.string().required(),
        STU_NAME: yup.string().required(),
        DWMS_ID: yup.string().required(),
        // Curation Activities
        DWMS_COMPLETE: yup.boolean().required(),
        CA_COMP: yup.boolean().required(),
        CC_COMP: yup.boolean().required(),
        PDT_COMP: yup.boolean().required(),
        BCEST_GRADE: yup.boolean().required(),
        RI_COMP: yup.boolean().required(),
        WRP_COMP: yup.boolean().required(),
        // Industry Connect Activities
        PT_WRK_SHP_COUNT: yup.boolean().required(),
        IIP_PART: yup.boolean().required(),
        LCP_PART: yup.boolean().required(),
        // Placement Activities
        SP_DWMS: yup.boolean().required(),
        INTERN_COMP: yup.boolean().required(),
        ATTN_PLCMNT_DRV: yup.boolean().required(),
        OFR_LTR: yup.boolean().required(),
        JB_SHRT_LST: yup.boolean().required(),
        PLMNT_ACCT: yup.boolean().required(),
        PLMNT_ACCT_TEXT: yup.string()

    })

// replace the object with enum from backend
export const institutionFormvalidationSchema = yup
    .object({
        EMAIL_ID: yup.string().required(),
        INST_NAME: yup.string().required(),
        PLC_CORD_NAME: yup.string().required(),
        TOT_STR: yup.string().required(),

        RRCMNT_DRV_COUNT: yup.string().required(),
        PLC_DRV_JOB_OFR_COUNT: yup.string().required(),
        INTRN_SHP_STD_COUNT: yup.string().required(),
        PLCMNT_ACT: yup.boolean().required(),
    })


export const adminFormvalidationSchema = yup
    .object({
        // sec 1
        EMAIL_ID: yup.string().required(),
        INST_NAME: yup.string().required(),
        CA_NAME: yup.string().required(),
        TOT_STR: yup.string().required(),
        // sec 2
        DWMS_ORT_SSN: yup.boolean().required(),
        CUR_SRV_COMP: yup.array().required(),
        PCT_STD_DWMS_PROF_COMP: yup.string().required(),
        DWMS_HLP_DSK: yup.boolean().required(),
        // sec 3
        PCT_FY_STD_WEBNR: yup.string().required(),
        PCT_STD_RSM_WRK_SHP: yup.string().required(),
        KKEM_IIP: yup.boolean().required(),
        PCT_STD_RCM_DRV: yup.string().required(),
        PCT_STD_JOB_OFFR: yup.string().required(),

    })

export const loginValidationSchema = yup.object({
    email: yup.string().email().required(),
    dwmsid: yup.string().required()
})
export const instloginValidationSchema = yup.object({
    email: yup.string().email().required(),
    instid: yup.string().required()
})
export const carrerAmbloginValidationSchema = yup.object({
    email: yup.string().email().required(),
    dwmsid: yup.string().required()
})