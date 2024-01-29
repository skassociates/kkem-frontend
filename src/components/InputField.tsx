/* eslint-disable @next/next/no-img-element */
import React, { useState } from "react";

interface Props {
  label: string;
  required?: boolean;
  error?: string;
  onChange: (e: any) => void;
  value?: string;
  readOnly?: boolean;
  poPup?: {
    heading?: string;
    desc?: string;
  };
  type?: string;
}

const InputField: React.FC<Props> = ({
  label,
  required,
  error,
  onChange,
  value,
  readOnly,
  poPup,
  type = "text",
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
      <div className="text-[#6F7482] flex">
        <div>
          {label}
          {required && <span className="text-[#ED0131]">*</span>}
        </div>
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
      <input
        type={type}
        className={`p-3 w-full border-0 outline-none rounded ${
          error && "border-[1px] border-[#ED0131]"
        }`}
        onChange={(e) => {
          onChange(e.target.value);
        }}
        defaultValue={value}
        readOnly={readOnly}
      />
      {error && <div className="text-[#ED0131] text-xs">{error}</div>}
    </div>
  );
};

export default InputField;
