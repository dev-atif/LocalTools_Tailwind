import React, { useState } from "react";
import Select from "react-select";
import { Cat } from "../../Pages/Add Post/Section3";
import { useNavigate, useParams } from "react-router";


const CategorySelect = ({defaultVal}) => {

  const navigate = useNavigate();
  const {category} = useParams()


  const handleCategory = (selectedOption) => {
   
    const itemName = selectedOption.value;
    navigate(`/filter/${encodeURIComponent(itemName)}`);
  };
 
  const defaultOption = Cat.find(option => option.value === category);
  return (
    <>
      <div>
        <Select
          options={Cat}
          placeholder={ defaultVal ? defaultVal:"All Categories" }
          styles={customStyles}
          onChange={handleCategory}
          defaultValue={defaultOption }
        />
      </div>
    </>
  );
};

export default CategorySelect;
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
