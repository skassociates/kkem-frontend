import React from "react";

interface Props {
  label: string;
  hint: string;
  required?: boolean;
  name:string
}

const Radio: React.FC<Props> = ({ label, hint, required, name }) => {
  return (
    <div className="mt-7">
      <div className="text-base">
        {label}
        {required && <span className="text-[#ED0131]"> *</span>}
      </div>
      <div className="text-[#6F7482] ml-4 italic mt-2">{hint}</div>
      
    <div className="flex gap-5 mt-4 ml-4">
        <div className="flex items-center gap-2">
            <input type="radio" id="q" name={name} className="accent-black w-5 h-5"/>
            <label htmlFor="q">Yes</label>
        </div>
        <div className="flex items-center gap-2">
            <input type="radio" id="i" name={name} className="accent-black w-5 h-5"/>
            <label htmlFor="i">No</label>
        </div>
    </div>
    </div>
  );
};

export default Radio;
