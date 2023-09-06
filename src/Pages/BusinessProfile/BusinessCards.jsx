import React from "react";
import image1 from "../../assets/Tabs Ass/Group 118.png";
import image2 from "../../assets/Tabs Ass/Group 121.png";
import image3 from "../../assets/Tabs Ass/Group 124.png";
import image4 from "../../assets/Tabs Ass/Group 126.png";
import image5 from "../../assets/Tabs Ass/Group 140.png";
/// Cards Array
const cards = [
  {
    image: image1,
    cat: "Garden Tools",
    name: "Garden Tools",
    price: "$1/Day",
    location: "Goerge Colony, California",
  },
  {
    image: image2,
    cat: "KFZ Tools",
    name: "KFZ Tools",
    price: "$1/Day",
    location: "Goerge Colony, California",
  },
  {
    image: image3,
    cat: "Cordless Device",
    name: "Cordless Device",
    price: "$1/Day",
    location: "Goerge Colony, California",
  },
  {
    image: image4,
    cat: "Loader & Shutter",
    name: "Loader & Shutter",
    price: "$1/Day",
    location: "Goerge Colony, California",
  },
  {
    image: image5,
    cat: "Construction Machinery",
    name: "Construction Machinery",
    price: "$1/Day",
    location: "Goerge Colony, California",
  },
];
const BusinessCards = () => {
  return (
    <>
      <div className="">
        <div className="flex flex-wrap gap-3 ">
          {cards.map((item, index) => (
            <div
              className="xl:w-[32.4%] 2xl:w-[32.5%] lg:w-[48%] md:w-[48%] w-full  hover:scale-105 transition-all px-3 bg-white relative rounded-md pb-5 h-[350px]"
              key={index}
            >
              <div className="flex justify-center ">
                <img
                  src={item.image}
                  className="w-[304px] h-[250px] pt-3 pb-6"
                />
              </div>
              <div className="pb-1">
                <p className="text-[12px] leadinf-[18px] font-Robot font-normal text-color-primary-gr">
                  {item.cat}
                </p>
              </div>
              <div className="flex items-center justify-between pb-2">
                <h3 className="font-medium text-base font-Robot">
                  {item.name}
                </h3>
                <span className="font-medium text-base font-Robot">
                  {item.price}
                </span>
              </div>
              <div className="flex justify-between">
              <div className="flex items-center gap-2">
                <span>
                  <svg
                    width="14"
                    height="18"
                    viewBox="0 0 18 22"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M9 12C10.6569 12 12 10.6569 12 9C12 7.34315 10.6569 6 9 6C7.34315 6 6 7.34315 6 9C6 10.6569 7.34315 12 9 12Z"
                      stroke="#959EAD"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M9 1C6.87827 1 4.84344 1.84285 3.34315 3.34315C1.84285 4.84344 1 6.87827 1 9C1 10.892 1.402 12.13 2.5 13.5L9 21L15.5 13.5C16.598 12.13 17 10.892 17 9C17 6.87827 16.1571 4.84344 14.6569 3.34315C13.1566 1.84285 11.1217 1 9 1V1Z"
                      stroke="#959EAD"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                </span>
                
                  <p className="text-xs text-color-primary-gr font-normal leading-5">
                    {item.location}
                  </p>
                
                
              </div>
              <div className="flex items-center">
                    {/* Star ------------------------------------ */}
                   <span>
                   <svg
                      class="w-6 h-6 xl:w-4 xl:h-6 2xl:w-6 2xl:h-6"
                      viewBox="0 0 25 25"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M12.5006 19.1009L6.77791 22.916C6.4183 23.1558 5.94446 22.8571 6.00558 22.4293L6.97023 15.6768L2.147 10.8536C1.85566 10.5622 2.02196 10.0633 2.42984 10.005L9.15167 9.04476L12.041 2.30304C12.2141 1.89899 12.787 1.89899 12.9601 2.30304L15.8494 9.04476L22.5713 10.005C22.9791 10.0633 23.1455 10.5622 22.8541 10.8536L18.0309 15.6768L18.9955 22.4293C19.0567 22.8571 18.5828 23.1558 18.2232 22.916L12.5006 19.1009Z"
                        fill="#EEC200"
                      />
                    </svg>
                   </span>
                     {/* Star ------------------------------------ */}
                     <span>
                   <svg
                     class="w-6 h-6 xl:w-4 xl:h-6 2xl:w-6 2xl:h-6"
                      viewBox="0 0 25 25"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M12.5006 19.1009L6.77791 22.916C6.4183 23.1558 5.94446 22.8571 6.00558 22.4293L6.97023 15.6768L2.147 10.8536C1.85566 10.5622 2.02196 10.0633 2.42984 10.005L9.15167 9.04476L12.041 2.30304C12.2141 1.89899 12.787 1.89899 12.9601 2.30304L15.8494 9.04476L22.5713 10.005C22.9791 10.0633 23.1455 10.5622 22.8541 10.8536L18.0309 15.6768L18.9955 22.4293C19.0567 22.8571 18.5828 23.1558 18.2232 22.916L12.5006 19.1009Z"
                        fill="#EEC200"
                      />
                    </svg>
                   </span>
                     {/* Star ------------------------------------ */}
                     <span>
                   <svg
                   class="w-6 h-6 xl:w-4 xl:h-6 2xl:w-6 2xl:h-6"
                      viewBox="0 0 25 25"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M12.5006 19.1009L6.77791 22.916C6.4183 23.1558 5.94446 22.8571 6.00558 22.4293L6.97023 15.6768L2.147 10.8536C1.85566 10.5622 2.02196 10.0633 2.42984 10.005L9.15167 9.04476L12.041 2.30304C12.2141 1.89899 12.787 1.89899 12.9601 2.30304L15.8494 9.04476L22.5713 10.005C22.9791 10.0633 23.1455 10.5622 22.8541 10.8536L18.0309 15.6768L18.9955 22.4293C19.0567 22.8571 18.5828 23.1558 18.2232 22.916L12.5006 19.1009Z"
                        fill="#EEC200"
                      />
                    </svg>
                   </span>
                     {/* Star ------------------------------------ */}
                     <span>
                   <svg
                     class="w-6 h-6 xl:w-4 xl:h-6 2xl:w-6 2xl:h-6"
                      viewBox="0 0 25 25"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M12.5006 19.1009L6.77791 22.916C6.4183 23.1558 5.94446 22.8571 6.00558 22.4293L6.97023 15.6768L2.147 10.8536C1.85566 10.5622 2.02196 10.0633 2.42984 10.005L9.15167 9.04476L12.041 2.30304C12.2141 1.89899 12.787 1.89899 12.9601 2.30304L15.8494 9.04476L22.5713 10.005C22.9791 10.0633 23.1455 10.5622 22.8541 10.8536L18.0309 15.6768L18.9955 22.4293C19.0567 22.8571 18.5828 23.1558 18.2232 22.916L12.5006 19.1009Z"
                        fill="#EEC200"
                      />
                    </svg>
                   </span>
                     {/* Star ------------------------------------ */}
                     <span>
                   <svg
                    class="w-6 h-6 xl:w-4 xl:h-6 2xl:w-6 2xl:h-6"
                      viewBox="0 0 25 25"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M12.5006 19.1009L6.77791 22.916C6.4183 23.1558 5.94446 22.8571 6.00558 22.4293L6.97023 15.6768L2.147 10.8536C1.85566 10.5622 2.02196 10.0633 2.42984 10.005L9.15167 9.04476L12.041 2.30304C12.2141 1.89899 12.787 1.89899 12.9601 2.30304L15.8494 9.04476L22.5713 10.005C22.9791 10.0633 23.1455 10.5622 22.8541 10.8536L18.0309 15.6768L18.9955 22.4293C19.0567 22.8571 18.5828 23.1558 18.2232 22.916L12.5006 19.1009Z"
                        fill="#EEC200"
                      />
                    </svg>
                   </span>
                  </div>
              </div>
             
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default BusinessCards;
