import React from "react";

interface Props {
  label: string;
  hint: string;
  required?: boolean;
  name: string;
  onChange: (e: boolean) => void;
  value?: boolean;
}

const Radio: React.FC<Props> = ({
  label,
  hint,
  required,
  name,
  onChange,
  value,
}) => {
  return (
    <div className="mt-7">
      <div className="text-base">
        {label}
        {required && <span className="text-[#ED0131]"> *</span>}
      </div>
      <div
        className="text-[#6F7482] ml-4 italic mt-2"
        dangerouslySetInnerHTML={{ __html: hint }}
      ></div>

      <div className="flex gap-5 mt-4 ml-4">
        <div className="flex items-center gap-2">
          <input
            type="radio"
            id="q"
            name={name}
            className="accent-black w-5 h-5"
            value={1}
            onClick={(e) => {
              onChange(true);
            }}
            checked={value === true}
          />
          <label htmlFor="q">Yes</label>
        </div>
        <div className="flex items-center gap-2">
          <input
            type="radio"
            id="i"
            name={name}
            className="accent-black w-5 h-5"
            value={0}
            onClick={(e) => {
              onChange(false);
            }}
            checked={value === false}
          />
          <label htmlFor="i">No</label>
        </div>
      </div>
    </div>
  );
};

export default Radio;
