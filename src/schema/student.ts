export interface StudentDetails {
    EMAIL_ID: string;
    INST_NAME: string;
    STU_NAME: string;
    DWMS_ID: string;

    DWMS_COMPLETE: boolean;
    CA_COMP: boolean;
    CC_COMP: boolean;
    PDT_COMP: boolean;
    BCEST_GRADE: boolean;
    RI_COMP: boolean;
    WRP_COMP: boolean;

    PT_WRK_SHP_COUNT: boolean;
    IIP_PART: boolean;
    LCP_PART: boolean;

    SP_DWMS: boolean;
    INTERN_COMP: boolean;
    ATTN_PLCMNT_DRV: boolean;
    OFR_LTR: boolean;
    JB_SHRT_LST: boolean;
    PLMNT_ACCT: boolean;

    PLMNT_ACCT_TEXT: string;
}

export interface instituteDetails {
    EMAIL_ID: string
    INST_NAME: string;
    PLC_CORD_NAME: string;
    TOT_STR: string;

    RRCMNT_DRV_COUNT: string;
    PLC_DRV_JOB_OFR_COUNT: string;
    INTRN_SHP_STD_COUNT: string;
    PLCMNT_ACT: boolean;
}

export interface adminDetails {
    EMAIL_ID: string;
    INST_NAME: string;
    CA_NAME: string;
    TOT_STR: string;
    DWMS_ORT_SSN: boolean;
    CUR_SRV_COMP: Array<string>;
    PCT_STD_DWMS_PROF_COMP: string;
    DWMS_HLP_DSK: boolean;
    PCT_FY_STD_WEBNR: string;
    PCT_STD_RSM_WRK_SHP: string;
    KKEM_IIP: boolean;
    PCT_STD_RCM_DRV: string;
    PCT_STD_JOB_OFFR: string
}