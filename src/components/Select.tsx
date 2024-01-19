import React from "react";

interface Props {
  label: string;
  required: boolean;
  hint?: string;
  options: Array<string>;
}

const Select: React.FC<Props> = ({ label, required, hint, options }) => {
  return (
    <div className="mt-7">
      <div className="text-base">
        {label}
        {required && <span className="text-[#ED0131]"> *</span>}
      </div>
      <div className="text-[#6F7482] ml-4 italic mt-2">{hint}</div>
      <select
        name="skdhb"
        id="kbhsh"
        className="p-3 w-full border-0 outline-none rounded mt-3"
      >
        <option value="">Select an Option</option>
        {options.map((obj, index) => {
          return (
            <option value={obj} key={index}>
              {obj}
            </option>
          );
        })}
      </select>
    </div>
  );
};

export default Select;
