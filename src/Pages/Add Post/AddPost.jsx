import React, { useState } from "react";
import BlackButton from "../../Component/Shared/BlackButton";
import ShareField from "../../Component/Shared/ShareField";
import SharedSelect from "../../Component/Shared/SharedSelect";
import SecondCol from "./SecondCol";
import Section3 from "./Section3";
import Section4 from "./Section4";
import PaymentPolicy from "./PaymentPolicy";
import ProductDetails from "./ProductDetails";
import CustomDetails from "./CustomDetails";
import ListingLocation from "./ListingLocation";
import CallenderSection from "./CallenderSection";
import PublishSection from "./PublishSection";
import PublishFooter from "./PublishFooter";
import Navbar from './../../Component/NavBar/Navbar';
const Stocks = [
  { value: "1", label: "01" },
  { value: "2", label: "02" },
  { value: "3", label: "03" },
];

const AddPost = () => {
  const [check, setCheck] = useState(false);
  const [check2, setCheck2] = useState(false);
  return (
    <div >
      <div><Navbar/></div>
      <div className="  md:px-10 px-3">
        <div>
          <div className="flex items-center gap-6 pt-3">
            <div className="md:w-2/5 w-full">
              <BlackButton label={"My Acount"} />
            </div>
            <div className="w-full">
              <h1 className="text-sm font-Robot font-normal">Home / Post Ad</h1>
            </div>
          </div>
          <div>
            <div className=" lg:grid grid-cols-2 ">
              <div>
                <div className="py-4">
                  <h1 className="2xl:text-2xl text-xl font-Mont font-medium">
                    Ad Details
                  </h1>
                </div>
                <div className="bg-white rounded-lg md:px-5 px-4 py-5 2xl:py-10 xl:py-3">
                  <div>
                    <h4 className="2xl:text-lg text-base font-Mont font-medium text-color-primary-gr">
                      Ad type*
                    </h4>
                  </div>
                  <div className="flex items-center gap-7 py-2">
                    <div className="flex items-center gap-2">
                      <div>
                        {check ? (
                          <svg
                            width="16"
                            height="16"
                            viewBox="0 0 16 16"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                            onClick={() => {
                              setCheck(!check);
                              setCheck2(false);
                            }}
                          >
                            <circle cx="8" cy="8" r="7.5" stroke="#FFC10E" />
                            <circle cx="8" cy="8" r="5" fill="#FFC10E" />
                          </svg>
                        ) : (
                          <svg
                            width="16"
                            height="16"
                            viewBox="0 0 16 16"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                            onClick={() => {
                              setCheck(!check);
                              setCheck2(false);
                            }}
                          >
                            <circle cx="8" cy="8" r="7.5" stroke="black" />
                          </svg>
                        )}
                      </div>
                      <div>
                        <h1 className="text-base 2xl:text-lg font-Mont font-medium">
                          I offer
                        </h1>
                      </div>
                    </div>{" "}
                    <div className="flex items-center gap-2">
                      <div>
                        {check2 ? (
                          <svg
                            width="16"
                            height="16"
                            viewBox="0 0 16 16"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                            onClick={() => {
                              setCheck2(!check2);
                              setCheck(false);
                            }}
                          >
                            <circle cx="8" cy="8" r="7.5" stroke="#FFC10E" />
                            <circle cx="8" cy="8" r="5" fill="#FFC10E" />
                          </svg>
                        ) : (
                          <svg
                            width="16"
                            height="16"
                            viewBox="0 0 16 16"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                            onClick={() => {
                              setCheck2(!check2);
                              setCheck(false);
                            }}
                          >
                            <circle cx="8" cy="8" r="7.5" stroke="black" />
                          </svg>
                        )}
                      </div>
                      <div>
                        <h1 className="text-base 2xl:text-lg font-Mont font-medium">
                          I’m looking for{" "}
                        </h1>
                      </div>
                    </div>
                  </div>
                  <div className="py-2">
                    <ShareField
                      label="Title of the ad*"
                      color={"text-color-primary-gr"}
                      textsize={"text-base"}
                    />
                  </div>
                  <div className="py-2">
                    <ShareField
                      label="Descriptions "
                      color={"text-color-primary-gr"}
                      textsize={"text-base"}
                    />
                  </div>
                  <div>
                    <SharedSelect Value={Stocks} label="Stocks" />
                  </div>
                </div>
              </div>
              <div className="md:pl-8">
                <SecondCol />
              </div>
            </div>
          </div>
          {/*---------------Section 3 ---------------------------------------------------------- */}
          <div>
            <Section3 />
          </div>
          {/*---------------Section 4 ---------------------------------------------------------- */}
          <div>
            <Section4 />
          </div>
          <div>
            <PaymentPolicy />
          </div>
          {/* -------------Section 5 ------------------------------------------------------------ */}
          <div>
            <ProductDetails
              heading1={"Product Details"}
              heading2={"About Product"}
            />
          </div>
          <div>
            <ProductDetails
              heading1={"Things to Know"}
              heading2={"Cancellation Policy"}
            />
          </div>
          {/*-------------------- section 6 ------------------------------------------------------- */}
          <div>
            <CustomDetails />
          </div>
          {/* ----------Section 7 -------------------------------------------------------------------- */}
          <div>
            <ListingLocation />
          </div>
          {/* ----------Section 8 -------------------------------------------------------------------- */}
          <div>
            <CallenderSection/>
          </div>
           {/* ----------Section 9 -------------------------------------------------------------------- */}
           <div>
            <PublishSection/>
          </div>
          {/* ----------Section 10 -------------------------------------------------------------------- */}
          <div>
           <PublishFooter/>
          </div>
          
        </div>
      </div>
    </div>
  );
};

export default AddPost;
