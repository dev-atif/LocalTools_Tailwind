import React, { useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import ProductCard from "../../Component/Shared/ProductCard";
import {  ProductsCardsArray } from "./ProductsArray";

const LandingPageSlider = () => {
  const sliderRef = useRef();
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: false, // This will remove the default arrows
    responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
          },
        },
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 2,
          },
        },
        {
            breakpoint: 425,
            settings: {
              slidesToShow: 1,
            },
          },
      ],
  };
  return (
    <>
      <div>
        <div className="bg-[#FFC10E] rounded-lg p-4">
          <div className=" flex items-center justify-between">
            <h1 className="font-Mont font-semibold 2xl:text-[32px] text-2xl text-white">
              Highlight
            </h1>
            <div className="flex items-center gap-3">
              <div
                onClick={() => sliderRef.current.slickPrev()}
                className="bg-white p-4 w-min rounded-full relative cursor-pointer  "
              >
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                  <span>
                    <svg
                      width="10"
                      height="15"
                      viewBox="0 0 10 18"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M9 1L0.999999 9L9 17"
                        stroke="#92929D"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg>
                  </span>
                </div>
              </div>
              <div onClick={()=>{sliderRef.current.slickNext()}} 
              className="bg-white p-4 w-min rounded-full relative cursor-pointer ">
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                  <svg
                    width="10"
                    height="15"
                    viewBox="0 0 10 18"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M1 17L9 9L0.999999 1"
                      stroke="#92929D"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                </div>
              </div>
            </div>
          </div>
          <div className="py-6">
            <Slider {...settings} ref={sliderRef}>
              {ProductsCardsArray.map((item, index) => (
                <div key={index}>
                  <div className="px-1">
                    {" "}
                    {/* Add padding here */}
                    <ProductCard
                      Pname={item.name}
                      cat={item.cat}
                      image={item.image}
                      price={item.price}
                      location={item.location}
                    />
                  </div>
                </div>
              ))}
            </Slider>
          </div>
        </div>
      </div>
    </>
  );
};

export default LandingPageSlider;
