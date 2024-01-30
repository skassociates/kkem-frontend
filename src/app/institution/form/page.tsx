/* eslint-disable @next/next/no-img-element */
"use client";
import Accordian from "@/components/Accordian";
import Button from "@/components/Button";
import InputField from "@/components/InputField";
import Radio from "@/components/Radio";
import Select from "@/components/Select";
import { instituteDetails } from "@/schema/student";
import { institutionFormvalidationSchema } from "@/schema/validation";
import { form } from "@/services/api/form";
import { axiosInstance } from "@/services/request/request";
import { yupResolver } from "@hookform/resolvers/yup";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { Controller, useForm } from "react-hook-form";
import { toast } from "react-toastify";

interface MyData {
  EMAIL_ID: string;
  INST_NAME: string;
}
const Page = () => {
  const [institutionDetails, setInstitutionDetails] =
    useState<instituteDetails>();
  const [instData, setDataObj] = useState<MyData | null>(null);

  useEffect(() => {
    const storedData = localStorage.getItem("dataObj");
    if (storedData) {
      try {
        // Parse JSON data and remove any trailing characters (e.g., '4')
        const cleanedData = storedData.replace(/[^{}:\w\s,"'.]+/g, "");
        const parsedData: MyData = JSON.parse(cleanedData);
        setDataObj(parsedData);
        setValue("EMAIL_ID", parsedData.EMAIL_ID);
        setValue("INST_NAME", parsedData.INST_NAME);
      } catch (error) {
        console.error("Error parsing data from localStorage:", error);
      }
    }
  }, []);
  const {
    handleSubmit,
    control,
    setValue,
    formState: { errors },
  } = useForm({
    defaultValues: {
      EMAIL_ID: institutionDetails?.EMAIL_ID || "",
      INST_NAME: institutionDetails?.INST_NAME || "",
      PLC_CORD_NAME: institutionDetails?.PLC_CORD_NAME || "",
      TOT_STR: institutionDetails?.TOT_STR || "",
      RRCMNT_DRV_COUNT: institutionDetails?.RRCMNT_DRV_COUNT || "",
      PLC_DRV_JOB_OFR_COUNT: institutionDetails?.PLC_DRV_JOB_OFR_COUNT || "",
      INTRN_SHP_STD_COUNT: institutionDetails?.INTRN_SHP_STD_COUNT || "",
      PLCMNT_ACT: institutionDetails?.PLCMNT_ACT || false,
    },
    resolver: yupResolver(institutionFormvalidationSchema),
    values: institutionDetails,
  });

  const route = useRouter();

  const onSubmit = (data: any) => {
    const get = toast.loading("Updating...");
    form
      .updateInstitutionDetails(data)
      .then((response) => {
        toast.update(get, {
          render: "Done",
          type: "success",
          isLoading: false,
          autoClose: 1000,
        });
        route.push("/institution/thank-you");
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
      .getInstituteDetails()
      .then((response) => {
        toast.update(get, {
          render: "Done",
          type: "success",
          isLoading: false,
          autoClose: 1000,
        });
        setInstitutionDetails(response.data.institution);
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
    axiosInstance.defaults.headers.post["Authorization"] =
      localStorage.getItem("AUTH_TOKEN");
    fetchdata();
  }, []);

  return (
    <div className=" min-h-screen w-full  bg-[#EADDFF] flex flex-col  items-center  pb-8 scrollbar scrollbar-thumb-red-900 scrollbar-track-gray-100 ">
      <img
        src="/Googleform.png"
        alt=""
        className=" h-[412px] hidden md:flex "
      />
      <Accordian
        bg="#613D97"
        header="1. Personal Details"
        error={Boolean(
          errors?.PLC_CORD_NAME?.message ||
            errors?.EMAIL_ID?.message ||
            errors?.INST_NAME?.message ||
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
                readOnly
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
                label="Name of Placement Coordinator "
                required
                error={errors?.PLC_CORD_NAME?.message}
                onChange={onChange}
                value={value}
              />
            )}
            name="PLC_CORD_NAME"
          />
          <Controller
            control={control}
            rules={{
              required: true,
            }}
            render={({ field: { onChange, onBlur, value } }) => (
              <InputField
                label="Total Strength of Final Year Students "
                required
                error={errors?.TOT_STR?.message}
                onChange={onChange}
                value={value}
                type="number"
              />
            )}
            name="TOT_STR"
          />
        </>
      </Accordian>
      <Accordian
        header="2. Placement Activities"
        bg="#613D97"
        error={Boolean(
          errors?.RRCMNT_DRV_COUNT?.message ||
            errors?.PLC_DRV_JOB_OFR_COUNT?.message ||
            errors?.INTRN_SHP_STD_COUNT?.message
        )}
      >
        <>
          <Controller
            control={control}
            rules={{
              required: true,
            }}
            render={({ field: { onChange, onBlur, value } }) => (
              <Select
                label="1. How many recruitment drives were conducted in your institution? "
                required
                options={[
                  "More than 10",
                  "9 - 10",
                  "6 - 8",
                  "3 - 5",
                  "1 - 2",
                  "None",
                ]}
                onChange={onChange}
                value={value}
                hint=""
                error={errors?.RRCMNT_DRV_COUNT?.message}
              />
            )}
            name="RRCMNT_DRV_COUNT"
          />
          <Controller
            control={control}
            rules={{
              required: true,
            }}
            render={({ field: { onChange, onBlur, value } }) => (
              <Select
                label="2. Number of students who got job offers through the placement drives? "
                required
                options={[
                  "More than 200",
                  "181 - 200",
                  "161 - 180",
                  "141 - 160",
                  "121 - 140",
                  "101 - 120",
                  "81 - 100",
                  "61 - 80",
                  "41 - 60",
                  "21 - 40",
                  "1 - 20",
                  "None",
                ]}
                onChange={onChange}
                value={value}
                hint=""
                error={errors?.PLC_DRV_JOB_OFR_COUNT?.message}
              />
            )}
            name="PLC_DRV_JOB_OFR_COUNT"
          />

          <Controller
            control={control}
            rules={{
              required: true,
            }}
            render={({ field: { onChange, onBlur, value } }) => (
              <Select
                label="3. How many of your students have completed internships? "
                required
                options={[
                  "More than 200",
                  "181 - 200",
                  "161 - 180",
                  "141 - 160",
                  "121 - 140",
                  "101 - 120",
                  "81 - 100",
                  "61 - 80",
                  "41 - 60",
                  "21 - 40",
                  "1 - 20",
                  "None",
                ]}
                onChange={onChange}
                value={value}
                hint=""
                error={errors?.INTRN_SHP_STD_COUNT?.message}
              />
            )}
            name="INTRN_SHP_STD_COUNT"
          />

          <Controller
            control={control}
            rules={{
              required: true,
            }}
            render={({ field: { onChange, onBlur, value } }) => (
              <Radio
                label="4.Did you conduct any other placement activities in your institution in the last 6 months (Eg. Hackathons)?"
                hint=""
                required
                name="PLCMNT_ACT"
                onChange={onChange}
                value={value}
              />
            )}
            name="PLCMNT_ACT"
          />
        </>
      </Accordian>
      <div className="md:w-1/2  w-full p-2 flex flex-col md:gap-4  md:flex-row-reverse md:justify-start justify-end">
        <Button
          label="Save"
          onPress={handleSubmit(onSubmit)}
          customStyle=" bg-[#613D97]"
        />
        <Button
          label="Cancel"
          onPress={() => {
            route.push("/institution/login");
          }}
          customStyle=" bg-[#6B6B6B]"
        />
      </div>
    </div>
  );
};

export default Page;
