/* eslint-disable @next/next/no-img-element */
"use client";
import Accordian from "@/components/Accordian";
import Button from "@/components/Button";
import FileUpload from "@/components/FileUpload";
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
        const parsedData: MyData = JSON.parse(storedData);
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
    watch,
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
          {watch("PLC_DRV_JOB_OFR_COUNT") && <FileUpload label="" />}

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
                label="4.Did you conduct any other placement activities in your institution in the last 6 months (Eg. Hackathons, Pooled Placement Drives)?"
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
