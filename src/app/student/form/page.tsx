/* eslint-disable @next/next/no-img-element */
"use client";
import Accordian from "@/components/Accordian";
import Button from "@/components/Button";
import FileUpload from "@/components/FileUpload";
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
console.log(errors);

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
      
      <img
        src="/Googleform.png"
        alt=""
        className=" h-[412px] hidden md:flex "
      />
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
          <div className="text-[#6F7482] ml-4 italic mt-2">
            Congratulations on taking your first step towards enhancing your
            Employability!
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

          <FileUpload label="Photo" />
        </>
      </Accordian>
      <Accordian
        header="2. Curation Activities"
        bg="#3E3E98"
        error={Boolean(errors?.BCEST_GRADE?.message)}
      >
        <>
          <div className="text-[#6F7482] ml-4 italic mt-2">
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
          {watch("WRP_COMP") && <FileUpload label="" />}
        </>
      </Accordian>
      <Accordian
        header="3. Industry Connect Activities"
        bg="#3E3E98"
        error={Boolean(errors?.PT_WRK_SHP_COUNT?.message)}
      >
        <>
          <div className="text-[#6F7482] ml-4 italic mt-2">
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
          <div className="text-[#6F7482] ml-4 italic mt-2">
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
            watch("INTERN_COMP") === "Pursuing") && <FileUpload label="" />}
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

          {watch("OFR_LTR") && <FileUpload label="" />}

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
      <footer className="py-4 w-full pt-10 ">
        <div className="flex items-center">
          <hr className="flex-grow border-t border-gray-300"></hr>
        </div>
        <div className="container mx-auto flex justify-between items-center pt-4">
          <div className="text-black">
            <p>© 2022 Copyright KHEM || KDSC</p>
            <p>4th Floor, India Heights Building,</p>
            <p>Govt. Women’s College Road, Vazhuthacaud,</p>
            <p>Thiruvananthapuram</p>
          </div>
          <div className="flex space-x-4">
            <a href="#" className="text-gray-500 hover:text-gray-900">
              <svg
                className="w-10 h-10"
                fill="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path
                  fill-rule="evenodd"
                  d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                  clip-rule="evenodd"
                ></path>
              </svg>
            </a>
            <a href="#" className="text-gray-500 hover:text-gray-900">
              <svg
                className="w-10 h-10"
                fill="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path
                  fill-rule="evenodd"
                  d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
                  clip-rule="evenodd"
                ></path>
              </svg>
            </a>
            <a
              href=""
              className="text-gray-500 hover:text-gray-900"
              aria-label="Find us on LinkedIn"
              target="_blank"
              rel="noopener"
            >
              <svg
                className="h-11 w-10"
                viewBox="0 0 60 60"
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M44.45 0H3.55A3.5 3.5 0 0 0 0 3.46v41.07A3.5 3.5 0 0 0 3.54 48h40.9A3.51 3.51 0 0 0 48 44.54V3.46A3.5 3.5 0 0 0 44.45 0Zm-30.2 40.9H7.11V18h7.12v22.9Zm-3.57-26.03a4.13 4.13 0 1 1-.02-8.26 4.13 4.13 0 0 1 .02 8.26ZM40.9 40.9H33.8V29.77c0-2.66-.05-6.08-3.7-6.08-3.7 0-4.27 2.9-4.27 5.89V40.9h-7.1V18h6.82v3.12h.1c.94-1.8 3.26-3.7 6.72-3.7 7.21 0 8.54 4.74 8.54 10.91V40.9Z"
                  fill="currentColor"
                ></path>
              </svg>
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Page;
