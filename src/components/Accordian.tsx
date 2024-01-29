/* eslint-disable @next/next/no-img-element */
"use client ";
import React, { useState } from "react";

interface Props {
  children: JSX.Element;
  header: string;
  error?: boolean;
  bg?: string;
}

const Accordian: React.FC<Props> = ({ children, header, error, bg }) => {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <div
      className={`md:w-1/2  w-[98%] border rounded-xl mt-10 ${
        error ? "border-[#ED0131]" : `border-[${bg}]`
      }`}
    >
      <div
        className={` px-9 py-4 text-white  justify-between  flex cursor-pointer ${
          error ? "bg-[#ED0131]" : `bg-[${bg}] `
        }  ${isOpen ? "rounded-t-xl" : "rounded-xl"}`}
        onClick={() => {
          isOpen ? setIsOpen(false) : setIsOpen(true);
        }}
      >
        <div>{header}</div>
        <div>
          <img
            src="/downarrow.svg"
            alt="arrow"
            width={20}
            height={20}
            className={isOpen ? "rotate-180" : "rotate-0"}
          />
        </div>
      </div>
      {isOpen && <div className="p-9">{children}</div>}
    </div>
  );
};

export default Accordian;
