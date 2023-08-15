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
const Seller_tab = () => {
  return (
    <div className="py-6">
      <div className="flex flex-wrap gap-3 ">
        {cards.map((item, index) => (
          <div
            className="xl:w-[32%] 2xl:w-[32%] lg:w-[48%] md:w-[48%] w-full  hover:scale-105 transition-all px-3 bg-white relative rounded-md pb-5 h-[350px]"
            key={index}
          >
            <div className="flex justify-center ">
              <img src={item.image} className="w-[304px] h-[250px] pt-3 pb-6" />
            </div>
            <div className="pb-1">
              <p className="text-[12px] leadinf-[18px] font-Robot font-normal text-color-primary-gr">
                {item.cat}
              </p>
            </div>
            <div className="flex items-center justify-between pb-2">
              <h3 className="font-medium text-base font-Robot">{item.name}</h3>
              <span className="font-medium text-base font-Robot">
                {item.price}
              </span>
            </div>
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
            <div className="bg-color-primary-yel  rounded-full absolute top-1 right-1 cursor-pointer">
              <svg
                width="48"
                height="48"
                viewBox="0 0 48 48"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle cx="24" cy="24" r="24" fill="#FFC10E" />
                <path
                  d="M17.1826 30.8338L22.9008 30.8144L35.3817 18.4528C35.8715 17.963 36.141 17.3125 36.141 16.6205C36.141 15.9286 35.8715 15.2781 35.3817 14.7883L33.3266 12.7332C32.347 11.7536 30.6379 11.7588 29.666 12.7294L17.1826 25.0936V30.8338ZM31.4944 14.5655L33.5533 16.6167L31.484 18.6666L29.4289 16.6128L31.4944 14.5655ZM19.7742 26.1742L27.5876 18.4346L29.6427 20.4897L21.8305 28.2267L19.7742 28.2332V26.1742Z"
                  fill="white"
                />
                <path
                  d="M14.5915 36.0001H32.7323C34.1615 36.0001 35.3238 34.8378 35.3238 33.4085V22.1768L32.7323 24.7684V33.4085H18.6836C18.6499 33.4085 18.6149 33.4215 18.5812 33.4215C18.5384 33.4215 18.4957 33.4098 18.4516 33.4085H14.5915V15.2678H23.4636L26.0552 12.6763H14.5915C13.1623 12.6763 12 13.8386 12 15.2678V33.4085C12 34.8378 13.1623 36.0001 14.5915 36.0001Z"
                  fill="white"
                />
              </svg>
            </div>
          </div>
        ))}
        <div className="  px-3 xl:w-[32%] 2xl:w-[32%] lg:w-[48%] md:w-[48%] w-full bg-white relative rounded-md pb-5 h-[350px]  flex flex-col  items-center justify-center gap-6">
          <div className=" hover:scale-105 transition-all cursor-pointer  ">
            <svg
              width="102"
              height="102"
              viewBox="0 0 102 102"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle cx="51" cy="51" r="51" fill="#FFC10E" />
              <path
                d="M55.1016 47.1489H69.5732V53.3867H55.1016V69.7832H48.4717V53.3867H34V47.1489H48.4717V32H55.1016V47.1489Z"
                fill="#FEFEFE"
              />
            </svg>
          </div>
          <h1 className="text-2xl font-Robot font-normal text-black">
            Create a New Offer
          </h1>
        </div>
        <div></div>
      </div>
    </div>
  );
};

export default Seller_tab;
