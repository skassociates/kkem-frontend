import Link from "next/link";
import React from "react";

const Page = () => {
  return (
    <div className="w-full h-screen flex flex-col justify-center items-center gap-4 text-2xl">
      <Link href={"/student/login"}>
        <div className="bg-[#3E3E98] px-4 py-2 text-white rounded-full">
          Student
        </div>
      </Link>
      <Link href={"/institution/login"}>
        <div className="bg-[#613D97] px-4 py-2 text-white rounded-full">
          Institution
        </div>
      </Link>
      <Link href={"/admin/login"}>
        <div className="bg-[#26A9DF] px-4 py-2 text-white rounded-full">
          Career Ambassidor
        </div>
      </Link>
    </div>
  );
};

export default Page;
