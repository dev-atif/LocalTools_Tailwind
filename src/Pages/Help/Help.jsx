import React from "react";
import Navbar from "../../Component/NavBar/Navbar";
import StaticHeading from "../../Component/Shared/StaticHeading";
import StaticSection from "./StaticSection";
import HelpCategory from "./HelpCategory";
import Footer from "../../Component/Shared/Footer";

const Help = () => {
  return (
    <>
      <div>
        <div>
          <Navbar />
        </div>
        <div>
            <StaticHeading heading={'Help'} path={'About US'} textcolor={'text-[#92929D]'}/>
        </div>
        <div className=" bg-[#F5F6FD]">
            <div className="px-3 xl:px-9 bg-white">
                <StaticSection/>
            </div>
            <div>
              <HelpCategory/>
            </div>
        </div>
        <div>
          <Footer/>
        </div>
      </div>
    </>
  );
};

export default Help;
