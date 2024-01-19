"use client";

import Button from "@/components/Button";
import Link from "next/link";
import React from "react";

const Page = () => {
  return (
    <div className="min-h-screen w-full bg-[#EADDFF] flex flex-col justify-center items-center  py-8 px-2 ">
      <div className="md:w-1/2 border border-[#613D97] rounded-xl ">
        <div className="bg-[#613D97] px-9 py-4 text-white rounded-t-xl   ">
          Instructions
        </div>
        <div className="p-9">
          <div className="text-3xl">Institutions</div>
          <div className="mt-8 text-lg">
            As part of the Connect Career to Campus (CCC) Campaign, KKEM is
            proud to introduce the{" "}
            <span className="font-bold"> Employability Enhancement Index</span>.
            Through a series of questions and answers, we would like you to
            embark on this journey and grab a spot for your institution on the
            CCC Leaderboard! Complete all the required activities, earn maximum
            points, and stand a chance to be one of the top Institutions with
            the Highest Employability Enhancement Index!
            <br />
            <br />
            Kindly take a few moments to read the instructions below:
            <br />
            <br />
            <ul className="list-decimal list-outside ml-5">
              <li>
                All registered institutions are requested to answer the
                following questions and be a part of the CCC Leaderboard.
                Placement officers are requested to ensure the timely submission
                of the required details. Ensure that you are using the DWMS
                registered Email Address and the Institution Code to login and
                submit your responses.
              </li>
              <li>
                A few questions would require you to submit a proof that
                supports your response. Please keep it ready to ease the
                process.
              </li>
              <li>
                Please follow this naming convention for the supporting
                documents - Institution Code_Name of Institution_Proof for (Name
                of Section).
              </li>
              <li>
                For instance, INST101010_ABC College, Kollam_Proof for Placement
                Offers
              </li>
              <li>
                Kindly ensure that any Personal Identifiable Information (PII)
                in the document is masked before uploading. KKEM is in no way
                responsible for the loss of PII from these documents.
              </li>
              <li>
                Please enter accurate details for all the questions, as all the
                submitted information will be subject to verification.
              </li>
            </ul>
            <br />
            All the very best!
          </div>
        </div>
      </div>
      <div className="md:w-1/2 flex justify-end ">
        <Link href={"/student/form"}>
          <Button label="View Form" onPress={() => {}} customStyle="min-w-60" />
        </Link>
      </div>
    </div>
  );
};

export default Page;
