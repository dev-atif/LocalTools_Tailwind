import React, { useState } from "react";

const Accordian = ({ Accordian }) => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    setActiveIndex(index === activeIndex ? null : index);
  };
  return (
    <>
      <div className="w-full">
        {Accordian.map((item, index) => (
          <div key={index} className="mb-3">
            <div
              className={`  p-2 cursor-pointer bg-[#FFC10E]  
            ${index === activeIndex ? "rounded-t-lg" : "rounded-lg"}`}
              onClick={() => toggleAccordion(index)}
            >
              <div className="flex justify-between items-center px-1">
                <h3 className="md:text-2xl text-base font-bold font-Robot text-white flex md:items-center gap-2">
                  <span>{item.id}</span> {item.title}
                </h3>
                {index === activeIndex ? (
                  <span>
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M4 9L12 17L20 9"
                        stroke="white"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg>
                  </span>
                ) : (
                  <span>
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M20 15L12 7L4 15"
                        stroke="white"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg>
                  </span>
                )}
              </div>
            </div>
            {index === activeIndex && (
              <div className=" bg-[#FFFFFF] rounded-b-lg p-2 shadow-xl ">
                <p>{item.content}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </>
  );
};

export default Accordian;
