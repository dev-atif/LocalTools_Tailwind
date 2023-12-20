import React, { useState } from "react";
import BreadCrums from "./BreadCrums";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import SideBar from "./Sidebar/SideBar";
const SubNav = () => {
  const [click, setClick] = useState(false);
  return (
    <div>
      <div className="">
        <div className="">
          <div className="py-2   relative">
            

            <div
              className="absolute  top-3 right-7  lg:hidden "
              onClick={() => {
                setClick(!click);
              }}
            >
              <div
                className={`duration-500 transition-all ease-in-out transform hover:scale-105 ${
                  click ? "scale-105 " : ""
                }`}
              >
                {!click ? (
                  <AiOutlineMenu className="text-3xl " />
                ) : (
                  <AiOutlineClose className="text-3xl " />
                )}
              </div>
            </div>
            <div>
              <div
                className={`lg:hidden absolute top-14 md:top-12 w-full z-10 border rounded-xl bg-white py-5 px-4 shadow-2xl 
            ${
              click
                ? "translate-x-0 transition-all duration-500"
                : "-translate-x-[200%] transition-all duration-1000"
            }`}
                onClick={() => {
                  setClick(!click);
                }}
              >
                <SideBar />
              </div>
            </div>
          </div>

         
        </div>
      </div>
    </div>
  );
};

export default SubNav;
