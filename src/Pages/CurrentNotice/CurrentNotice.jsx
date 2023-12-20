import React from "react";
import Navbar from "../../Component/NavBar/Navbar";
import NoticeSection1 from "./NoticeSection1";
import Accordian from "../SaftyTip/Accordian";
import { Notice_Accordian } from "./Notic_Accordian_Array";
import Footer from "../../Component/Shared/Footer";

const CurrentNotice = () => {
  return (
    <>
      <div className="bg-white">
        <div>
          <Navbar />
        </div>
        <div>
          <section>
            <div className="flex items-center justify-center flex-col bg-[#FFC10E] py-10 ">
              <h1 className="font-Robot font-bold text-white lg:text-[72px] text-4xl ">
                Current Notice
              </h1>
              <p className="font-Robot text-sm font-normal text-black md:mt-12 mt-6">
                Home / <span className={`text-white`}>Current Notice</span>
              </p>
            </div>
          </section>
        </div>
        <div className=" px-3 xl:px-9">
          <section>
            <NoticeSection1 />
          </section>
          <section>
            <Accordian Accordian={Notice_Accordian} />
          </section>
          <section className="mt-12 mb-20 ">
            <div className="">
              <h1 className="text-[#92929D] md:text-3xl text-xl text-center font-Robot font-bold bg-[#F6F7FB] py-2">
                On our <span className="text-[#4244E6]">Help pages</span>
                learn more about security.
              </h1>
            </div>
          </section>
        </div>
        <Footer/>
      </div>
    </>
  );
};

export default CurrentNotice;
