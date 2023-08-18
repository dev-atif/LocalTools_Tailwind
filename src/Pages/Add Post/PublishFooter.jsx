import React from "react";
import BlackButton from "./Shared/BlackButton";

const PublishFooter = () => {
  return (
    <div >
      <div>
        <div>
          <div className=" md:py-7 py-4">
            <h1 className="text-xl 2xl:text-2xl font-Mont font-semibold text-black">
            Publish your ad
            </h1>
          </div>
          <div className="bg-white py-6  rounded-lg mb-3">
            <div className="2xl:max-w-4xl lg:max-w-2xl 2xl:px-4 mx-auto md:px-1 px-4">
                    <div>
                        <p className="text-center text-sm 2xl:text-lg font-Mont font-light">
                            Our <span className={'text-[#FFC10E]'}>terms of use</span> apply . You can find information on the processing of your data in our <span className={'text-[#FFC10E]'}>privacy policy</span>.</p>
                    </div>
                    <div className="md:grid grid-cols-3 items-center gap-3 md:px-14 mt-4">
                            <div>
                                <BlackButton label={'Place an Ad'} bgColor={'transparent'} textColor={'black'} BorderColor={'black'}/>
                            </div>
                            <div className="md:my-0 my-4"> 
                                <BlackButton label={'Pay & Place an Ad'}/>
                            </div>
                            <div>
                                <BlackButton label={'Preview'} bgColor={'transparent'} textColor={'black'} BorderColor={'black'}/>
                            </div>
                    </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default PublishFooter;
