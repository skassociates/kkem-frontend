"use client";
import Button from "@/components/Button";
import InputField from "@/components/InputField";
import Link from "next/link";
import React from "react";

const Page = () => {
  return (
    <div className="h-screen w-full bg-[#EADDFF] flex flex-col justify-center items-center">
      <div className="md:w-1/3">
        <InputField label="Institution ID" />
        <InputField label="Email ID" />
        <div className="flex justify-center">
          <Link href={"/student/instructions"}>
            <Button label="Login" customStyle={"min-w-60"} onPress={() => {}} />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Page;
