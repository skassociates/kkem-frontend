/* eslint-disable @next/next/no-img-element */
/* eslint-disable @next/next/no-async-client-component */
"use client";
import Link from "next/link";

const Page = () => {
  return (
    <div className="h-screen w-full bg-white flex flex-col justify-center items-center">
      <div className="md:w-1/3 ">
        <div className="bg-[#EEEEFB] p-[40px] rounded-[22px] ">
          <div className="text-[32px]  font-semibold">Way to Go! </div> <br />
          <div>
            Thank you for sharing your inputs for the Employability Quotient
            Leaderboard. You may edit your responses in future upon completion
            of pending segments, and also view your points on the Leaderboard.{" "}
            <br />
            <br /> Keep participating in our activities, enhance your
            employability, and grab a spot on the Leaderboard!
          </div>
        </div>
        <Link href={"/student/login"}>
          <div className="bg-[#3D3E98]  text-white rounded-[12px] w-[100px] h-[40px] p-2 mt-2 flex flex-row justify-around items-center gap-2">
            <img src="/console/right.svg" alt="" className="w-[22px] h-[22px]" />
            Home
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Page;
