import React, { useEffect, useState } from "react";

import { Range } from "react-range";

import CategorySelect from "../../Component/Shared/CategorySelect";

const Brand = [
  {
    id: 1,
    name: "Kraft Seeds",
  },
  {
    id: 2,
    name: "Truphe",
  },
  {
    id: 3,
    name: "Trust Basket",
  },
  {
    id: 4,
    name: "Sharpex",
  },
  {
    id: 5,
    name: "Falcon",
  },
  {
    id: 6,
    name: "Trust Basket",
  },
  {
    id: 7,
    name: "Falcon",
  },
];
const FilterBar = () => {
  const [brand, setBrand] = useState(0);
  const [show, showMore] = useState(5);
  /* ---------------------------------------- */

  const [values, setValues] = useState([100, 2500]);

  const handleValuesChange = (newValues) => {
    setValues(newValues);
  };
  const minValue = 0; // Dynamic minimum value
  const maxValue = 6000;

  /* ----------------------------------------- */
  return (
    <>
      <div>
        <div>
          <CategorySelect />
        </div>
        <div className="bg-white md:px-5 md:pt-4 p-5 rounded-lg lg:mt-6  lg:shadow-lg mt-3">
          <div className="flex items-baseline justify-between  ">
            <h1 className=" font-Mont font-bold text-lg leading-6">Filters</h1>
            <p className=" text-sm text-[#00005B] leading-6  font-normal  font-Robot cursor-pointer">
              Clear All
            </p>
          </div>
          <div className="my-2">
            <h1 className="text-black text-[20px] font-Robot font-bold py-1">
              Department
            </h1>
            <ul className="text-color-primary-gr font-Robot text-base font-medium space-y-1">
              <li className="text-black font-Robot text-base font-medium">
                Gardening
              </li>
              <li>
                <ul className="pl-4 text-color-primary-gr py-1 text-base font-Robot font-medium space-y-1">
                  <li>Gardening Tools Sets</li>
                  <li>Gardening Scissors</li>
                  <li>Hedge Shears</li>
                  <li>Watering Cans</li>
                  <li>Rakes</li>
                  <li>Grass Shears</li>
                </ul>
              </li>
              <li>Grass Seeds</li>
              <li>Garden & Outdoors</li>
            </ul>
          </div>
          {/* ---------------------------------------------------------------------------------- */}
          <div className="mt-4">
            <h1 className=" font-Mont font-bold text-lg leading-6 py-1">
              Brand
            </h1>
            <div>
              {Brand.map(
                (item, index) =>
                  index < (!show ? Brand.length : 5) && (
                    <div
                      key={index}
                      onClick={() => setBrand(index)}
                      className={`flex items-center gap-3 cursor-pointer`}
                    >
                      <div
                        className={`h-4 w-4 rounded-sm border-2 border-black ${
                          brand === index ? "bg-black" : ""
                        }`}
                      >
                        <span></span>
                      </div>
                      <h3
                        className={`font-Robot font-medium text-base ${
                          brand === index
                            ? "text-black"
                            : "text-color-primary-gr"
                        }`}
                      >
                        {item.name}
                      </h3>
                    </div>
                  )
              )}
            </div>
            <div className="my-1">
              <button
                onClick={() => showMore(!show)}
                className="flex items-center gap-4 font-Robot font-medium text-base text-[#EEC200]"
              >
                {!show ? (
                  <>
                    <svg
                      width="18"
                      height="10"
                      viewBox="0 0 18 10"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M1 9L9 1L17 9"
                        stroke="#EEC200"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                    Show less
                  </>
                ) : (
                  <>
                    <svg
                      width="18"
                      height="10"
                      viewBox="0 0 18 10"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M1 1L9 9L17 1"
                        stroke="#EEC200"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                    Show more
                  </>
                )}
              </button>
            </div>
          </div>
          {/* ------------------------------------------------------------------------------------- */}
          <div className="mt-3">
            <div>
              <h1 className=" font-Mont font-bold text-lg leading-6">Price</h1>
            </div>
            {/* --------------------------------------------------------------------------------------------- */}

            <div>
              <div className="m-4">
                <div className="flex justify-between items-center">
                  <Range
                    step={1}
                    min={minValue}
                    max={maxValue}
                    values={values}
                    onChange={handleValuesChange}
                    renderTrack={({ props, children }) => (
                      <div
                        {...props}
                        className={`h-2 w-full bg-gray-200 rounded-md relative`} // Add "relative" class
                      >
                        {children}
                        <div
                          style={{
                            position: "absolute",
                            height: "100%",
                            left: `${
                              ((values[0] - minValue) / (maxValue - minValue)) *
                              100
                            }%`,
                            right: `${
                              100 -
                              ((values[1] - minValue) / (maxValue - minValue)) *
                                100
                            }%`,
                            backgroundColor: "#FFC10E", // Change this to your desired background color
                            zIndex: "-1",
                          }}
                        ></div>
                      </div>
                    )}
                    renderThumb={({ props }) => (
                      <div
                        {...props}
                        className="h-4 w-4 bg-white border border-black rounded-full z-10"
                      />
                    )}
                  />
                </div>
                <div className="flex justify-between mt-8 gap-4 items-center">
                  <input
                    type="number"
                    className="w-1/2 text-gray-500 border border-gray-400 rounded-md px-2 py-1"
                    value={values[0]}
                    onChange={(e) => {
                      const newValue = parseInt(e.target.value);
                      setValues([newValue, values[1]]);
                    }}
                  />
                  <span className=" text-[#92929D] font-Robot font-medium text-base">
                    to
                  </span>
                  <input
                    type="number"
                    className="w-1/2 text-gray-500 border border-gray-400 rounded-md px-2 py-1"
                    value={values[1]}
                    onChange={(e) => {
                      const newValue = parseInt(e.target.value);
                      setValues([values[0], newValue]);
                    }}
                  />
                </div>
              </div>
            </div>
            {/* ----------------------------------- */}
          </div>
        </div>
      </div>
    </>
  );
};

export default FilterBar;
