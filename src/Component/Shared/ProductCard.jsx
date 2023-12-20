import React from "react";
import { useState } from "react";

const ProductCard = ({
  image,
  price,
  cat,
  Pname,
  location,
  Label,
  LabelColor,
  duration
}) => {
  const [isclick, setClick] = useState();
  return (
    <>
      <div>
        <div>
          <div className="relative">
            <div className="   bg-white  px-3 relative rounded-md pb-5 h-[300px]">
              <div className="flex justify-center ">
                <img src={image} className="w-[250px] h-[200px] pt-3 pb-6 " />
              </div>
              <div className="pb-1">
                <p className="text-[12px] leading-[18px] font-Robot font-normal text-color-primary-gr">
                  {cat}
                </p>
              </div>
              <div className="flex items-center justify-between pb-2">
                <h3 className="font-medium text-base font-Robot">{Pname}</h3>
                <span className="font-medium text-base font-Robot">
                  {price} / {duration}
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
                  {location}
                </p>
              </div>
             {/*  <div
                onClick={() => {
                  setClick(!isclick);
                }}
                className="  rounded-full absolute top-0 right-0 cursor-pointer"
              >
                <div>
                  {isclick ? (
                    <span>
                      <svg
                        width="60"
                        height="60"
                        viewBox="0 0 76 76"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <g filter="url(#filter0_dd_2102_25243)">
                          <rect
                            x="11"
                            y="11"
                            width="50"
                            height="50"
                            rx="25"
                            fill="#EB2424"
                          />
                        </g>
                        <path
                          fill-rule="evenodd"
                          clip-rule="evenodd"
                          d="M36.8972 30.3897C38.7508 28.5368 41.7561 28.5368 43.6097 30.3897C45.4634 32.2427 45.4634 35.2471 43.6097 37.1001L36.8535 43.8536C36.6582 44.0488 36.3418 44.0488 36.1465 43.8536L29.3903 37.1001C27.5366 35.2471 27.5366 32.2427 29.3903 30.3897C31.2439 28.5368 34.2492 28.5368 36.1028 30.3897L36.5 30.7867L36.8972 30.3897Z"
                          fill="#F6F7FB"
                        />
                        <defs>
                          <filter
                            id="filter0_dd_2102_25243"
                            x="0"
                            y="0"
                            width="76"
                            height="76"
                            filterUnits="userSpaceOnUse"
                            color-interpolation-filters="sRGB"
                          >
                            <feFlood
                              flood-opacity="0"
                              result="BackgroundImageFix"
                            />
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
                              result="effect1_dropShadow_2102_25243"
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
                              in2="effect1_dropShadow_2102_25243"
                              result="effect2_dropShadow_2102_25243"
                            />
                            <feBlend
                              mode="normal"
                              in="SourceGraphic"
                              in2="effect2_dropShadow_2102_25243"
                              result="shape"
                            />
                          </filter>
                        </defs>
                      </svg>
                    </span>
                  ) : (
                    <span>
                      <svg
                        width="60"
                        height="60"
                        viewBox="0 0 76 76"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <g filter="url(#filter0_dd_2102_25222)">
                          <rect
                            x="11"
                            y="11"
                            width="50"
                            height="50"
                            rx="25"
                            fill="#F6F7FB"
                          />
                        </g>
                        <path
                          fill-rule="evenodd"
                          clip-rule="evenodd"
                          d="M36.8972 30.3897C38.7508 28.5368 41.7561 28.5368 43.6097 30.3897C45.4634 32.2427 45.4634 35.2471 43.6097 37.1001L36.8535 43.8536C36.6582 44.0488 36.3418 44.0488 36.1465 43.8536L29.3903 37.1001C27.5366 35.2471 27.5366 32.2427 29.3903 30.3897C31.2439 28.5368 34.2492 28.5368 36.1028 30.3897L36.5 30.7867L36.8972 30.3897Z"
                          fill="#C4CDD5"
                        />
                        <defs>
                          <filter
                            id="filter0_dd_2102_25222"
                            x="0"
                            y="0"
                            width="76"
                            height="76"
                            filterUnits="userSpaceOnUse"
                            color-interpolation-filters="sRGB"
                          >
                            <feFlood
                              flood-opacity="0"
                              result="BackgroundImageFix"
                            />
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
                              result="effect1_dropShadow_2102_25222"
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
                              in2="effect1_dropShadow_2102_25222"
                              result="effect2_dropShadow_2102_25222"
                            />
                            <feBlend
                              mode="normal"
                              in="SourceGraphic"
                              in2="effect2_dropShadow_2102_25222"
                              result="shape"
                            />
                          </filter>
                        </defs>
                      </svg>
                    </span>
                  )}
                </div>
              </div> */}
            </div>

            <div className="absolute top-[3%] left-0 shadow-xl">
              <div className={` px-6 py-2 rounded-r-md ${LabelColor} `}>
                <h1 className="font-Robot font-bold text-white text-center text-sm">
                  {Label}{" "}
                </h1>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductCard;
