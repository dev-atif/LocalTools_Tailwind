import React from "react";
import ShareField from "./Shared/ShareField";
import SharedSelect from "./Shared/SharedSelect";

const Section4 = () => {
  return (
    <div>
      <div className="py-4">
        <div className="py-2">
          <h1 className="text-xl 2xl:text-2xl font-Mont font-semibold text-black">
            Vendor details
          </h1>
        </div>
        <div className="bg-white md:px-6 px-4 rounded-lg py-5">
          <div className="md:grid grid-cols-2 gap-16">
            <div>
              <ShareField
                label={"Name"}
                color={"text-[#92929D]"}
                textsize={"text-sm"}
                fontweight={"font-semibold"}
              />
            </div>
            <div className="md:pt-0 pt-3">
              <ShareField
                label={"Street, No.*"}
                color={"text-[#92929D]"}
                textsize={"text-sm"}
                fontweight={"font-semibold"}
              />
            </div>
          </div>
          <div className="md:grid grid-cols-2 gap-16 mt-4">
            <div>
              <ShareField
                label={"Phone Number"}
                color={"text-[#92929D]"}
                textsize={"text-sm"}
                fontweight={"font-semibold"}
              />
            </div>
            <div className="mt-5 2xl:mt-7">
              <ShareField />
            </div>
          </div>
          <div className="md:grid grid-cols-2 gap-16 mt-3 items-center">
            <div >
              <ShareField
                label={"Description"}
                color={"text-[#92929D]"}
                textsize={"text-sm"}
                fontweight={"font-semibold"}
              />
            </div>
            <div>
              <div className="md:grid grid-cols-3 items-center gap-4 ">
                <div className="md:pt-0 pt-3">
                  <ShareField
                    label={"Postcode*"}
                    color={"text-[#92929D]"}
                    textsize={"text-sm"}
                    fontweight={"font-semibold"}
                    placeholder="Text Here"
                  />
                </div>
                <div className="md:pt-0 pt-3">
                  <SharedSelect label={"City*"} textcolor={'text-[#92929D]'} textsize={'text-sm'} />
                </div>
                <div>
                  <SharedSelect label={"Country*"} textcolor={'text-[#92929D]'} textsize={'text-sm'} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
    </div>
  );
};

export default Section4;
