import React from "react";
import Navbar from "../../Component/NavBar/Navbar";
import StaticHeading from "../../Component/Shared/StaticHeading";
import StaticSection from "./StaticSection";
import Help_2_section_3 from "./Help_2_section_3";
import Hepl_Tabs from "./Hepl_Tabs";
import Help_3_Tab_Generally from "./Help_3_Tab_Generally";
import { useState } from "react";
import HelpCategory from "./HelpCategory";
import Footer from "../../Component/Shared/Footer";


const Help_3 = () => {
    const [isuseful,setUseful] = useState(0)
  return (
    <>
      <div>
        <div>
          <div>
            <Navbar />
          </div>
          <div>
            <div>
              <StaticHeading
                heading={"Help"}
                path={"About Us"}
                textcolor={"text-[#92929D]"}
              />
            </div>
            <div className="px-3 xl:px-9 bg-white">
              <StaticSection />
            </div>
            <div className="px-3 xl:px-9">
              <Help_2_section_3 />
            </div>
            <div className="px-3 xl:px-9 bg-white">
              <Hepl_Tabs Tabs={Help_3_tabs} />
            </div>
            {/* ------------------------------------------------------------------------------ */}
            <div className=" px-3 xl:px-9">
              {" "}
              <div className=" bg-black py-8 rounded-lg ">
                <h1 className="font-Robot font-bold text-center text-white md:text-[60px] text-xl ">
                  Was this article helpful?
                </h1>
                <div className="flex items-center justify-center gap-6 md:mt-10 mt-4">
                        <div className={`${isuseful ===0 ? "bg-white":'bg-transparent  '} border border-white py-3 text-center lg:w-1/6 w-1/3 rounded-lg`} onClick={()=>{setUseful(isuseful === 0 ? null : 0)}}>
                            <h2 className={`font-Robot  font-bold md:text-xl text-base ${isuseful === 0 ? "text-black":"text-white"} `}>
                            Yes
                            </h2>
                        </div>
                        <div className={`${isuseful ===1 ? "bg-white":'bg-transparent  '} border border-white py-3 text-center lg:w-1/6 w-1/3 rounded-lg`} onClick={()=>{setUseful(isuseful === 1 ? null : 1)}}>
                            <h2 className={`font-Robot  font-bold md:text-xl text-base ${isuseful === 1 ? "text-black":"text-white"} `}>
                            No
                            </h2>
                        </div>
                </div>
              </div>
            </div>
            {/* --------------------------------------------------------------------------------- */}
            <div className=" px-3 xl:px-9">
                <HelpCategory/>
            </div>
          </div>
          
        </div>
        <div>
            <Footer/>
        </div>
      </div>
    </>
  );
};

export default Help_3;
const Help_3_tabs = [
  {
    label: "Generally",
    content: <Help_3_Tab_Generally />,
  },
  {
    label: "I am Seller",
    content: <Help_3_Tab_Generally />,
  },
  {
    label: "I am Buyer",
    content: <Help_3_Tab_Generally />,
  },
];
