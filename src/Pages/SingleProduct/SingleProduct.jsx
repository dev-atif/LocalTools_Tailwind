import React from "react";
import Navbar from "../../Component/NavBar/Navbar";
import CategorySelect from "../../Component/Shared/CategorySelect";
import LeftSection from "./LeftSection";
import RightSection from "./RightSection";
import Footer from "../../Component/Shared/Footer";

const SingleProduct = () => {
  return (
    <>
      <div>
        <div>
          <Navbar />
        </div>
        <div>
          <div  className="pb-16 pt-4">
            <div className="lg:px-2 xl:px-9 px-3 mt-2 relative ">
              <div className="flex lg:flex-row flex-col lg:gap-3 justify-between ">
                <div className=" lg:w-3/4 w-full md:mt-0 mt-3 ">
                  <LeftSection/>
                </div>
                <div className={`lg:w-1/4  w-full h-full  `}>
                    <RightSection/>
                </div>
              </div>
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

export default SingleProduct;
