/* eslint-disable @next/next/no-img-element */
"use client";
import Accordian from "@/components/Accordian";
import Button from "@/components/Button";
import FileUpload from "@/components/FileUpload";
import Footer from "@/components/Footer";
import InputField from "@/components/InputField";
import Radio from "@/components/Radio";
import Select from "@/components/Select";
import TextArea from "@/components/TextArea";
import { StudentDetails } from "@/schema/student";
import { studentFormvalidationSchema } from "@/schema/validation";
import { form } from "@/services/api/form";
import { axiosInstance } from "@/services/request/request";
import { yupResolver } from "@hookform/resolvers/yup";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import { Controller, useForm } from "react-hook-form";
import { toast } from "react-toastify";
import Image from "next/image";

interface MyData {
  EMAIL_ID: string;
  INSTITUTION_NAME: string;
  STU_NAME: string;
  DWMS_ID: string;
}

const Page = () => {
  const [studentForm, setStudentForm] = useState<StudentDetails>();
  // let newObject: any = window.localStorage?.getItem("dataObj");
  // let dataObj = JSON.parse(newObject);
  const [stuData, setDataObj] = useState<MyData | null>(null);
  const [folderId, setFolderID] = useState<any>();

  const route = useRouter();
  const {
    handleSubmit,
    control,
    formState: { errors },
    watch,
  } = useForm({
    defaultValues: {
      // Fisrt sec
      EMAIL_ID: studentForm?.EMAIL_ID || "",
      INST_NAME: studentForm?.INST_NAME || "",
      STU_NAME: studentForm?.STU_NAME || "",
      DWMS_ID: studentForm?.DWMS_ID || "",
      // Curation Activities
      DWMS_COMPLETE: studentForm?.DWMS_COMPLETE || false,
      CA_COMP: studentForm?.CA_COMP || false,
      CC_COMP: studentForm?.CC_COMP || false,
      PDT_COMP: studentForm?.PDT_COMP || false,
      BCEST_GRADE: studentForm?.BCEST_GRADE || "",
      RI_COMP: studentForm?.RI_COMP || false,
      WRP_COMP: studentForm?.WRP_COMP || false,
      // Industry Connect Activities
      PT_WRK_SHP_COUNT: studentForm?.PT_WRK_SHP_COUNT || "",
      IIP_PART: studentForm?.IIP_PART || false,
      LCP_PART: studentForm?.LCP_PART || false,
      // Placement Activities
      SP_DWMS: studentForm?.SP_DWMS || false,
      INTERN_COMP: studentForm?.INTERN_COMP || "",
      ATTN_PLCMNT_DRV: studentForm?.ATTN_PLCMNT_DRV || false,
      OFR_LTR: studentForm?.OFR_LTR || false,
      JB_SHRT_LST: studentForm?.JB_SHRT_LST || false,
      PLMNT_ACCT_TEXT: studentForm?.PLMNT_ACCT_TEXT || "",
      DWMT_T: studentForm?.DWMT_T,
    },
    resolver: yupResolver(studentFormvalidationSchema),
    values: studentForm,
  });
  const onSubmit = (data: any) => {
    const get = toast.loading("Updating...");
    form
      .updateStudentDetails(data)
      .then((response) => {
        toast.update(get, {
          render: "Done",
          type: "success",
          isLoading: false,
          autoClose: 1000,
        });
        route.push("/student/thank-you");
      })
      .catch((error) => {
        toast.update(get, {
          render: "Something went wrong",
          type: "error",
          isLoading: false,
          autoClose: 1000,
        });
      });
  };

  const fetchdata = async () => {

    const get = toast.loading("Fetching Your Details....");
    form
      .getStudentDetails()
      .then((response) => {
        toast.update(get, {
          render: "Done",
          type: "success",
          isLoading: false,
          autoClose: 1000,
        });
        setStudentForm(response.data.student);
        setFolderID(response.data.student.folderId)
      })
      .catch((error) => {
        console.log(error);
        toast.update(get, {
          render: "Something went wrong",
          type: "error",
          isLoading: false,
          autoClose: 1000,
        });
      });
  };

  useEffect(() => {
    // const storedData = localStorage.getItem("dataObj");
    // if (storedData) {
    //   try {
    //     // Parse JSON data and remove any trailing characters (e.g., '4')
    //     const parsedData: MyData = JSON.parse(storedData);
    //     console.log("parsedData", parsedData);        
    //     setDataObj(parsedData);
    //     setValue("EMAIL_ID", parsedData.EMAIL_ID);
    //     setValue("INST_NAME", parsedData.INSTITUTION_NAME);
    //     setValue("STU_NAME", parsedData.STU_NAME);
    //     setValue("DWMS_ID", parsedData.DWMS_ID);
    //   } catch (error) {
    //     console.error("Error parsing data from localStorage:", error);
    //   }
    // }
    fetchdata();

    // axiosInstance.defaults.headers.get["authorization"] =
    //   localStorage.getItem("AUTH_TOKEN");
  }, []);

  return (
    <div className=" min-h-screen w-full  bg-[#E1E1FF] flex flex-col  items-center  pb-8  scrollbar scrollbar-thumb-red-900 scrollbar-track-gray-100 ">
      <Image
        src="/Googleform.png"
        className="md:w-1/2 hidden md:flex md:h-[355px] mb-8"
        alt=""
        width="100"
        height="100"
      />

      {/* <div className="flex md:hidden text-3xl font-semibold mt-4">
        Student form
      </div> */}
      <Accordian
        bg="#3E3E98"
        header="1. Personal Details"
        error={Boolean(
          errors?.EMAIL_ID?.message ||
            errors?.INST_NAME?.message ||
            errors?.STU_NAME?.message ||
            errors?.DWMS_ID?.message
        )}
      >
        <>
          <div className="text-[#2b2c31] ml-4  mt-2 text-base">
            <b>
              {" "}
              Congratulations on taking your first step towards enhancing your
              Employability!
            </b>
            <br />
            We wish and hope that you improve your Employability Quotient and
            land your name on the Leaderboard!
            <br />
            You&apos;ll do great!
            <br />
            Kindly fill the below details carefully.
          </div>
          <Controller
            control={control}
            rules={{
              required: true,
            }}
            render={({ field: { onChange, onBlur, value } }) => {
              return (
                <InputField
                  label="Email ID"
                  required
                  error={errors?.EMAIL_ID?.message}
                  onChange={onChange}
                  value={value}
                  readOnly
                />
              );
            }}
            name="EMAIL_ID"
          />
          <Controller
            control={control}
            rules={{
              required: true,
            }}
            render={({ field: { onChange, onBlur, value } }) => (
              <InputField
                label="Name of Institution "
                required
                error={errors?.INST_NAME?.message}
                onChange={onChange}
                value={value}
                readOnly
              />
            )}
            name="INST_NAME"
          />
          <Controller
            control={control}
            rules={{
              required: true,
            }}
            render={({ field: { onChange, onBlur, value } }) => (
              <InputField
                label="Name of Student "
                required
                error={errors?.STU_NAME?.message}
                onChange={onChange}
                value={value}
                readOnly
                customStyle="capitalize"
              />
            )}
            name="STU_NAME"
          />
          <Controller
            control={control}
            rules={{
              required: true,
            }}
            render={({ field: { onChange, onBlur, value } }) => (
              <InputField
                label="DWMS ID "
                required
                error={errors?.DWMS_ID?.message}
                onChange={onChange}
                value={value}
                readOnly
              />
            )}
            name="DWMS_ID"
          />

          <FileUpload
            label="Photo"
            allowedFormats={["image/jpeg", "image/jpg", "application/pdf"]}
            folderId={folderId}
          />
        </>
      </Accordian>
      <Accordian
        header="2. Curation Activities"
        bg="#3E3E98"
        error={Boolean(errors?.BCEST_GRADE?.message)}
      >
        <>
          <div className="text-[#2b2c31] ml-4 mt-2">
            Did you know that students who completed 90% of the curation
            activities on the DWMS platform have a higher rate of employability?
            <br />
            Please scroll down below and enter details of the curation
            activities you have been a part of and increase your chances of
            getting employed!
            <br />
            No worries if you haven&apos;t started yet! You still have time to
            complete these acivities and upgrade yourself!
          </div>
          <Controller
            control={control}
            rules={{
              required: true,
            }}
            render={({ field: { onChange, onBlur, value } }) => (
              <Radio
                label="1. Is your profile on the DWMS platform complete? Have you taken the first step to set your career path?"
                hint="If you have still not reached 100%, don't worry! <a href='https://knowledgemission.kerala.gov.in/login-jobseeker.jsp' class='text-blue-500 underline'>Click here</a> to complete your profile."
                required
                name="DWMS_COMPLETE"
                onChange={onChange}
                value={value}
              />
            )}
            name="DWMS_COMPLETE"
          />
          <Controller
            control={control}
            rules={{
              required: true,
            }}
            render={({ field: { onChange, onBlur, value } }) => (
              <Radio
                label="2. Did you take time to complete your Career Assessment? "
                hint="Yet to take the assessment and receive your Career Report Card? 
                </br>
                Wait no more - <a href='https://knowledgemission.kerala.gov.in/login-jobseeker.jsp' class='text-blue-500 underline'>click here</a> to start the test and score points!"
                required
                name="CA_COMP"
                onChange={onChange}
                value={value}
              />
            )}
            name="CA_COMP"
          />
          <Controller
            control={control}
            rules={{
              required: true,
            }}
            render={({ field: { onChange, onBlur, value } }) => (
              <Radio
                label="3. Have you attended the Career Counselling Session?"
                hint="Yet to get guidance about your career? <a href='https://knowledgemission.kerala.gov.in/login-jobseeker.jsp' class='text-blue-500 underline' >Login to DWMS</a> and book your slot today!"
                required
                name="CC_COMP"
                onChange={onChange}
                value={value}
              />
            )}
            name="CC_COMP"
          />
          <Controller
            control={control}
            rules={{
              required: true,
            }}
            render={({ field: { onChange, onBlur, value } }) => (
              <Radio
                label="4. Have you successfully completed the Personality Development Training?  "
                hint="Still waiting to enhance your language capabilities and professional skills? </br> Wait no more! <a href='https://knowledgemission.kerala.gov.in/login-jobseeker.jsp' class='text-blue-500 underline' >Login to DWMS</a>  and get trained by the masters!"
                required
                name="PDT_COMP"
                onChange={onChange}
                value={value}
              />
            )}
            name="PDT_COMP"
          />
          <Controller
            control={control}
            rules={{
              required: true,
            }}
            render={({ field: { onChange, onBlur, value } }) => (
              <Select
                label="5. Please enter your grade for British Council English Score Test"
                onChange={onChange}
                options={[
                  "Grade C",
                  "Grade B2",
                  "Grade B1",
                  "Grade A2",
                  "Grade A1",
                  "Not Taken",
                ]}
                required
                error={errors?.BCEST_GRADE?.message}
                value={value}
                hint="If you have not taken the test yet, why wait? <a href='https://knowledgemission.kerala.gov.in/login-jobseeker.jsp' class='text-blue-500 underline' >Access the test</a> today and flaunt your English Skills!"
              />
            )}
            name="BCEST_GRADE"
          />
          <Controller
            control={control}
            rules={{
              required: true,
            }}
            render={({ field: { onChange, onBlur, value } }) => (
              <Radio
                label="6. Have you completed the Robotic Interview?"
                hint="Test yourself through the <a href='https://knowledgemission.kerala.gov.in/login-jobseeker.jsp' class='text-blue-500 underline'>Robotic Interview</a> & ace your upcoming interviews!"
                required
                name="RI_COMP"
                onChange={onChange}
                value={value}
              />
            )}
            name="RI_COMP"
          />
          <Controller
            control={control}
            rules={{
              required: true,
            }}
            render={({ field: { onChange, onBlur, value } }) => (
              <Radio
                label="7. Successfully completed the Work Readiness Programme (WRP)? Please upload your certificate.  "
                hint="Be ready for work through <a href='https://knowledgemission.kerala.gov.in/login-jobseeker.jsp' class='text-blue-500 underline'>WRP</a>  and stand out from the rest!"
                required
                name="WRP_COMP"
                onChange={onChange}
                value={value}
              />
            )}
            name="WRP_COMP"
          />
          {watch("WRP_COMP") && (
            <FileUpload
              label=""
              folderId={folderId}
              allowedFormats={["image/jpeg", "image/jpg", "application/pdf"]}
            />
          )}
        </>
      </Accordian>
      <Accordian
        header="3. Industry Connect Activities"
        bg="#3E3E98"
        error={Boolean(errors?.PT_WRK_SHP_COUNT?.message)}
      >
        <>
          <div className="text-[#2b2c31] ml-4 mt-2">
            How updated are you with the industry and emerging trends? Have you
            taken some time out to connect with industry experts?
          </div>

          <Controller
            control={control}
            rules={{
              required: true,
            }}
            render={({ field: { onChange, onBlur, value } }) => (
              <Select
                label="1. How many workshops have you attended in connection with Placement Training, Resume Building and Workshops on the Future of Jobs? "
                onChange={onChange}
                options={["More than 5", "3 - 5", "2", "1", "None"]}
                required
                value={value}
                hint="Did you know that 40% of recruiters hire candidates based on resumes? Don't waste time; come and get equipped from the masters!"
                error={errors?.PT_WRK_SHP_COUNT?.message}
              />
            )}
            name="PT_WRK_SHP_COUNT"
          />

          <Controller
            control={control}
            render={({ field: { onChange, onBlur, value } }) => (
              <Radio
                label="2. Were you a participant of any Industry Insight Programmes? "
                hint="Never lose a chance to get acclimatized with the Industry! Sign up and Refresh Yourself!"
                required
                name="IIP_PART"
                onChange={onChange}
                value={value}
              />
            )}
            name="IIP_PART"
          />

          <Controller
            control={control}
            rules={{
              required: true,
            }}
            render={({ field: { onChange, onBlur, value } }) => (
              <Radio
                label="3. Did you participate in the Learning Circles Programmes? "
                hint="Learn and Grow Together with your Peers!"
                required
                name="LCP_PART"
                onChange={onChange}
                value={value}
              />
            )}
            name="LCP_PART"
          />
        </>
      </Accordian>
      <Accordian
        header="4. Placement Activities"
        bg="#3E3E98"
        error={Boolean(errors?.INTERN_COMP?.message)}
      >
        <>
          <div className="text-[#2b2c31] ml-4  mt-2">
            Are you all set to kickstart your career?
            <br />
            Dive down below to enter details of your placement activities, earn
            maximum points and top the Leaderboard!
          </div>
          <Controller
            control={control}
            rules={{
              required: true,
            }}
            render={({ field: { onChange, onBlur, value } }) => (
              <Radio
                label="1. Have you enrolled in any Skill Programmes on DWMS? "
                hint="If yes, please enter name of the Skill Programme."
                required
                name="SP_DWMS"
                onChange={onChange}
                value={value}
              />
            )}
            name="SP_DWMS"
          />

          {watch("SP_DWMS") && (
            <Controller
              control={control}
              render={({ field: { onChange, onBlur, value } }) => {
                return (
                  <InputField
                    label=""
                    error={errors?.DWMT_T?.message}
                    onChange={onChange}
                    value={value}
                  />
                );
              }}
              name="DWMT_T"
            />
          )}

          <Controller
            control={control}
            rules={{
              required: true,
            }}
            render={({ field: { onChange, onBlur, value } }) => (
              <Select
                label="2. Have you completed / are you pursuing any internships?"
                onChange={onChange}
                options={["Completed", "Pursuing", "No"]}
                required
                error={errors?.INTERN_COMP?.message}
                value={value}
                hint="If completed, please upload the completion certificate and if pursuing, please upload the internship offer letter."
              />
            )}
            name="INTERN_COMP"
          />
          {(watch("INTERN_COMP") === "Completed" ||
            watch("INTERN_COMP") === "Pursuing") && (
            <FileUpload
              label=""
              allowedFormats={["image/jpeg", "image/jpg", "application/pdf"]}
              folderId={folderId}
            />
          )}
          <Controller
            control={control}
            rules={{
              required: true,
            }}
            render={({ field: { onChange, onBlur, value } }) => (
              <Radio
                label="3. Have you attended any placement / recruitment drives?"
                hint=""
                required
                name="ATTN_PLCMNT_DRV"
                onChange={onChange}
                value={value}
              />
            )}
            name="ATTN_PLCMNT_DRV"
          />

          <Controller
            control={control}
            rules={{
              required: true,
            }}
            render={({ field: { onChange, onBlur, value } }) => (
              <Radio
                label="4. Have you received offer letters from any employer?"
                hint=""
                required
                name="OFR_LTR"
                onChange={onChange}
                value={value}
              />
            )}
            name="OFR_LTR"
          />

          {watch("OFR_LTR") && (
            <FileUpload
              label=""
              allowedFormats={["image/jpeg", "image/jpg", "application/pdf"]}
              folderId={folderId}
            />
          )}

          <Controller
            control={control}
            rules={{
              required: true,
            }}
            render={({ field: { onChange, onBlur, value } }) => (
              <Radio
                label="5. Have you been shortlisted for any jobs?"
                hint=""
                required
                name="JB_SHRT_LST"
                onChange={onChange}
                value={value}
              />
            )}
            name="JB_SHRT_LST"
          />
          <Controller
            control={control}
            rules={{
              required: true,
            }}
            render={({ field: { onChange, onBlur, value } }) => (
              <TextArea
                onChange={onChange}
                value={value}
                label="6. Have you participated in any other placement activities conducted in your institution (E.g. Hackathons)? If so, please share details. "
              />
            )}
            name="PLMNT_ACCT_TEXT"
          />
        </>
      </Accordian>
      <div className="md:w-1/2  w-full p-2 flex flex-col md:gap-4  md:flex-row-reverse md:justify-start justify-end">
        <Button
          label="Save"
          onPress={handleSubmit(onSubmit)}
          customStyle=" bg-[#3E3E98]"
        />
        <Button
          label="Cancel"
          onPress={() => {
            route.push("/student/login");
          }}
          customStyle=" bg-[#6B6B6B]"
        />
      </div>
      <Footer />
    </div>
  );
};

export default Page;
