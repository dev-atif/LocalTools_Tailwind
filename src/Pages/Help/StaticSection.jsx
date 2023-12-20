import React, { useState } from "react";
import help from "../../assets/help.png";
const StaticSection = () => {
  const [select, setSelect] = useState(0);
  return (
    <>
      <div className="py-10">
        <div className="flex  lg:flex-row flex-col-reverse justify-between xl:gap-0 gap-16 ">
          <div className="lg:w-[50%] md:mt-12">
            <div>
              <div>
                <h1 className="font-Robot font-bold  text-black text-4xl">
                  Find a Solution fast
                </h1>
              </div>
              <div className="mt-4">
                <div>
                  <p className="font-Mont text-base font-medium">
                    Search articles on Graham Help
                  </p>
                </div>
                <div className="bg-gray-200 flex items-center rounded-lg mt-6">
                  <input
                    type="text"
                    className=" focus:outline-none w-full py-3 bg-transparent px-3"
                  />
                  <button className="w-min bg-[#FFC10E] py-3 px-3 rounded-lg">
                    <svg
                      width="25"
                      height="25"
                      viewBox="0 0 41 41"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M5.3658 5.3658C-1.7886 12.5202 -1.7886 24.1198 5.3658 31.2742C12.5202 38.4286 24.1198 38.4286 31.2742 31.2742C38.4286 24.1198 38.4286 12.5202 31.2742 5.3658C24.1198 -1.7886 12.5202 -1.7886 5.3658 5.3658ZM8.19423 8.19423C13.7865 2.60192 22.8535 2.60192 28.4458 8.19423C34.0381 13.7865 34.0381 22.8535 28.4458 28.4458C22.8535 34.0381 13.7865 34.0381 8.19423 28.4458C2.60192 22.8535 2.60192 13.7865 8.19423 8.19423Z"
                        fill="white"
                      />
                      <path
                        d="M40.1887 36.565L31.9297 28.306C30.0441 26.4204 27.2157 29.2488 29.1013 31.1344L37.3602 39.3934C39.2459 41.279 42.0743 38.4506 40.1887 36.565Z"
                        fill="white"
                      />
                    </svg>
                  </button>
                </div>
              </div>
              <div className="mt-6">
                <h1 className="text-black font-Robot font-bold xl:text-4xl text-2xl leading-tight">
                  Choose an account type for your Personalized service
                </h1>
              </div>
              <div className="flex items-center gap-6 mt-6 justify-center lg:justify-start">
                <div className={`${select === 0 ? "bg-[#FFC10E]":"bg-[#F1F1F5]"} text-center py-2 rounded-lg w-1/3 cursor-pointer`} onClick={()=>{setSelect(select==0 ? null :0)}}>
                  <h1 className={`font-Robot font-bold xl:text-xl lg:text-base text-xs ${select===0 ? "text-white":"text-black"}`}>Customer</h1>
                </div>
                <div className={`${select === 1 ? "bg-[#FFC10E]":"bg-[#F1F1F5]"} text-center py-2 rounded-lg w-1/3 cursor-pointer`} onClick={()=>{setSelect(select==1 ? null :1)}}>
                  <h1 className={`font-Robot font-bold xl:text-xl lg:text-base text-xs ${select===1 ? "text-white":"text-black"}`}>Commercial User</h1>
                </div>
              </div>
            </div>
          </div>
          <div className="lg:w-[50%] xl:w-[40%]">
            <img src={help} />
          </div>
        </div>
      </div>
    </>
  );
};

export default StaticSection;
