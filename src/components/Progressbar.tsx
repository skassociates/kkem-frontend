import React from "react";

interface Props {
  max: number;
  value: number;
  label: string;
}

function Progressbar({ label = "65%", max = 6, value = 3 }: Props) {
  const createArray = (n: number) => {
    var result = [];
    for (var i = 1; i <= n; i++) {
      result.push(i);
    }
    return result;
  };
  return (
    <div className="flex flex-row gap-4 items-center mt-2">
      <div className="flex flex-row gap-4">
        {createArray(max).map((obj) => {
          console.log(obj);
          return (
            <div
              key={obj}
              className={`min-w-[30px] min-h-[13px] rounded-md ${
                obj > value ? "bg-[#B7DEEA] " : "bg-[#003B89]"
              }`}
            ></div>
          );
        })}
      </div>

      <div>{label}</div>
    </div>
  );
}

export default Progressbar;
