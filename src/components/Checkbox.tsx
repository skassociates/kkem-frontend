import React from "react";

interface Props {
  label: string;
  hint: string;
  required?: boolean;
  name: string;
  onChange: (e: Array<string>) => void;
  value: Array<string>;
  options: Array<string>;
  error?: string;
}

const CheckBox: React.FC<Props> = ({
  label,
  hint,
  required,
  name,
  onChange,
  value,
  options,
  error,
}) => {
  const onSelect = (selectedValue: string) => {
    const updatedValues = [...value];

    if (value.includes(selectedValue)) {
      const index = value.indexOf(selectedValue);
      if (index > -1) {
        updatedValues.splice(index, 1);
        onChange(updatedValues);
      }
    } else {
      updatedValues.push(selectedValue);
      onChange(updatedValues);
    }
  };

  const isNoneSelected = value.length === 0;

  return (
    <div className="mt-7">
      {error}

      <div
        className={`text-base  ${error && "text-[#ED0131]"}
       `}
      >
        {label}
        {required && <span className="text-[#ED0131]"> *</span>}
      </div>
      <div className="text-[#6F7482] ml-4 italic mt-2">{hint}</div>
      {error && <div className="text-[#ED0131] text-xs pt-0.5">{error}</div>}

      <div className="flex flex-row flex-wrap gap-5">
        {options.map((obj, index) => {
          return (
            <div key={index}>
              <div>
                <input
                  type="checkbox"
                  // id={obj}
                  // name={obj}
                  defaultValue={obj}
                  checked={value?.includes(obj)}
                  onClick={() => {
                    onSelect(obj);
                  }}
                />
                <label htmlFor={obj}> {obj}</label>
                <br />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default CheckBox;
