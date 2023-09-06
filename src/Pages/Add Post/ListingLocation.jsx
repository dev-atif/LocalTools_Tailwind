import React from "react";
import ShareField from "../../Component/Shared/ShareField";
import SharedSelect from "../../Component/Shared/SharedSelect";
import GoogleMapApi from "./Shared/GoogleMapAPi";


const ListingLocation = () => {
  return (
    <div >
      <div>
        <div>
          <div className="py-3">
            <h1 className="text-xl 2xl:text-2xl font-Mont font-semibold text-black">
              Listing Location
            </h1>
          </div>
          <div className="bg-white md:p-5 p-4 rounded-lg">
            <div className="lg:grid grid-cols-2 xl:items-end md:items-center gap-12">
              <div>
                <div>
                  <ShareField
                    label={"Street, No.*"}
                    color={"text-[#92929D]"}
                    textsize={"text-base"}
                    fontweight={"font-semibold"}
                  />
                </div>
                <div className="my-3">
                  <ShareField
                    label={"Street, No.*"}
                    color={"text-[#92929D]"}
                    textsize={"text-base"}
                    fontweight={"font-semibold"}
                  />
                </div>
                <div className="md:grid grid-cols-3 items-center gap-6 my-3">
                  <div>
                    <ShareField
                      label={"Postcode*"}
                      color={"text-[#92929D]"}
                      textsize={"text-base"}
                      fontweight={"font-semibold"}
                      placeholder={'Text Here'}
                    />
                  </div>
                  <div>
                    <SharedSelect label={'City*'} textsize={'text-base'} textcolor={'text-[#92929D]'}/>
                  </div>
                  <div>
                    <SharedSelect label={'Country*'} textsize={'text-base'} textcolor={'text-[#92929D]'}/>
                  </div>
                </div>
                <div className="lg:grid grid-cols-2 items-center gap-4 ">
                    <div>
                    <ShareField
                    label={"Latitude (for Maps Pin Position)"}
                    color={"text-[#92929D]"}
                    textsize={"text-base"}
                    fontweight={"font-semibold"}
                    placeholder={'Text Here'}
                  />
                    </div>
                    <div className="lg:my-0 my-3">
                    <ShareField
                    label={"Longitude (for Maps Pin Position)"}
                    color={"text-[#92929D]"}
                    textsize={"text-base"}
                    fontweight={"font-semibold"}
                    placeholder={'Text Here'}
                  />
                    </div>
                </div>
              </div>
              <div className="hidden lg:block">
              <GoogleMapApi/>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ListingLocation;
