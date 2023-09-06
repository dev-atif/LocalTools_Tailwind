import React from 'react'
import Select from "react-select";
const options = [
    { value: "1", label: "Option 0" },
    { value: "2", label: "Option 1" },
    { value: "3", label: "Option 2" },
    { value: "4", label: "Option 3" },
  ];
const CategorySelect = () => {
  return (
    <>
    <div>
    <Select
            options={options}
            placeholder={"All Categories"}
            styles={customStyles}
          />
    </div>
    </>
  )
}

export default CategorySelect
const customStyles = {
    control: (provided) => ({
      ...provided,
      backgroundColor: "black",
      padding: "5px", // Background color of the dropdown
      width: "100%",
      border: "none", // Remove border on focus
      outline: "none",
      boxShadow: "none",
      color: "white",
      borderRadius: "10px",
    }),
    placeholder: (provided) => ({
      ...provided,
      color: "white", // Color of the placeholder text
    }),
    singleValue: (provided) => ({
      ...provided,
      color: "white", // Color of the selected value
    }),
    indicatorSeparator: () => null,
    dropdownIndicator: (provided) => ({
      ...provided,
      color: "white", // Color of the dropdown arrow icon
    }),
    option: (provided) => ({
      ...provided,
      backgroundColor: "white", // Background color of the options
      color: "black", // Color of the text within options
    }),
    input: (provided) => ({
      ...provided,
      color: "white", // Color of the text in the input
    }),
  };