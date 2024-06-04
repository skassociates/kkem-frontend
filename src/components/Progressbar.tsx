import React from "react";

interface Props {
  max: number;
  value: number;
  label: string;
  color: string;
}

function Progressbar({
  label = "65%",
  max = 6,
  value = 0,
  color = "white",
}: Props) {
  const createArray = (n: number) => {
    var result = [];
    for (var i = 1; i <= n; i++) {
      result.push(i);
    }
    return result;
  };
  return (
    <div className="flex flex-row gap-4 items-center mt-2">
      <div className="flex flex-row gap-2.5">
        {createArray(max).map((obj) => {
          return (
            <div
              key={obj}
              className={`min-w-[30px] min-h-[13px] rounded-md ${
                obj > value
                  ? "bg-white/50 "
                  : color == "blue"
                  ? "bg-[#003B89]"
                  : "bg-white"
              }`}
            ></div>
          );
        })}
      </div>

      <div className={`${color == "blue" ? "text-[#003B89]" : "text-white"}`}>
        {label}
      </div>
    </div>
  );
}

export default Progressbar;
