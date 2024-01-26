import React from "react";

interface Props {
  label: string;
  hint: string;
  required?: boolean;
  name: string;
  onChange: (e: Array<string>) => void;
  value: Array<string>;
  options: Array<string>;
}

const CheckBox: React.FC<Props> = ({
  label,
  hint,
  required,
  name,
  onChange,
  value,
  options,
}) => {
  let selectedValue: Array<string> = value;
  const onSelect = (val: string) => {
    if (value?.includes(val)) {
      const index = value.indexOf(val);
      if (index > -1) {
        selectedValue = value.splice(index, 1);
        onChange(selectedValue);
      }
    } else {
      selectedValue.push(val);
      onChange(selectedValue);
    }
  };

  return (
    <div className="mt-7">
      <div className="text-base">
        {label}
        {required && <span className="text-[#ED0131]"> *</span>}
      </div>
      <div className="text-[#6F7482] ml-4 italic mt-2">{hint}</div>
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
