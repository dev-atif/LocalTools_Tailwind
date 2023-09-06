import React from "react";
import Product from "../../assets/Tabs Ass/Order_product.png";
import { useState } from "react";
const Table_head = [
  {
    name: "Product ",
  },
  {
    name: "Rent ",
  },
  {
    name: "Lease Period ",
  },
  {
    name: "Total Rent ",
  },
  {
    name: "Quantity ",
  },
  {
    name: " ",
  },
  {
    name: " ",
  },
];
const data = [
  {
    id: 1,
    image: Product,
    imgDescription: "Morgan Drill Concrete",
    imgSeller: "John Doe",
    price: "$1/Day",
    Leaseperiod1: "15 Days",
    Leaseperiod2: "1st May to 15th May",
    Rent: "$15",
    svg: (
      <svg
        width="55"
        height="55"
        viewBox="0 0 66 66"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g filter="url(#filter0_dd_2102_1864)">
          <rect x="11" y="11" width="40" height="40" rx="20" fill="white" />
        </g>
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M31.7176 26.5118C33.2005 25.0294 35.6047 25.0294 37.0876 26.5118C38.5706 27.9942 38.5706 30.3977 37.0876 31.8801L31.6826 37.2829C31.5264 37.4391 31.2733 37.4391 31.1171 37.2829L25.7121 31.8801C24.2291 30.3977 24.2291 27.9942 25.7121 26.5118C27.195 25.0294 29.5992 25.0294 31.0821 26.5118L31.3999 26.8294L31.7176 26.5118Z"
          fill="#C4CDD5"
        />
        <defs>
          <filter
            id="filter0_dd_2102_1864"
            x="0"
            y="0"
            width="66"
            height="66"
            filterUnits="userSpaceOnUse"
            color-interpolation-filters="sRGB"
          >
            <feFlood flood-opacity="0" result="BackgroundImageFix" />
            <feColorMatrix
              in="SourceAlpha"
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
              result="hardAlpha"
            />
            <feOffset dy="4" />
            <feGaussianBlur stdDeviation="5.5" />
            <feComposite in2="hardAlpha" operator="out" />
            <feColorMatrix
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0"
            />
            <feBlend
              mode="normal"
              in2="BackgroundImageFix"
              result="effect1_dropShadow_2102_1864"
            />
            <feColorMatrix
              in="SourceAlpha"
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
              result="hardAlpha"
            />
            <feOffset dx="4" />
            <feGaussianBlur stdDeviation="5.5" />
            <feComposite in2="hardAlpha" operator="out" />
            <feColorMatrix
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0"
            />
            <feBlend
              mode="normal"
              in2="effect1_dropShadow_2102_1864"
              result="effect2_dropShadow_2102_1864"
            />
            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="effect2_dropShadow_2102_1864"
              result="shape"
            />
          </filter>
        </defs>
      </svg>
    ),
    svgSelect: (
      <svg
        width="55"
        height="55"
        viewBox="0 0 66 66"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g filter="url(#filter0_dd_2102_1855)">
          <rect x="11" y="11" width="40" height="40" rx="20" fill="#EB2424" />
        </g>
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M31.7176 26.5118C33.2005 25.0294 35.6047 25.0294 37.0876 26.5118C38.5706 27.9942 38.5706 30.3977 37.0876 31.8801L31.6826 37.2829C31.5264 37.4391 31.2733 37.4391 31.1171 37.2829L25.7121 31.8801C24.2291 30.3977 24.2291 27.9942 25.7121 26.5118C27.195 25.0294 29.5992 25.0294 31.0821 26.5118L31.3999 26.8294L31.7176 26.5118Z"
          fill="white"
        />
        <defs>
          <filter
            id="filter0_dd_2102_1855"
            x="0"
            y="0"
            width="66"
            height="66"
            filterUnits="userSpaceOnUse"
            color-interpolation-filters="sRGB"
          >
            <feFlood flood-opacity="0" result="BackgroundImageFix" />
            <feColorMatrix
              in="SourceAlpha"
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
              result="hardAlpha"
            />
            <feOffset dy="4" />
            <feGaussianBlur stdDeviation="5.5" />
            <feComposite in2="hardAlpha" operator="out" />
            <feColorMatrix
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0"
            />
            <feBlend
              mode="normal"
              in2="BackgroundImageFix"
              result="effect1_dropShadow_2102_1855"
            />
            <feColorMatrix
              in="SourceAlpha"
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
              result="hardAlpha"
            />
            <feOffset dx="4" />
            <feGaussianBlur stdDeviation="5.5" />
            <feComposite in2="hardAlpha" operator="out" />
            <feColorMatrix
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0"
            />
            <feBlend
              mode="normal"
              in2="effect1_dropShadow_2102_1855"
              result="effect2_dropShadow_2102_1855"
            />
            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="effect2_dropShadow_2102_1855"
              result="shape"
            />
          </filter>
        </defs>
      </svg>
    ),
  },
  {
    id: 2,
    image: Product,
    imgDescription: "Morgan Drill Concrete",
    imgSeller: "John Doe",
    price: "$1/Day",
    Leaseperiod1: "15 Days",
    Leaseperiod2: "1st May to 15th May",
    Rent: "$0",
    svg: (
        <svg
          width="55"
          height="55"
          viewBox="0 0 66 66"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g filter="url(#filter0_dd_2102_1864)">
            <rect x="11" y="11" width="40" height="40" rx="20" fill="white" />
          </g>
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M31.7176 26.5118C33.2005 25.0294 35.6047 25.0294 37.0876 26.5118C38.5706 27.9942 38.5706 30.3977 37.0876 31.8801L31.6826 37.2829C31.5264 37.4391 31.2733 37.4391 31.1171 37.2829L25.7121 31.8801C24.2291 30.3977 24.2291 27.9942 25.7121 26.5118C27.195 25.0294 29.5992 25.0294 31.0821 26.5118L31.3999 26.8294L31.7176 26.5118Z"
            fill="#C4CDD5"
          />
          <defs>
            <filter
              id="filter0_dd_2102_1864"
              x="0"
              y="0"
              width="66"
              height="66"
              filterUnits="userSpaceOnUse"
              color-interpolation-filters="sRGB"
            >
              <feFlood flood-opacity="0" result="BackgroundImageFix" />
              <feColorMatrix
                in="SourceAlpha"
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                result="hardAlpha"
              />
              <feOffset dy="4" />
              <feGaussianBlur stdDeviation="5.5" />
              <feComposite in2="hardAlpha" operator="out" />
              <feColorMatrix
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0"
              />
              <feBlend
                mode="normal"
                in2="BackgroundImageFix"
                result="effect1_dropShadow_2102_1864"
              />
              <feColorMatrix
                in="SourceAlpha"
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                result="hardAlpha"
              />
              <feOffset dx="4" />
              <feGaussianBlur stdDeviation="5.5" />
              <feComposite in2="hardAlpha" operator="out" />
              <feColorMatrix
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0"
              />
              <feBlend
                mode="normal"
                in2="effect1_dropShadow_2102_1864"
                result="effect2_dropShadow_2102_1864"
              />
              <feBlend
                mode="normal"
                in="SourceGraphic"
                in2="effect2_dropShadow_2102_1864"
                result="shape"
              />
            </filter>
          </defs>
        </svg>
      ),
      svgSelect: (
        <svg
          width="55"
          height="55"
          viewBox="0 0 66 66"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g filter="url(#filter0_dd_2102_1855)">
            <rect x="11" y="11" width="40" height="40" rx="20" fill="#EB2424" />
          </g>
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M31.7176 26.5118C33.2005 25.0294 35.6047 25.0294 37.0876 26.5118C38.5706 27.9942 38.5706 30.3977 37.0876 31.8801L31.6826 37.2829C31.5264 37.4391 31.2733 37.4391 31.1171 37.2829L25.7121 31.8801C24.2291 30.3977 24.2291 27.9942 25.7121 26.5118C27.195 25.0294 29.5992 25.0294 31.0821 26.5118L31.3999 26.8294L31.7176 26.5118Z"
            fill="white"
          />
          <defs>
            <filter
              id="filter0_dd_2102_1855"
              x="0"
              y="0"
              width="66"
              height="66"
              filterUnits="userSpaceOnUse"
              color-interpolation-filters="sRGB"
            >
              <feFlood flood-opacity="0" result="BackgroundImageFix" />
              <feColorMatrix
                in="SourceAlpha"
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                result="hardAlpha"
              />
              <feOffset dy="4" />
              <feGaussianBlur stdDeviation="5.5" />
              <feComposite in2="hardAlpha" operator="out" />
              <feColorMatrix
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0"
              />
              <feBlend
                mode="normal"
                in2="BackgroundImageFix"
                result="effect1_dropShadow_2102_1855"
              />
              <feColorMatrix
                in="SourceAlpha"
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                result="hardAlpha"
              />
              <feOffset dx="4" />
              <feGaussianBlur stdDeviation="5.5" />
              <feComposite in2="hardAlpha" operator="out" />
              <feColorMatrix
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0"
              />
              <feBlend
                mode="normal"
                in2="effect1_dropShadow_2102_1855"
                result="effect2_dropShadow_2102_1855"
              />
              <feBlend
                mode="normal"
                in="SourceGraphic"
                in2="effect2_dropShadow_2102_1855"
                result="shape"
              />
            </filter>
          </defs>
        </svg>
      ),
  },
  {
    id: 3,
    image: Product,
    imgDescription: "Morgan Drill Concrete",
    imgSeller: "John Doe",
    price: "$1/Day",
    Leaseperiod1: "15 Days",
    Leaseperiod2: "1st May to 15th May",
    Rent: "$15",
    svg: (
        <svg
          width="55"
          height="55"
          viewBox="0 0 66 66"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g filter="url(#filter0_dd_2102_1864)">
            <rect x="11" y="11" width="40" height="40" rx="20" fill="white" />
          </g>
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M31.7176 26.5118C33.2005 25.0294 35.6047 25.0294 37.0876 26.5118C38.5706 27.9942 38.5706 30.3977 37.0876 31.8801L31.6826 37.2829C31.5264 37.4391 31.2733 37.4391 31.1171 37.2829L25.7121 31.8801C24.2291 30.3977 24.2291 27.9942 25.7121 26.5118C27.195 25.0294 29.5992 25.0294 31.0821 26.5118L31.3999 26.8294L31.7176 26.5118Z"
            fill="#C4CDD5"
          />
          <defs>
            <filter
              id="filter0_dd_2102_1864"
              x="0"
              y="0"
              width="66"
              height="66"
              filterUnits="userSpaceOnUse"
              color-interpolation-filters="sRGB"
            >
              <feFlood flood-opacity="0" result="BackgroundImageFix" />
              <feColorMatrix
                in="SourceAlpha"
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                result="hardAlpha"
              />
              <feOffset dy="4" />
              <feGaussianBlur stdDeviation="5.5" />
              <feComposite in2="hardAlpha" operator="out" />
              <feColorMatrix
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0"
              />
              <feBlend
                mode="normal"
                in2="BackgroundImageFix"
                result="effect1_dropShadow_2102_1864"
              />
              <feColorMatrix
                in="SourceAlpha"
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                result="hardAlpha"
              />
              <feOffset dx="4" />
              <feGaussianBlur stdDeviation="5.5" />
              <feComposite in2="hardAlpha" operator="out" />
              <feColorMatrix
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0"
              />
              <feBlend
                mode="normal"
                in2="effect1_dropShadow_2102_1864"
                result="effect2_dropShadow_2102_1864"
              />
              <feBlend
                mode="normal"
                in="SourceGraphic"
                in2="effect2_dropShadow_2102_1864"
                result="shape"
              />
            </filter>
          </defs>
        </svg>
      ),
      svgSelect: (
        <svg
          width="55"
          height="55"
          viewBox="0 0 66 66"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g filter="url(#filter0_dd_2102_1855)">
            <rect x="11" y="11" width="40" height="40" rx="20" fill="#EB2424" />
          </g>
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M31.7176 26.5118C33.2005 25.0294 35.6047 25.0294 37.0876 26.5118C38.5706 27.9942 38.5706 30.3977 37.0876 31.8801L31.6826 37.2829C31.5264 37.4391 31.2733 37.4391 31.1171 37.2829L25.7121 31.8801C24.2291 30.3977 24.2291 27.9942 25.7121 26.5118C27.195 25.0294 29.5992 25.0294 31.0821 26.5118L31.3999 26.8294L31.7176 26.5118Z"
            fill="white"
          />
          <defs>
            <filter
              id="filter0_dd_2102_1855"
              x="0"
              y="0"
              width="66"
              height="66"
              filterUnits="userSpaceOnUse"
              color-interpolation-filters="sRGB"
            >
              <feFlood flood-opacity="0" result="BackgroundImageFix" />
              <feColorMatrix
                in="SourceAlpha"
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                result="hardAlpha"
              />
              <feOffset dy="4" />
              <feGaussianBlur stdDeviation="5.5" />
              <feComposite in2="hardAlpha" operator="out" />
              <feColorMatrix
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0"
              />
              <feBlend
                mode="normal"
                in2="BackgroundImageFix"
                result="effect1_dropShadow_2102_1855"
              />
              <feColorMatrix
                in="SourceAlpha"
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                result="hardAlpha"
              />
              <feOffset dx="4" />
              <feGaussianBlur stdDeviation="5.5" />
              <feComposite in2="hardAlpha" operator="out" />
              <feColorMatrix
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0"
              />
              <feBlend
                mode="normal"
                in2="effect1_dropShadow_2102_1855"
                result="effect2_dropShadow_2102_1855"
              />
              <feBlend
                mode="normal"
                in="SourceGraphic"
                in2="effect2_dropShadow_2102_1855"
                result="shape"
              />
            </filter>
          </defs>
        </svg>
      ),
  },
  // Add more data as needed
];
const CartProducts = () => {
  const [fav, setFav] = useState([]);
 const svgSelect =(index)=>{
    setFav(prevClickedItems =>({
        ...prevClickedItems,[index]: !prevClickedItems[index]
    }));
 }
  return (
    <>
      <div className="flex flex-col">
        <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div className="py-2 align-middle inline-block lg:block min-w-full sm:px-6 lg:px-8">
            <div className=" overflow-hidden border-b  sm:rounded-lg">
              <table className="min-w-full table-auto w-full 	  border-separate border-spacing-y-4  ">
                <thead className="">
                  <tr className="bg-color-primary-yel  ">
                    {Table_head.map((item, index) => (
                      <th
                        scope="col"
                        className=" 
                           text-white first:rounded-s-lg last:rounded-e-lg  text-center py-3  text-xs md:text-sm font-Mont first:text-left first:pl-14 font-semibold capitalize tracking-wider"
                      >
                        {item.name}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {data.map((Bitem, index) => (
                    <>
                      <tr className="bg-white " key={index}>
                        <td className="px-3 py-3 whitespace-nowrap text-sm rounded-s-lg">
                          {/* wE USE iNLINE BLOCK AND THEN WE USE FLEX BECAUSE IF WE USE DIRECLTY FLEX
                      THE RADIUS ON LEFT SIDE IS NOT WORK THATS WHY WE USE THIS APPROACH */}
                          <div className=" flex flex-col lg:flex-row  lg:items-center gap-3 2xl:gap-5">
                            <div className="inline-block ">
                              <img
                                src={Bitem.image}
                                alt="Product"
                                className="max-w-full h-auto"
                              />
                            </div>
                            <div className="inline-block">
                              <h1 className="2xl:text-base xl:text-sm font-semibold font-Mont">
                                {Bitem.imgDescription}
                              </h1>
                              <p className="xl:text-xs 2xl:text-sm font-Robot font-medium text-[#92929D]">
                                Seller {Bitem.imgSeller}
                              </p>
                            </div>
                          </div>
                        </td>

                        <td className="px-3 py-3 whitespace-nowrap text-sm  ">
                          <h2 className="2xl:text-base xl:text-sm font-medium">
                            {" "}
                            {Bitem.price}
                          </h2>
                        </td>
                        <td className="px-3 py-3 whitespace-nowrap text-center ">
                          <h1 className=" 2xl:text-base xl:text-sm font-semibold font-Mont">
                            {Bitem.Leaseperiod1}
                          </h1>
                          <p className="font-semibold 2xl:text-base xl:text-xs text-color-primary-gr font-Mont">
                            {Bitem.Leaseperiod2}
                          </p>
                        </td>
                        <td className="px-3 py-3 whitespace-nowrap 2xl:text-base xl:text-xs font-Mont font-semibold text-center">
                          {Bitem.Rent}
                        </td>
                        <td className="px-3 py-3 whitespace-nowrap 2xl:text-base xl:text-xs font-Mont font-semibold text-center">
                          <div className="flex items-center gap-1">
                            <div className="border border-[#92929D] rounded-full w-8 h-8 flex items-center justify-center cursor-pointer ">
                              <svg
                                width="18"
                                height="5"
                                viewBox="0 0 21 5"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  d="M2.25 2.5H18.75"
                                  stroke="#92929D"
                                  stroke-width="4"
                                  stroke-linecap="round"
                                />
                              </svg>
                            </div>
                            {/* -----------Quantity------------------------------------------------------------- */}
                            <div className="border border-black rounded-lg w-10 h-8 flex items-center justify-center">
                              <p className=" text-base  font-Mont font-semibold text-center">
                                1
                              </p>
                            </div>
                            {/* -----------------+ Button----------------------------------------------------- */}
                            <div className="border border-black rounded-full w-8 h-8 flex items-center justify-center cursor-pointer ">
                              <svg
                                width="18"
                                height="16"
                                viewBox="0 0 21 21"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  d="M2.25 10.5H18.75"
                                  stroke="black"
                                  stroke-width="4"
                                  stroke-linecap="round"
                                />
                                <path
                                  d="M10.5 2.25L10.5 18.75"
                                  stroke="black"
                                  stroke-width="4"
                                  stroke-linecap="round"
                                />
                              </svg>
                            </div>
                          </div>
                        </td>
                        <td className="px-3 py-3 whitespace-nowrap text-sm  text-center rounded-r-lg">
                            <div className="w-min" onClick={()=>{svgSelect(index)}}>
                                {
                                    fav [index] ? (
                                       Bitem.svg
                                    ):
                                    (
                                        Bitem.svgSelect
                                    )
                                }
                            </div>
                        </td>
                        <td className="px-3 py-3 whitespace-nowrap text-sm  text-center rounded-r-lg">
                            <div>
                                <span>
                                <svg width="30" height="30" viewBox="0 0 38 41" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M25.5448 6.95463L25.5449 6.95463L25.5444 6.94727C25.4494 5.27201 24.717 3.69661 23.4973 2.54424C22.2777 1.39187 20.6633 0.74989 18.9854 0.75C17.2431 0.75 15.5722 1.44211 14.3403 2.67407C13.1674 3.84698 12.4838 5.41776 12.4209 7.06919H2.45827H2.44971L2.44116 7.06977L2.24283 7.08338L2.23436 7.08397L2.22595 7.08512C1.81698 7.14126 1.44217 7.3436 1.17084 7.6547C0.899514 7.96581 0.750017 8.36465 0.75 8.77745L0.75 8.78603L0.750587 8.79458L0.764197 8.9929L0.764778 9.00138L0.765933 9.00979C0.822075 9.41876 1.02441 9.79356 1.33552 10.0649C1.64662 10.3362 2.04546 10.4857 2.45826 10.4857H3.77744L6.24598 35.5739L6.24584 35.5739L6.24693 35.5822L6.29165 35.9205L6.29154 35.9205L6.29276 35.928C6.50671 37.2388 7.17978 38.4307 8.19168 39.2909C9.2036 40.1511 10.4884 40.6234 11.8165 40.6234H26.1543V40.6235L26.1628 40.6233L26.505 40.6116L26.505 40.6117L26.5124 40.6112C27.8373 40.5264 29.0888 39.9735 30.0436 39.0511C30.9984 38.1288 31.5942 36.8971 31.7248 35.576L31.7248 35.5758L34.1914 10.4857H35.5125H35.5211L35.5296 10.4851L35.7279 10.4715L35.7364 10.471L35.7449 10.4698C36.1737 10.4108 36.5641 10.1912 36.8372 9.8555C37.1103 9.51975 37.2458 9.09284 37.2163 8.66103C37.1868 8.22922 36.9945 7.8247 36.6783 7.52922C36.362 7.23374 35.9454 7.06932 35.5126 7.06919H35.5125H25.5479L25.5448 6.95463ZM7.21002 10.4857H30.7569L28.3269 35.2318L28.29 35.4642C28.0858 36.4679 27.1991 37.2069 26.1543 37.2069H11.8224L11.5883 37.1958C11.0901 37.1433 10.625 36.9209 10.2714 36.5657C9.91625 36.2089 9.69547 35.7403 9.64653 35.2393L9.64651 35.2391L7.21002 10.4857ZM24.0821 16.8256L24.0815 16.8171L24.0804 16.8087C24.0242 16.3997 23.8219 16.0249 23.5108 15.7536C23.1997 15.4823 22.8008 15.3328 22.388 15.3327C21.935 15.3327 21.5005 15.5127 21.1801 15.8331C20.8597 16.1534 20.6797 16.588 20.6797 17.041V30.6516V30.6601L20.6803 30.6687L20.6939 30.867L20.6945 30.8755L20.6957 30.884C20.7547 31.3128 20.9742 31.7031 21.31 31.9763C21.6457 32.2494 22.0726 32.3849 22.5045 32.3554C22.9363 32.3259 23.3408 32.1336 23.6363 31.8174C23.9317 31.5011 24.0962 31.0845 24.0963 30.6516V30.6516V17.041V17.0324L24.0957 17.0239L24.0821 16.8256ZM17.2768 16.8256L17.2762 16.8171L17.2751 16.8087C17.2189 16.3997 17.0166 16.0249 16.7055 15.7536C16.3944 15.4823 15.9956 15.3328 15.5828 15.3327C15.1297 15.3327 14.6952 15.5127 14.3748 15.8331C14.0544 16.1534 13.8745 16.588 13.8745 17.041V30.6516V30.6601L13.8751 30.6687L13.8887 30.867L13.8892 30.8755L13.8904 30.884C13.9494 31.3128 14.169 31.7031 14.5047 31.9763C14.8405 32.2494 15.2674 32.3849 15.6992 32.3554C16.131 32.3259 16.5355 32.1336 16.831 31.8174C17.1265 31.5011 17.2909 31.0845 17.291 30.6516V30.6516V17.041V17.0324L17.2904 17.0239L17.2768 16.8256ZM16.8499 5.00007C17.4319 4.46411 18.1942 4.16658 18.9854 4.16655C19.8215 4.16655 20.6234 4.4987 21.2146 5.08993C21.7467 5.62196 22.0689 6.32456 22.1281 7.06919H15.8434L15.844 7.05479C15.9102 6.26815 16.2691 5.5349 16.8499 5.00007Z" fill="black" stroke="black" stroke-width="0.5"/>
</svg>

                                </span>
                                </div>
                        </td>
                      </tr>
                    </>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CartProducts;
