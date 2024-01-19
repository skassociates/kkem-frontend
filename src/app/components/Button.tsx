import React from "react";

interface Props {
  label: string;
  customStyle?: string;
  onPress: () => void;
}

const Button: React.FC<Props> = ({ label, customStyle, onPress }) => {
  return (
    <div
      className={`h-[60px] bg-[#3D3E98] md:px-8 flex justify-center items-center rounded-md md:rounded-full text-white mt-7 cursor-pointer w-full    ${customStyle}`}
      onClick={onPress}
    >
      {label}
    </div>
  );
};

export default Button;
