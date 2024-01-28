/* eslint-disable @next/next/no-img-element */
"use client";
import Accordian from "@/components/Accordian";
import Button from "@/components/Button";
import CheckBox from "@/components/Checkbox";
import InputField from "@/components/InputField";
import Radio from "@/components/Radio";
import Select from "@/components/Select";
import { adminDetails } from "@/schema/student";
import { adminFormvalidationSchema } from "@/schema/validation";
import { form } from "@/services/api/form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { Controller, useForm } from "react-hook-form";
import { toast } from "react-toastify";

const Page = () => {
  const [adminDetails, setAdminDetails] = useState<adminDetails>();
  const {
    handleSubmit,
    control,
    formState: { errors },
    getValues,
    watch,
  } = useForm({
    defaultValues: {
      //  sec 1
      EMAIL_ID: "",
      INST_NAME: "",
      CA_NAME: "",
      TOT_STR: "",
      // sec 2
      DWMS_ORT_SSN: false,
      CUR_SRV_COMP: [],
      PCT_STD_DWMS_PROF_COMP: "",
      DWMS_HLP_DSK: false,
      // sec 3
      PCT_FY_STD_WEBNR: "",
      PCT_STD_RSM_WRK_SHP: "",
      KKEM_IIP: false,
      PCT_STD_RCM_DRV: "",
      PCT_STD_JOB_OFFR: "",
    },
    resolver: yupResolver(adminFormvalidationSchema),
    values: adminDetails,
  });
  const route = useRouter();
  const onSubmit = (data: any) => {
    const get = toast.loading("Updating...");
    form
      .upateAdminDetails(data)
      .then((response) => {
        toast.update(get, {
          render: "Done",
          type: "success",
          isLoading: false,
          autoClose: 1000,
        });
        route.push("/admin/thank-you");
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

  const fetchdata = () => {
    const get = toast.loading("Fetching Your Details....");
    form
      .getAdminDetails()
      .then((response) => {
        toast.update(get, {
          render: "Done",
          type: "success",
          isLoading: false,
          autoClose: 1000,
        });
        setAdminDetails(response.data.careerAmbassador);
      })
      .catch((error) => {
        console.log(error);
        toast.update(get, {
          render: "Something went wrong",
          type: "error",
          isLoading: false,
        });
      });
  };

  useEffect(() => {
    fetchdata();
  }, []);
  return (
    <div className=" min-h-screen w-full  bg-[#EFF8FC] flex flex-col  items-center  pb-8 px-4 scrollbar scrollbar-thumb-red-900 scrollbar-track-gray-100 ">
      <Accordian
        bg="#613D97"
        header="1. Personal Details"
        error={Boolean(
          errors?.EMAIL_ID?.message ||
            errors?.INST_NAME?.message ||
            errors?.CA_NAME?.message ||
            errors?.TOT_STR?.message
        )}
      >
        <>
          <Controller
            control={control}
            rules={{
              required: true,
            }}
            render={({ field: { onChange, onBlur, value } }) => (
              <InputField
                label="Email ID "
                required
                error={errors?.EMAIL_ID?.message}
                onChange={onChange}
                value={value}
              />
            )}
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
                label="Name of Career Ambassador  "
                required
                error={errors?.CA_NAME?.message}
                onChange={onChange}
                value={value}
              />
            )}
            name="CA_NAME"
          />
          <Controller
            control={control}
            rules={{
              required: true,
            }}
            render={({ field: { onChange, onBlur, value } }) => (
              <InputField
                label="Total Final Year Students assigned to you  "
                required
                error={errors?.TOT_STR?.message}
                onChange={onChange}
                value={value}
              />
            )}
            name="TOT_STR"
          />
        </>
      </Accordian>
      <Accordian header="2. Curation Activities" bg="#613D97">
        <>
          <Controller
            control={control}
            render={({ field: { onChange, onBlur, value } }) => (
              <Radio
                label="Did you successfully complete the DWMS Orientation Session? "
                required
                name="DWMS_ORT_SSN"
                onChange={onChange}
                value={value}
                hint=""
              />
            )}
            name="DWMS_ORT_SSN"
          />
          <Controller
            control={control}
            render={({ field: { onChange, onBlur, value } }) => (
              <CheckBox
                hint=""
                label="From the list below, select the curation services which you have completed."
                name="CUR_SRV_COMP"
                onChange={onChange}
                // value={value}
                options={[
                  "Career Assessment",
                  "Career Counselling",
                  "Personality Development Training",
                  "British Council English Score Test",
                  "Robotic Interview",
                  "Work Readiness Programme (WRP)",
                ]}
                value={value}
              />
            )}
            name="CUR_SRV_COMP"
          />
          <Controller
            control={control}
            rules={{
              required: true,
            }}
            render={({ field: { onChange, onBlur, value } }) => (
              <Select
                label="Percentage of final year students (assigned to you) who have completed their DWMS   profiles? "
                onChange={onChange}
                options={["100%", "60 - 90%", "30 - 60%", "1 - 30%", "Nil"]}
                required
                value={value}
              />
            )}
            name="PCT_STD_DWMS_PROF_COMP"
          />

          <Controller
            control={control}
            rules={{
              required: true,
            }}
            render={({ field: { onChange, onBlur, value } }) => (
              <Radio
                label="4. Did you arrange a helpdesk in your campus to help students with DWMS related queries? * "
                hint=""
                required
                name="DWMS_HLP_DSK"
                onChange={onChange}
                value={value}
              />
            )}
            name="DWMS_HLP_DSK"
          />
        </>
      </Accordian>
      <Accordian header="3. Industry Connect Activities" bg="#613D97">
        <>
          <Controller
            control={control}
            rules={{
              required: true,
            }}
            render={({ field: { onChange, onBlur, value } }) => (
              <Select
                hint="Did you know that students who are updated with the industry trends have a higher chance of getting employed?
Keep encouraging your peers, stay updated with industry trends and enhance your Employability Indicator!"
                label="What percentage of the final year students (assigned to you) have attended webinars on the future of jobs? "
                onChange={onChange}
                options={["100%", "60 - 90%", "30 - 60%", "1 - 30%", "Nil"]}
                required
                value={value}
              />
            )}
            name="PCT_FY_STD_WEBNR"
          />
          <Controller
            control={control}
            rules={{
              required: true,
            }}
            render={({ field: { onChange, onBlur, value } }) => (
              <Select
                hint="Resumes help 40% of recruiters to hire the best candidates. 
Create perfected resumes and land in your dream jobs!"
                label="Out of the total students in your assigned batch (since October 2023), what percentage have attended resume workshops?"
                onChange={onChange}
                options={["100%", "60 - 90%", "30 - 60%", "1 - 30%", "Nil"]}
                required
                value={value}
              />
            )}
            name="PCT_STD_RSM_WRK_SHP"
          />

          <Controller
            control={control}
            rules={{
              required: true,
            }}
            render={({ field: { onChange, onBlur, value } }) => (
              <Radio
                label="3.Has your institution partnered with KKEM to conduct any Industry Insight Programmes? "
                hint="Learn and Grow Together with your Peers!"
                required
                name="KKEM_IIP"
                onChange={onChange}
                value={value}
              />
            )}
            name="KKEM_IIP"
          />
          <Controller
            control={control}
            rules={{
              required: true,
            }}
            render={({ field: { onChange, onBlur, value } }) => (
              <Select
                label="How many of your assigned students attended recruitment drives conducted in your institution? "
                onChange={onChange}
                options={["100%", "60 - 90%", "30 - 60%", "1 - 30%", "Nil"]}
                required
                value={value}
              />
            )}
            name="PCT_STD_RCM_DRV"
          />
          <Controller
            control={control}
            rules={{
              required: true,
            }}
            render={({ field: { onChange, onBlur, value } }) => (
              <Select
                label="How many of the assigned students received job offers through the placement drives? "
                onChange={onChange}
                options={["100%", "60 - 90%", "30 - 60%", "1 - 30%", "Nil"]}
                required
                value={value}
              />
            )}
            name="PCT_STD_JOB_OFFR"
          />
        </>
      </Accordian>
      <div className="w-1/2  flex justify-end">
        <Button label="Save" onPress={handleSubmit(onSubmit)} />
      </div>
    </div>
  );
};

export default Page;
