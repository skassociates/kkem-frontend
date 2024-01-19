"use client";
import Accordian from "@/app/components/Accordian";
import Button from "@/app/components/Button";
import FileUpload from "@/app/components/FileUpload";
import InputField from "@/app/components/InputField";
import Radio from "@/app/components/Radio";
import TextArea from "@/app/components/TextArea";
import { studentFormvalidationSchema } from "@/app/schema/validation";
import { yupResolver } from "@hookform/resolvers/yup";
import React from "react";
import { Controller, useForm } from "react-hook-form";
import { toast } from "react-toastify";

const Page = () => {
  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm({
    defaultValues: {
      dwms: "",
      emailId: "",
      institution: "",
      student: "",
      c1: false,
      c2: false,
      c3: false,
      c4: false,
      c5: false,
      c6: false,
      c7: false,
      i1: false,
      i2: false,
      i3: false,
      p1: false,
      p2: false,
      p3: false,
      p4: false,
      p5: false,
      p6: false,
      p6Text: "",
    },
    resolver: yupResolver(studentFormvalidationSchema),
  });

  const onSubmit = (data: any) => {
    console.log(data);
  };

  console.log(errors);
  return (
    <div className=" min-h-screen w-full  bg-[#E1E1FF] flex flex-col  items-center  pb-8 px-4 scrollbar scrollbar-thumb-red-900 scrollbar-track-gray-100 ">
      <Accordian
        header="1. Personal Details"
        error={Boolean(
          errors?.dwms?.message ||
            errors?.emailId?.message ||
            errors?.institution?.message ||
            errors?.student?.message
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
                error={errors?.emailId?.message}
                onChange={onChange}
              />
            )}
            name="emailId"
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
                error={errors?.institution?.message}
                onChange={onChange}
              />
            )}
            name="institution"
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
                error={errors?.student?.message}
                onChange={onChange}
              />
            )}
            name="student"
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
                error={errors?.dwms?.message}
                onChange={onChange}
              />
            )}
            name="dwms"
          />

          <FileUpload label="Photo" />
        </>
      </Accordian>
      <Accordian header="2. Curation Activities">
        <>
          <Controller
            control={control}
            rules={{
              required: true,
            }}
            render={({ field: { onChange, onBlur, value } }) => (
              <Radio
                label="1. Is your profile on the DWMS platform complete? Have you taken the first step to set your career path?"
                hint="If you have still not reached 100%, don't worry! Click here to complete your profile."
                required
                name="c1"
                onChange={onChange}
                value={value}
              />
            )}
            name="c1"
          />
          <Controller
            control={control}
            rules={{
              required: true,
            }}
            render={({ field: { onChange, onBlur, value } }) => (
              <Radio
                label="2. Did you take time to complete your Career Assessment? "
                hint="Yet to take the assessment and receive your Career Report Card? Wait no more - click here to start the test and score points!"
                required
                name="c2"
                onChange={onChange}
                value={value}
              />
            )}
            name="c2"
          />
          <Controller
            control={control}
            rules={{
              required: true,
            }}
            render={({ field: { onChange, onBlur, value } }) => (
              <Radio
                label="3. Have you attended the Career Counselling Session? *"
                hint="Yet to get guidance about your career? Login to DWMS and book your slot today!"
                required
                name="c3"
                onChange={onChange}
                value={value}
              />
            )}
            name="c3"
          />

          <Controller
            control={control}
            rules={{
              required: true,
            }}
            render={({ field: { onChange, onBlur, value } }) => (
              <Radio
                label="4. Have you successfully completed the Personality Development Training?  "
                hint="Still waiting to enhance your language capabilities and professional skills? Wait no more! Login to DWMS and get trained by the masters!"
                required
                name="c4"
                onChange={onChange}
                value={value}
              />
            )}
            name="c4"
          />

          <Controller
            control={control}
            rules={{
              required: true,
            }}
            render={({ field: { onChange, onBlur, value } }) => (
              <Radio
                label="5. Please enter your grade for British Council English Score Test *"
                hint="If you have not taken the test yet, why wait? Access the test today and flaunt your English Skills!"
                required
                name="c5"
                onChange={onChange}
                value={value}
              />
            )}
            name="c5"
          />

          <Controller
            control={control}
            rules={{
              required: true,
            }}
            render={({ field: { onChange, onBlur, value } }) => (
              <Radio
                label="6. Have you completed the Robotic Interview? *"
                hint="Test yourself through the Robotic Interview & ace your upcoming interviews!"
                required
                name="c6"
                onChange={onChange}
                value={value}
              />
            )}
            name="c6"
          />

          <Controller
            control={control}
            rules={{
              required: true,
            }}
            render={({ field: { onChange, onBlur, value } }) => (
              <Radio
                label="7. Successfully completed the Work Readiness Programme (WRP)? Please upload your certificate.  "
                hint="Be ready for work through WRP and stand out from the rest!"
                required
                name="c7"
                onChange={onChange}
                value={value}
              />
            )}
            name="c7"
          />
          <FileUpload label="" />
        </>
      </Accordian>
      <Accordian header="3. Industry Connect Activities">
        <>
          <Controller
            control={control}
            rules={{
              required: true,
            }}
            render={({ field: { onChange, onBlur, value } }) => (
              <Radio
                label="1. How many workshops have you attended in connection with Placement Training, Resume Building and Workshops on the Future of Jobs? "
                hint="Did you know that 40% of recruiters hire candidates based on resumes? Don't waste time; come and get equipped from the masters!"
                required
                name="i1"
                onChange={onChange}
                value={value}
              />
            )}
            name="i1"
          />
          <Controller
            control={control}
            rules={{
              required: true,
            }}
            render={({ field: { onChange, onBlur, value } }) => (
              <Radio
                label="2. Were you a participant of any Industry Insight Programmes? "
                hint="Never lose a chance to get acclimatized with the Industry! Sign up and Refresh Yourself!"
                required
                name="2"
                onChange={onChange}
                value={value}
              />
            )}
            name="i2"
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
                name="13"
                onChange={onChange}
                value={value}
              />
            )}
            name="i3"
          />
        </>
      </Accordian>
      <Accordian header="4. Placement Activities">
        <>
          <Controller
            control={control}
            rules={{
              required: true,
            }}
            render={({ field: { onChange, onBlur, value } }) => (
              <Radio
                label="1. Have you enrolled in any Skill Programmes on DWMS? "
                hint=""
                required
                name="p1"
                onChange={onChange}
                value={value}
              />
            )}
            name="p1"
          />
          <Controller
            control={control}
            rules={{
              required: true,
            }}
            render={({ field: { onChange, onBlur, value } }) => (
              <Radio
                label="2. Have you completed any internship? If yes, please upload a screenshot of the internship offer. *"
                hint=""
                required
                name="p2"
                onChange={onChange}
                value={value}
              />
            )}
            name="p2"
          />

          <FileUpload label="" />
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
                name="p3"
                onChange={onChange}
                value={value}
              />
            )}
            name="p3"
          />

          <Controller
            control={control}
            rules={{
              required: true,
            }}
            render={({ field: { onChange, onBlur, value } }) => (
              <Radio
                label="4. Have you received offer letters from any employer? *"
                hint=""
                required
                name="p4"
                onChange={onChange}
                value={value}
              />
            )}
            name="p4"
          />

          <FileUpload label="" />
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
                name="p5"
                onChange={onChange}
                value={value}
              />
            )}
            name="p5"
          />

          <Controller
            control={control}
            rules={{
              required: true,
            }}
            render={({ field: { onChange, onBlur, value } }) => (
              <Radio
                label="6. Have you been shortlisted for any jobs?"
                hint=""
                required
                name="p6"
                onChange={onChange}
                value={value}
              />
            )}
            name="p6"
          />
          <Controller
            control={control}
            rules={{
              required: true,
            }}
            render={({ field: { onChange, onBlur, value } }) => <TextArea />}
            name="p6Text"
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
