/* eslint-disable @next/next/no-img-element */
"use client ";
import React, { useState } from "react";

interface Props {
  children: JSX.Element;
  header: string;
}

const Accordian: React.FC<Props> = ({ children, header }) => {
  const [isOpen, setIsOpen] = useState(true);
  console.log(isOpen)
  return (
    <div className="md:w-1/2 border border-[#3E3E98] rounded-xl mt-10">
      <div
        className={`bg-[#3E3E98] px-9 py-4 text-white  justify-between  flex cursor-pointer ${isOpen ? 'rounded-t-xl' : 'rounded-xl'}`}
        onClick={() => {
         isOpen ?  setIsOpen(false) : setIsOpen(true);
        }}
      >
        <div>{header}</div>
        <div>
          <img src="/downarrow.svg" alt="arrow" width={20} height={20} className={isOpen ? 'rotate-180' : 'rotate-0'}/>
        </div>
      </div>
      {isOpen && <div className="p-9">{children}</div>}
    </div>
  );
};

export default Accordian;
