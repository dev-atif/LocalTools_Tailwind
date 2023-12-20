import React from "react";
import promo from "../../assets/Aboutpromo.png";
const RightPeople = () => {
  return (
    <>
      <section className="">
        <div className=" md:my-16 my-6">
          <div className=" md:grid grid-cols-2 items-center ">
            <div className="xl:-ml-[3.2%] md:-ml-[2%]">
              <img src={promo} />
            </div>
            <div className="max-w-md mx-auto px-3 lg:px-0">
              <h1 className="text-[#16133E] font-Robot font-bold md:text-3xl text-2xl">
                We bring the right people together
              </h1>
              <div className="md:mt-8 mt-3">
                <p className="font-Robot font-normal md:text-lg text-sm text-[#636A75]">
                  As you may already know, there are an infinite number of
                  things you can test on your site to help you increase sales.
                  From layout to copy to design, there are limitless
                  combinations of changes that may improve your visitor-to-sale
                  conversion rate.
                </p>
              </div>
              <div className="lg:mt-12 mt-8 text-center md:text-start">
                <button className="text-white font-Robot font-semibold text-base bg-[#FFC10E] px-10 py-3 rounded-full">
                Contact Us
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default RightPeople;
