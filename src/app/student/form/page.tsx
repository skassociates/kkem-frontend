"use client";
import Accordian from "@/app/components/Accordian";
import Button from "@/app/components/Button";
import FileUpload from "@/app/components/FileUpload";
import InputField from "@/app/components/InputField";
import Radio from "@/app/components/Radio";
import TextArea from "@/app/components/TextArea";
import React from "react";
import { toast } from "react-toastify";

const Page = () => {
  return (
    <div className=" min-h-screen w-full  bg-[#E1E1FF] flex flex-col  items-center  pb-8 px-4 scrollbar scrollbar-thumb-red-900 scrollbar-track-gray-100 ">
      <Accordian header="1. Personal Details">
        <>
          <InputField label="Email ID " required />
          <InputField label="Name of Institution " required />
          <InputField label="Name of Student " required />
          <InputField label="DWMS ID " required />
          <FileUpload label="Photo" />
        </>
      </Accordian>
      <Accordian header="2. Curation Activities">
        <>
          <Radio
            label="1. Is your profile on the DWMS platform complete? Have you taken the first step to set your career path?"
            hint="If you have still not reached 100%, don't worry! Click here to complete your profile."
            required
            name="a"
          />
          <Radio
            label="2. Did you take time to complete your Career Assessment? "
            hint="Yet to take the assessment and receive your Career Report Card? Wait no more - click here to start the test and score points!"
            required
            name="b"
          />
          <Radio
            label="3. Have you attended the Career Counselling Session? *"
            hint="Yet to get guidance about your career? Login to DWMS and book your slot today!"
            required
            name="c"
          />
          <Radio
            label="4. Have you successfully completed the Personality Development Training?  "
            hint="Still waiting to enhance your language capabilities and professional skills? Wait no more! Login to DWMS and get trained by the masters!"
            required
            name="d"
          />
          <Radio
            label="5. Please enter your grade for British Council English Score Test *"
            hint="If you have not taken the test yet, why wait? Access the test today and flaunt your English Skills!"
            required
            name="e"
          />
          <Radio
            label="6. Have you completed the Robotic Interview? *"
            hint="Test yourself through the Robotic Interview & ace your upcoming interviews!"
            required
            name="f"
          />
          <Radio
            label="7. Successfully completed the Work Readiness Programme (WRP)? Please upload your certificate.  "
            hint="Be ready for work through WRP and stand out from the rest!"
            required
            name="g"
          />
          <FileUpload label="" />
        </>
      </Accordian>
      <Accordian header="3. Industry Connect Activities">
        <>
          <Radio
            label="1. How many workshops have you attended in connection with Placement Training, Resume Building and Workshops on the Future of Jobs? "
            hint="Did you know that 40% of recruiters hire candidates based on resumes? Don't waste time; come and get equipped from the masters!"
            required
            name="h"
          />
          <Radio
            label="2. Were you a participant of any Industry Insight Programmes? "
            hint="Never lose a chance to get acclimatized with the Industry! Sign up and Refresh Yourself!"
            required
            name="i"
          />
          <Radio
            label="3. Did you participate in the Learning Circles Programmes? "
            hint="Learn and Grow Together with your Peers!"
            required
            name="j"
          />
        </>
      </Accordian>
      <Accordian header="4. Placement Activities">
        <>
          <Radio
            label="1. Have you enrolled in any Skill Programmes on DWMS? "
            hint=""
            required
            name="k"
          />
          <Radio
            label="2. Have you completed any internship? If yes, please upload a screenshot of the internship offer. *"
            hint=""
            required
            name="l"
          />
          <FileUpload label="" />
          <Radio
            label="3. Have you attended any placement / recruitment drives?"
            hint=""
            required
            name="m"
          />
          <Radio
            label="4. Have you received offer letters from any employer? *"
            hint=""
            required
            name="m"
          />
          <FileUpload label="" />
          <Radio
            label="5. Have you been shortlisted for any jobs?"
            hint=""
            required
            name="n"
          />
          <Radio
            label="6. Have you been shortlisted for any jobs?"
            hint=""
            required
            name="o"
          />
          <TextArea />
        </>
      </Accordian>
      <div className="w-1/2  flex justify-end">
        <Button
          label="Save"
          onPress={() => {
            toast("Form saved successfully", {
              type: "success",
            });
          }}
        />
      </div>
    </div>
  );
};

export default Page;
