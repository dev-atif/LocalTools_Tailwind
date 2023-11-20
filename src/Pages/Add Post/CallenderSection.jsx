import React from "react";
import SharedSelect from "../../Component/Shared/SharedSelect";
import Calender from "./Shared/Calender";
const time = [
  { value: "Hourly" , label: "Hourly" },
  { value: "Weekly", label: "Weekly" },
  { value: "Monthly", label: "Monthly" },
];
const CallenderSection = ({formik}) => {
  return (
    <div >
      <div>
        <div>
          <div className="py-3">
            <h1 className="text-xl 2xl:text-2xl font-Mont font-semibold text-black">
              When is your Listing Available?
            </h1>
          </div>
          <div className="px-4 bg-white py-2 rounded-lg">
            <div className="py-3  ">
              <p className="font-Mont text-color-primary-gr  text-sm lg:text-base 2xl:text-lg">
                *Click to select the period you wish to mark as booked for
                visitors.
              </p>
            </div>
            <div className="max-w-3xl  mx-auto ">
              <div className="flex items-center gap-7 lg:flex-row flex-col">
                <div className="flex items-center gap-5  lg:w-1/2 w-full">
                  <h1 className="text-black font-Mont font-semibold text-base 2xl:text-lg w-1/2">
                    Selected as
                  </h1>
                  <div className="w-full">
                    <SharedSelect Values={time} onChange={(selectedOption)=>(formik.setFieldValue('Booking_Selected',selectedOption.value))} />
                  </div>
                </div>

                <div className="flex items-center  justify-center gap-10 w-1/2">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-black">
                      <span></span>
                    </div>
                    <label className="text-[#92929D] font-Mont font-semibold text-base 2xl:text-lg">
                      Today
                    </label>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-[#4493EF]">
                      <span></span>
                    </div>
                    <label className="text-[#92929D] font-Mont font-semibold text-base 2xl:text-lg">
                      Booked
                    </label>
                  </div>
                </div>
              </div>
              <div className="py-3">
                <Calender  formik={formik}/>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CallenderSection;
