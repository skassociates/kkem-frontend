import React from "react";

interface Props {
  onChange: (e: any) => void;
  value?: string;
}

const TextArea: React.FC<Props> = ({ onChange, value }) => {
  return (
    <div className="mt-4">
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
