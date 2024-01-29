import React from "react";

interface Props {
  onChange: (e: any) => void;
  value?: string;
  label?: string;
  required?: string;
}

const TextArea: React.FC<Props> = ({ onChange, value, label, required }) => {
  return (
    <div className="mt-4">
      <div className="text-base mb-2">
        {label}
        {required && <span className="text-[#ED0131]"> *</span>}
      </div>
      <textarea
        className="w-full h-32 rounded outline-none p-3"
        value={value}
        onChange={(e) => {
          onChange(e.target.value);
        }}
      ></textarea>
    </div>
  );
};

export default TextArea;
