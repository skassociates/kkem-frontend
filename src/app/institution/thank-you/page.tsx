/* eslint-disable @next/next/no-img-element */
/* eslint-disable @next/next/no-async-client-component */
"use client";
import Link from "next/link";

const Page = () => {
  return (
    <div className="h-screen w-full bg-white flex flex-col justify-center items-center">
      <div className="md:w-1/3 ">
        <div className="bg-[#F7F2FF] p-[40px] rounded-[22px] ">
          <div className="text-[32px]  font-semibold">
            Great initiatives! Really appreciate your efforts to support your
            students!
          </div>{" "}
          <br />
          <div>
            Thank you for sharing your inputs for the Employability Enhancement
            Indicator Leaderboard. You may edit your responses in future upon
            completion of pending segments, and also view your points on the
            Leaderboard. <br />
            <br /> Keep motivating your students, help them enhance their
            employability, and grab yourself a spot on the Leaderboard! Best
            Wishes!
          </div>
        </div>
        <Link href={"/institution/login"}>
          <div className="bg-[#613D97]  text-white rounded-[12px] w-[100px] h-[40px] p-2 mt-2 flex flex-row justify-around items-center gap-2">
            <img src="/right.svg" alt="" className="w-[22px] h-[22px]" />
            Home
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Page;
