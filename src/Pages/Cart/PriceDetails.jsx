import React from "react";
import { Link } from "react-router-dom";
import useCart from "../../hooks/useCart";
const PriceDetails = () => {
  const {
    ItemsINCart,
    ServiceFeeePercentage,
    TotalAmmount,
    taxPercentage,
    totalRentedPrice,
    totalServiceFee,
    totaltax,
  } = useCart();
  return (
    <>
      <div>
        <div>
          <div className="p-3 bg-white rounded-lg mt-4">
            <div className="border border-[#00005B] rounded-lg p-2 flex items-center gap-4 my-2">
              <h1 className=" font-Robot font-medium text-sm  text-[#92929D] flex items-center gap-2">
                <span>
                  <svg
                    width="24"
                    height="24"
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
                Deliver To
              </h1>
              <p className=" font-Robot font-medium text-sm  text-blackD] flex items-center gap-2">
                Home
              </p>
            </div>
            <p className="text-sm text-[#92929D]   font-Robot py-1">
              2rd FLOOR, Older Town, Melsugen, Schwalm-Eder, northern Hesse,
              34212 - Germany
            </p>
          </div>
          {/* --------------------------------------------- */}
          <div className="flex gap-2 my-3">
            <div className="bg-white w-[60%] p-3 rounded-lg">
              <input
                type="text"
                name="coupon"
                placeholder="Enter Coupon Code Here"
                className="border-none focus:outline-none bg-transparent w-full placeholder:font-Mont placeholder:text-sm"
              />
            </div>
            <div className="w-[40%]">
              <button className="bg-color-primary-yel py-3  text-white text-sm rounded-lg font-Mont  w-full">
                coupon
              </button>
            </div>
          </div>
          {/* ------------------------------------------------ */}
          <div className="bg-white py-1 rounded-lg">
            <div className="border-b p-2 border-[#C4CDD5]">
              <h1 className="font-Robot font-medium text-lg">Price Details</h1>
            </div>
            <div className="p-3">
              <div className="flex items-center justify-between">
                <h1 className="font-Robot font-medium text-base text-[#92929D]">
                  Price ({ItemsINCart} Products )
                </h1>
                <h1 className="font-Robot font-medium text-base text-black">
                  ${totalRentedPrice}
                </h1>
              </div>
              {/* --------------------------- */}
              <div className="flex items-center justify-between my-2 ">
                <h1 className="font-Robot font-medium text-base text-[#92929D]">
                  Tax ({taxPercentage}%)
                </h1>
                <h1 className="font-Robot font-medium text-base text-black">
                  {totaltax ? `$${totaltax}` : "Free"}
                </h1>
              </div>
              {/* -------------------------------- */}
              {/* --------------------------- */}
              <div className="flex items-center justify-between border-b pb-3 border-[#C4CDD5]">
                <h1 className="font-Robot font-medium text-base text-[#92929D]">
                  Service Fee (
                  {ServiceFeeePercentage ? ServiceFeeePercentage : "0"}%)
                </h1>
                <h1 className="font-Robot font-medium text-base text-black">
                  {totalServiceFee ? `$${totalServiceFee}` : 0}
                </h1>
              </div>
              {/* --------------------------- */}
              <div className="flex items-center justify-between pt-3">
                <h1 className="font-Robot font-medium text-base text-[#92929D]">
                  Total Amount
                </h1>
                <h1 className="font-Robot font-medium text-base text-black">
                  ${TotalAmmount}
                </h1>
              </div>
            </div>
          </div>
          {/* ----------------------------------------------- */}
          <div className="my-3">
            <Link to={"/checkout"}>
              <button className="bg-[#FFC10E] text-white  font-Mont font-semibold text-lg py-2 text-center w-full rounded-lg">
                Checkout
              </button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default PriceDetails;
