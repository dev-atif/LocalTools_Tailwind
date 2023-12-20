import React from "react";
import protect from '../../assets/protection.png'
const Protection_Section_1 = () => {
  return (
    <>
      <div  className="py-12">
        <div>
          <div className="flex  lg:flex-row flex-col-reverse items-center justify-between xl:gap-0 gap-16 ">
            <div className="lg:w-[50%] text-center md:text-start ">
              <div>
                <div>
                  <h1 className="font-Robot font-bold  text-black text-4xl">
                    Data protection
                  </h1>
                </div>
                <div className=" font-Mont font-medium text-base mt-8">
                  <p>
                    In our data protection declaration we have put together all
                    the essential information about how we handle your personal
                    data and your rights in this regard.
                  </p>
                  <p className="my-4">
                    This data protection declaration is valid from July 24th,
                    2020.here you can see the previous data protection
                    declaration.
                  </p>
                </div>
              </div>
            </div>
            <div className="lg:w-[50%] xl:w-[50%]">
              <img src={protect} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Protection_Section_1;
