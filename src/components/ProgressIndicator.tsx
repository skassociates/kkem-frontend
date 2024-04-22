import React from "react";

export type Props = {
  width: number;
};

const ProgressIndicator = ({ width }: Props) => {
  return (
    <div className="flex gap-3 items-center">
      <div className="h-[13px] w-full rounded-full bg-transparent/20 relative">
        <div
          style={{ width: width + "%" }}
          className={`h-full rounded-full absolute top-0 left-0 bg-white/50`}
        ></div>
      </div>
      <span className="text-white">{width}%</span>
    </div>
  );
};

export default ProgressIndicator;
