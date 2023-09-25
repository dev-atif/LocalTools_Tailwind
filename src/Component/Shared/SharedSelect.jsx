import React from "react";
import Select, { components } from "react-select";
const SharedSelect = ({
  Values,
  label,
  textsize,
  placeholder,
  textcolor,
  bordercolor,
  stroke,
  bg,
  onChange,
  name,
  Value
}) => {
  const DropdownIndicator = (props) => {
    return (
      <components.DropdownIndicator {...props}>
        <svg
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M4 9L12 17L20 9"
            stroke={stroke === "white" ? "white" : "#92929D"}
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      </components.DropdownIndicator>
    );
  };

  return (
    <div>
      <div className="flex flex-col py-2">
        <label
          className={`${textsize} 2xl:text-lg font-semibold font-Mont ${textcolor}`}
        >
          {label}
        </label>
        <div
          className={`border ${
            bordercolor === "white"
              ? "border-white"
              : bordercolor === "none"
              ? "border-0"
              : bordercolor === "blue"
              ? "border-[#00005B]"
              : bordercolor === "lightgray"
              ? "border-[#E2E2EA]"
              : "border-[#92929D]"
          } rounded-lg w-full ${bg}`}
        >
          <Select
            options={Values}
            styles={selectStyle}
            components={{ DropdownIndicator }}
            placeholder={placeholder}
            onChange={onChange}
          
          />
        </div>
      </div>
    </div>
  );
};

export default SharedSelect;
const selectStyle = {
  control: (styles) => ({
    ...styles,
    backgroundColor: "transparent",
    borderRadius: "8px",
    outline: "none",
    boxShadow: "none",
    border: "none",
    padding: "3px",
  }),
  option: (styles, { isFocused, isSelected }) => ({
    ...styles,

    backgroundColor: isSelected
      ? "#E5E7EB" // Background color for the selected option
      : isFocused
      ? "transparent ,outline-none" // Background color for the focused option
      : "transparent", // Default background color for other options
    color: isSelected ? "black" : "#4B5563",
  }),
  singleValue: (styles, { data, text }) => ({
    ...styles,
    backgroundColor: "transparent",
    color: data.text === "text " ? "#FFFFFF" : "black",
    fontWeight: "600",
  }),
  indicatorSeparator: () => null,
};
