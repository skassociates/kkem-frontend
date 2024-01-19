"use client";

import Button from "@/components/Button";
import Link from "next/link";
import React from "react";

const Page = () => {
  return (
    <div className="min-h-screen w-full bg-[#E1E1FF] flex flex-col justify-center items-center  py-8 px-2 ">
      <div className="md:w-1/2 border border-[#3E3E98] rounded-xl ">
        <div className="bg-[#3E3E98] px-9 py-4 text-white rounded-t-xl   ">
          Instructions
        </div>
        <div className="p-9">
          <div className="text-3xl">
            Kerala Skills Express - <br />
            Student Leaderboard Form
          </div>
          <div className="mt-8 text-lg">
            As part of the Connect Career to Campus (CCC) Campaign, KKEM is
            proud to introduce the{" "}
            <span className="font-bold">CCC Leaderboard</span> to help you
            analyse your employability skills. Through a series of questions and
            answers, we would like you to embark on this journey and become a
            top scorer on the CCC Leaderboard! Complete all the required
            activities, earn maximum points, and stand a chance to be the CCC
            Leaderboard Topper! <br /> <br />
            Kindly take a few moments to read the instructions below: <br />{" "}
            <br />
            <ul className="list-decimal list-outside ml-5">
              <li>
                All registered students are requested to answer the following
                questions and be a part of the CCC Leaderboard. Ensure that you
                are using the DWMS registered Email Address and DWMS ID to login
                and submit your responses.{" "}
              </li>
              <li>
                A few questions would require you to submit a proof that
                supports your response. Please keep it ready to ease the
                process.
              </li>
              <li>
                Please follow this naming convention for the supporting
                documents - DWMS ID_Your Name_Proof for (Name of Section).{" "}
              </li>
              <li>For instance, DW101010_Ann Michael_Proof for WRP</li>
              <li>
                Kindly ensure that any Personal Identifiable Information (PII)
                in the document is masked before uploading. KKEM is in no way
                responsible for the loss of PII from these documents.{" "}
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
