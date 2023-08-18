import React from "react";
import ShareField from "./Shared/ShareField";
import BlackButton from "./Shared/BlackButton";

const CustomDetails = () => {
  return (
    <div>
      <div >
        <div className="py-3">
          <h1 className="text-xl 2xl:text-2xl font-Mont font-semibold text-black">
            Add Custom Details
          </h1>
        </div>
        <div className="bg-white p-4 rounded-lg">
            <div className=" md:grid grid-cols-3 items-center lg:gap-10 md:gap-5">
                    <div>
                        <ShareField label={'Label'} placeholder={'Text Here'} fontweight={'font-semibold'} textsize={'text-base'} 
                        placeholderColor={'placeholder-black'}/>
                    </div>
                    <div className="md:pt-0 pt-3">
                        <ShareField label={'Value'} placeholder={'Text Here'} fontweight={'font-semibold'} textsize={'text-base'} 
                        placeholderColor={'placeholder-black'}/>
                    </div>
                    <div>
                        <div className="grid grid-cols-2 items-center mt-6 lg:gap-6 gap-3">
                            <div>
                                <BlackButton   Padding={'None'} label={'Add Details'}/>
                            </div>
                            <div>
                                <BlackButton   Padding={'None'} bgColor={'yellow'} label={'Add More'}/>
                            </div>

                        </div>
                    </div>
            </div>
        </div>
      </div>
    </div>
  );
};

export default CustomDetails;
