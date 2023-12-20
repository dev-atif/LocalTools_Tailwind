import { rating } from "@material-tailwind/react";
import React from "react";
const Rating = [
  {
    star: 5,
    rating: 30,
  },
  {
    star: 4,
    rating: 4,
  },
  {
    star: 3,
    rating: 1,
  },
  {
    star: 2,
    rating: 0,
  },
  {
    star: 1,
    rating: 0,
  },
];
const Analytics_Section3 = () => {
  return (
    <div>
      <div className="bg-white py-5 px-6 rounded-lg pb-14">
        <div>
          <h1 className="font-Robot text-lg font-medium leading-7 text-[#000000]">
            Ratings
          </h1>
        </div>
        <div className="grid lg:grid-cols-12 gap-3">
          <div className=" lg:col-span-4">
            {" "}
            {/*   */}
            <div className="flex items-center justify-between py-3">
              {/*  */}
              <h1 className=" xl:text-lg 2xl:text-[22px] lg:text-base font-Robot font-semibold">
                All-Time Rating 5
              </h1>
              <h1 className=" xl:text-lg 2xl:text-[22px] lg:text-base font-Robot font-normal">
                (35)
              </h1>
            </div>
            <div>
              <div className=" w-3/4">
                {Rating.map((item, index) => (
                  <div className="flex items-center justify-between py-1">
                    <h1 className="xl:text-lg lg:text-base font-normal font-Robot ">
                      {item.star} Star
                    </h1>
                    <h1 className="xl:text-base lg:text-sm  leading-6 font-normal font-Robot">
                      ({item.rating})
                    </h1>
                  </div>
                ))}
              </div>
            </div>
          </div>
          {/* Free Space col------------------------------------------------------- */}
          <div className="hidden xl:grid"></div>
          {/* ---------------------------------------------------------------------- */}
          <div className=" xl:col-span-3 lg:col-span-4 ">
            <div className="xl:pl-0 lg:pl-10">
              <div>
                <h1 className=" xl:text-lg 2xl:text-[22px] lg:text-base font-Robot font-semibold leading-7 py-3">
                  Rating Breakdown
                </h1>
              </div>
              <div>
                <h2 className=" 2xl:text-lg xl:text-base lg:text-sm font-normal py-1">
                  Communication With Seller
                </h2>
              </div>
              <div>
                <h2 className=" 2xl:text-lg xl:text-base lg:text-sm font-normal py-1">
                  Service as Described
                </h2>
              </div>
              <div>
                <h2 className=" 2xl:text-lg xl:text-base lg:text-sm font-normal py-1">
                  Buy Again or Recommend
                </h2>
              </div>
            </div>
          </div>
          <div className=" lg:col-span-4">
            <div>
              <div className="lg:text-center">
                <h1 className="text-lg 2xl:text-[22px] font-Robot font-semibold leading-7 py-3">
                  Rated Orders
                </h1>
              </div>
              <div className="flex lg:justify-end px-3">
                <div className="flex items-start flex-col gap-1 ">
                  <div className="flex items-center justify-end gap-2">
                    <div className="2xl:h-4 2xl:w-4 w-2 h-2 rounded-full bg-[#0062FF]">
                      <span></span>
                    </div>
                    <div>
                      <span className="2xl:text-lg xl:text-base lg:text-sm font-Mont font-normal">
                        Earned
                      </span>
                    </div>
                  </div>
                  <div className="flex items-center justify-end gap-2">
                    <div className="2xl:h-4 2xl:w-4 w-2 h-2 rounded-full bg-[#FC5A5A]">
                      <span></span>
                    </div>
                    <div>
                      <span className="2xl:text-lg xl:text-base lg:text-sm font-Mont font-normal">
                        Canceled
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Analytics_Section3;
