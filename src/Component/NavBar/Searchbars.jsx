import React from "react";
import Select, { components } from "react-select";
const Category = [
  { value: "heavymachine", label: "Heavy Machine" },
  { value: "All", label: "All Category" },
];

const countryOptions = [
  { value: "1", label: "All US" },
  { value: "2", label: "All Germany" },
  { value: "3", label: "All China" },
];

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
          stroke="#92929D"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
    </components.DropdownIndicator>
  );
};
const Searbars = () => {
  return (
    <div>
      <div className="flex flex-col lg:flex-row items-center gap-3">
      
          {/* DropDown....... */}
          <div className="border border-[#F1F1F5] rounded-2xl md:pl-3 px-3 md:px-0  w-full  2xl:w-44 xl:w-[170px]   text-sm bg-[#F6F7FB] font-Robot text-color-primary-gr flex items-center">
            <span>
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M21 10C21 17 12 23 12 23C12 23 3 17 3 10C3 7.61305 3.94821 5.32387 5.63604 3.63604C7.32387 1.94821 9.61305 1 12 1C14.3869 1 16.6761 1.94821 18.364 3.63604C20.0518 5.32387 21 7.61305 21 10Z"
                  stroke="#92929D"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M12 13C13.6569 13 15 11.6569 15 10C15 8.34315 13.6569 7 12 7C10.3431 7 9 8.34315 9 10C9 11.6569 10.3431 13 12 13Z"
                  stroke="#92929D"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </span>
            <div className="w-full">
              <Select
                options={countryOptions}
                styles={selectStyle}
                components={{ DropdownIndicator }}
              />
            </div>
          </div>

          <div
            className="border border-[#F1F1F5] rounded-2xl px-3   bg-[#F6F7FB] 
          text-sm font-Robot 
           text-color-primary-gr
           flex flex-col lg:flex-row items-center w-full lg:w-auto"
          >
            <div className=" 2xl:w-44 lg:w-[150px]  w-full border-b lg:border-none pb-2 lg:pb-0 relative">
              <Select
                options={Category}
                styles={selectStyle}
                components={{ DropdownIndicator }}
              />
            </div>

            <div className="w-full md:w-auto pt-4 pb-4 lg:pt-0 lg:pb-0">
              <input
                type="text"
                className="bg-transparent text-black text-sm lg:border-l-2 px-2  md:w-auto  xl:w-[300px] 2xl:w-[600px]  border-black font-Robot focus:outline-none "
                placeholder="Search in All "
              />
            </div>
            <div>
              <span className="absolute top-[70%] right-10  lg:relative lg:top-auto lg:right-auto">
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M4.6829 4.6829C1.1057 8.2601 1.1057 14.0599 4.6829 17.6371C8.2601 21.2143 14.0599 21.2143 17.6371 17.6371C21.2143 14.0599 21.2143 8.2601 17.6371 4.6829C14.0599 1.1057 8.2601 1.1057 4.6829 4.6829ZM6.09712 6.09712C8.89327 3.30096 13.4267 3.30096 16.2229 6.09712C19.019 8.89327 19.019 13.4267 16.2229 16.2229C13.4267 19.019 8.89327 19.019 6.09712 16.2229C3.30096 13.4267 3.30096 8.89327 6.09712 6.09712Z"
                    fill="#92929D"
                  />
                  <path
                    d="M22.0943 20.2825L17.9649 16.153C17.0221 15.2102 15.6078 16.6244 16.5506 17.5672L20.6801 21.6967C21.6229 22.6395 23.0371 21.2253 22.0943 20.2825Z"
                    fill="#92929D"
                  />
                </svg>
              </span>
            </div>
          </div>
        </div>
      </div>
    
  );
};

export default Searbars;
 const selectStyle = {
    control: (styles) => ({
      ...styles,
      backgroundColor: "transparent",
      border: "none",
      outline: "none",
      boxShadow: "none",
    }),
    option: (styles, { isFocused, isSelected }) => ({
      ...styles,
  
      backgroundColor: isSelected
        ? "#E5E7EB" // Background color for the selected option
        : isFocused
        ? "transparent" // Background color for the focused option
        : "transparent", // Default background color for other options
      color: isSelected ? "black" : "#4B5563", // Text color for the options
    }),
    singleValue: (styles) => ({
      ...styles,
      backgroundColor: "transparent", // Background color for the selected value
      color: "#4B5563", // Text color for the selected value
    }),
    indicatorSeparator: () => null,
  };
  