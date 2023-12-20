import React from "react";

const Analytics_Section1 = () => {
  return (
    <div className="flex lg:flex-row flex-col   gap-3">
      <div className="flex items-center gap-4 bg-white xl:p-6 p-5 lg:w-1/3 w-full rounded-xl">
        <div className="bg-[#38E25D] w-20 h-20 lg:w-14 lg:h-14 xl:w-20 xl:h-20 rounded-full">
          <span ></span>
        </div>
        <div className="flex flex-col  gap-1">
          <h3 className="font-Mont font-semibold text-sm text-black">Total Earning</h3>
          <h1 className="font-Mont text-lg 2xl:text-2xl font-semibold text-[#38E25D]">$20,000</h1>
        </div>
      </div>
      {/* ---------------------------------------------------------------------------------------- */}
      <div className="flex items-center gap-4 bg-white xl:p-6 p-5 lg:w-1/3 w-full rounded-xl">
        <div className="bg-[#FC5A5A] w-20 h-20  lg:w-14 lg:h-14 xl:w-20 xl:h-20 rounded-full">
          <span ></span>
        </div>
        <div className="flex flex-col  gap-1">
          <h3 className="font-Mont font-semibold text-sm text-black">Total Orders</h3>
          <h1 className="font-Mont text-lg 2xl:text-2xl font-semibold text-[#FC5A5A]">160</h1>
        </div>
      </div>
      {/* ---------------------------------------------------------------------------------------- */}
      <div className="flex items-center gap-4 bg-white xl:p-6 p-5 lg:w-1/3 w-full rounded-xl">
        <div className="bg-[#0062FF] w-20 h-20 lg:w-14 lg:h-14 xl:w-20 xl:h-20 rounded-full">
          <span ></span>
        </div>
        <div className="flex flex-col  gap-1">
          <h3 className="font-Mont font-semibold text-sm text-black">Total Completed</h3>
          <h1 className="font-Mont text-lg 2xl:text-2xl font-semibold text-[#0062FF]">450</h1>
        </div>
      </div>
    </div>
  );
};

export default Analytics_Section1;
