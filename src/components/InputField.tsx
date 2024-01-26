import React from "react";

interface Props {
  label: string;
  required?: boolean;
  error?: string;
  onChange: (e: any) => void;
  value?: string;
  readOnly?: boolean;
}

const InputField: React.FC<Props> = ({
  label,
  required,
  error,
  onChange,
  value,
  readOnly,
}) => {
  return (
    <div className="mt-7">
      <div className="text-[#6F7482] ">
        {label}
        {required && <span className="text-[#ED0131]">*</span>}
      </div>
      <input
        type="text"
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
