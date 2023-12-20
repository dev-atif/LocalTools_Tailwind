import React from "react";
import img from "../../assets/saftytip.png";
const Section1 = () => {
  return (
    <>
      <div className="lg:py-24 py-12">
        <div className={` lg:flex justify-between  items-center xl:items-start  `}>
          <div className="lg:w-[55%]">
            <div className="md:mt-12 mt-8 md:text-start text-center ">
              <h1 className="font-Robot font-bold text-black md:text-4xl text-3xl">
                General Terms of Use for Graham
              </h1>
            </div>
            <div className="mt-8 mb-4">
              <p className=" text-black font-Mont font-bold md:text-base text-sm ">
                These terms of use apply from July 24th, 2020. You can find the
                terms of use valid until July 23rd, 2020 here .
              </p>
            </div>
            <div className="text-black font-Mont font-medium  md:text-base text-sm">
              <p>
                Graham GmbH, Albert-Einstein-Ring 26, 14532 Kleinmachnow,
                operates a German-language website under the name “eBay
                classifieds” as well as other services, local and mobile
                applications, services and tools (hereinafter collectively
                referred to as “Graham services”).
              </p>
              <p className="py-4">
                These General Terms of Use (hereinafter “Terms of Use”) contain
                the basic rules for using the Graham ads services. Terms and
                conditions of the user that deviate from these terms and
                conditions do not apply if they have not been confirmed in
                writing by Graham.
              </p>
              <p className="pb-4">
                The terms of use and the Graham services are provided in German
                only.
              </p>
              <p>
                If you use the eBay classifieds services as a consumer and
                conclude contracts for paid services with Graham, you have a
                statutory right of withdrawal, about which eBay classifieds
                instructs you as follows:
              </p>
            </div>
          </div>
          <div className="lg:w-[40%]  flex justify-center lg:mt-0 mt-8">
            <img src={img} />
          </div>
        </div>
      </div>
    </>
  );
};

export default Section1;
