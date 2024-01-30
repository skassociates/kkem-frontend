/* eslint-disable @next/next/no-img-element */
import React, { useState } from "react";

interface Props {
  label: string;
  required: boolean;
  hint: string;
  options: Array<string>;
  onChange: (e: string) => void;
  value: string;
  poPup?: {
    heading?: string;
    desc?: string;
  };
  error?: string;
}

const Select: React.FC<Props> = ({
  label,
  required,
  hint,
  options,
  onChange,
  value,
  poPup,
  error,
}) => {
  const [popup, setPopup] = useState(false);
  return (
    <div className="mt-7 relative">
      {popup && (
        <div className="w-full bg-white rounded-lg shadow-2xl md:w-1/2 p-4 absolute ">
          <div
            onClick={() => {
              setPopup(false);
            }}
          >
            <img src="/close.svg" alt="" className="absolute right-1 top-1" />
          </div>
          <div>{poPup?.heading}</div>
          <div className="italic text-[#6F7482]">{poPup?.desc}</div>
        </div>
      )}
      <div className="text-base flex">
        <div>
          {label}
          {required && <span className="text-[#ED0131]"> *</span>}
        </div>
        <div>
          {poPup?.heading && (
            <div
              className="ml-2"
              onClick={() => {
                setPopup(true);
              }}
            >
              <img src="/info.svg" alt="" />
            </div>
          )}
        </div>
      </div>
      <div
        className="text-[#6F7482] ml-4 italic mt-2"
        dangerouslySetInnerHTML={{ __html: hint }}
      ></div>
      <select
        name="skdhb"
        id="kbhsh"
        className={`p-3 w-full border-0 outline-none rounded mt-3 ${
          error && "border-[1px] border-[#ED0131]"
        }`}
        onChange={(e) => {
          onChange(e.target.value);
        }}
      >
        <option value={""}>Select an Option</option>
        {options.map((obj, index) => {
          return (
            <option value={obj} key={index} selected={obj === value}>
              {obj}
            </option>
          );
        })}
      </select>
      {error && <div className="text-[#ED0131] text-xs pt-0.5">{error}</div>}
    </div>
  );
};

export default Select;
