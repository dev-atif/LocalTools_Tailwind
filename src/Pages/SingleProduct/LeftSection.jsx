import React, { useRef, useState ,useEffect } from "react";
import CategorySelect from "../../Component/Shared/CategorySelect";
import Slider from "react-slick";
import image1 from "../../assets/SingleProduct/garden-tool-set-of-8-pcs-cggs-garden-tool-kit-8-tools-ibex-original-imafnm3uzd4gbjez 1.png";
import image2 from "../../assets/SingleProduct/gardening-tools-set-of-5-ibex-original-imafbxfhce3q57jd 1.png";
import image3 from "../../assets/SingleProduct/german-style-pruner-garden-tool-set-of-6-scissor-gloves-garden-original-imafnmf5hvdhbhpr 2.png";
import image4 from "../../assets/SingleProduct/german-style-pruner-garden-tool-set-of-6-scissor-gloves-garden-original-imafy8jrnqfzuyjy .png";
import profile from "../../assets/ahmad.png";
import BlackButton from "../../Component/Shared/BlackButton";
import CompService from "./CompService";
import CompanyProductDetails from "./CompanyProductDetails";
import Location from "./Map/Location";
import CancellationPolicy from "./CancellationPolicy";
import RelatedProduct from "./RelatedProduct";
/* const Pro_Image = [
  { id: 1, image: image1 },
  { id: 2, image: image2 },
  { id: 3, image: image3 },
  { id: 4, image: image4 },
  { id: 5, image: image1 },
  { id: 6, image: image2 },
  { id: 7, image: image3 },
  { id: 8, image: image4 },
]; */
const LeftSection = ({ product }) => {
  
  const VerticalsliderRef = useRef();
  
  
  const [slideIndex, setSlideIndex] = useState(0);
  
  console.warn("its Product", product);

  const [selectimage, setSelectimage] = useState(0);
  const totalImages = product?.Product_images.length || 0;


  const nextSlide = () => {
    if (VerticalsliderRef.current) {
      VerticalsliderRef.current.slickNext();
      setSlideIndex((prevIndex) => (prevIndex + 1) % totalImages);
      setSelectimage((prevIndex) => (prevIndex + 1) % totalImages);
    }
  };

  const prevSlide = () => {
    if (VerticalsliderRef.current) {
      VerticalsliderRef.current.slickPrev();
      setSlideIndex((prevIndex) => (prevIndex - 1 + totalImages) % totalImages);
      setSelectimage((prevIndex) => (prevIndex - 1 + totalImages) % totalImages);
    }
  };

 

  useEffect(() => {
    if (VerticalsliderRef.current) {
      VerticalsliderRef.current.slickGoTo(slideIndex);
    }
  }, [slideIndex]);

  const sliderContainerStyle = {
    height: `${totalImages * 170}px`, // Adjust the multiplier based on your image height
  };
 
  const Verticalsettings = {
    dots: false,
    arrows: false,
   /*  infinite: true, */
    speed: 400,
    slidesToShow: 3,
    
    slidesToScroll: 1,
    vertical: true, // Add this to enable vertical sliding (note: not native support)
    verticalSwiping: true, // Also add this for vertical swiping on touch devices
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 5,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 5,
        },
      },
      {
        breakpoint: 425,
        settings: {
          slidesToShow: totalImages === 3 ? 3 : 4,
          vertical: false, // Add this to enable vertical sliding (note: not native support)
        },
      },
    ],
  };
 

  return (
    <>
      <div>
        <div>
          <div className=" md:flex items-center gap-4">
            <div className="xl:w-1/4 md:w-1/3 ">
              <CategorySelect />
            </div>
            <div className="md:my-0 my-3">
              <h1 className="font-Robot font-normal text-sm text-black">
                Home /{/*  Garden Tools */} {product?.Category || ""} /{" "}
                <span className="text-color-primary-gr">
                  {/* Jetfire German style pruner set of 6 & Scissor, Gloves Garden
                  tools kit (7 tools) */}
                  {product?.tittle || ""}
                </span>
              </h1>
            </div>
          </div>
          {/* ----------------------------------------------- */}
          <div className="mt-4">
            <h1 className="text-2xl font-Robot font-medium">
              {/*  JetFire German Style Pruner Set of 6 & Scissor, Gloves Garden Tool
              Kit (7 Tools) */}{" "}
              {product?.tittle || ""}
            </h1>
          </div>
          {/* ---------------------------------------------------- */}
          <div className="flex items-center gap-5 my-4">
            <h1 className=" text-xs font-Robot font-normal text-color-primary-gr flex items-center gap-1">
              <span>
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 20 22"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M4.44444 9.9H6.66667V12.1H4.44444V9.9ZM20 4.4V19.8C20 21.01 19 22 17.7778 22H2.22222C1.63285 22 1.06762 21.7682 0.650874 21.3556C0.234126 20.9431 0 20.3835 0 19.8L0.0111111 4.4C0.0111111 3.19 0.988889 2.2 2.22222 2.2H3.33333V0H5.55556V2.2H14.4444V0H16.6667V2.2H17.7778C19 2.2 20 3.19 20 4.4ZM2.22222 6.6H17.7778V4.4H2.22222V6.6ZM17.7778 19.8V8.8H2.22222V19.8H17.7778ZM13.3333 12.1H15.5556V9.9H13.3333V12.1ZM8.88889 12.1H11.1111V9.9H8.88889V12.1Z"
                    fill="#959EAD"
                  />
                </svg>
              </span>
              15 Sept 2021
            </h1>
            <h1 className=" text-xs font-Robot font-normal text-color-primary-gr flex items-center gap-1">
              <span>
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 18 22"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M9 12C10.6569 12 12 10.6569 12 9C12 7.34315 10.6569 6 9 6C7.34315 6 6 7.34315 6 9C6 10.6569 7.34315 12 9 12Z"
                    stroke="#959EAD"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M9 1C6.87827 1 4.84344 1.84285 3.34315 3.34315C1.84285 4.84344 1 6.87827 1 9C1 10.892 1.402 12.13 2.5 13.5L9 21L15.5 13.5C16.598 12.13 17 10.892 17 9C17 6.87827 16.1571 4.84344 14.6569 3.34315C13.1566 1.84285 11.1217 1 9 1V1Z"
                    stroke="#959EAD"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </span>
              {/* Goerge Colony, California */}{" "}
              {product?.Listing_Street_No1 || ""}
            </h1>
          </div>
          {/* ----------------------Vertical Slider-------------------------------- */}
          <div /* className="md:grid grid-cols-12 gap-4 " */ className="flex  flex-col md:flex-row" >
            <div className="  md:w-48 h-80" >
              <div /* style={sliderContainerStyle} className={`overflow-hidden `}  */ >
                <Slider {...Verticalsettings} ref={VerticalsliderRef}>
                  {product?.Product_images.map((item, index) => (
                    <div key={index} className="mt-3" >
                      <div className="flex justify-center pt-4 ">
                        {" "}
                        {/* Add padding here */}
                        <img
                          src={item.images}
                          className={ index === selectimage ? ' border-2 border-color-primary-yel transition-all delay-100 w-46 md:w-32 w-46 h-16' : 'md:w-32 w-46 h-16' }
                          onClick={() => {
                            setSelectimage(index);
                          }}
                        />
                      </div>
                    </div>
                  ))}
                </Slider>
              </div>
              <div className="md:flex justify-center mt-5  gap-2 hidden">
                <button
                 
                  onClick={nextSlide}
                >
                  <svg
                    width="24"
                    height="14"
                    viewBox="0 0 24 14"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M22 12L12 2L2.00001 12"
                      stroke="#92929D"
                      stroke-width="3"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                </button>
                <button
                 
                  onClick={prevSlide}
                >
                  <svg
                    width="24"
                    height="14"
                    viewBox="0 0 24 14"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M2 2L12 12L22 2"
                      stroke="#92929D"
                      stroke-width="3"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                </button>
              </div>
            </div>
            {/* -----------------------------Simple Slider---------------------------------------------------------- */}
            <div className=" col-span-10 bg-white py-8 px-4 rounded-lg  w-full">
              <div className="relative"> 
                {/* ------------------------------------------------- */}
                <div className="flex items-center justify-center">
                  <img
                    src={product?.Product_images[selectimage]?.images}
                    alt={`Selected Slide`}
                    className="md:w-[549px] md:h-[488px] w-[200px] h-[200px]"
                  />
                </div>
                {/* ----------------------------------------------------------------------- */}
                <div className="flex justify-between md:px-3 absolute inset-0 top-1/2">
                  <button
                   
                    onClick={prevSlide}
                    className="h-min w-min "
                  >
                    <svg
                      width="26"
                      height="46"
                      viewBox="0 0 26 46"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M23 3L3 23L23 43"
                        stroke="#92929D"
                        stroke-width="5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg>
                  </button>
                  <button
                   
                    onClick={nextSlide}
                    className="h-min w-min "
                  >
                    <svg
                      width="26"
                      height="46"
                      viewBox="0 0 26 46"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M3 43L23 23L3 3"
                        stroke="#92929D"
                        stroke-width="5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </div>
          {/* ------------------------------------------------------------------------------------------ */}
          {/* ------------------------------------------- End Slider -------------------------------------------------- */}
          {/* -------------------------Seller Description----------------------------------------- */}
          <div className="my-8 bg-white p-4 rounded-lg">
            <div>
              <h1 className="text-color-primary-gr font-Robot font-medium text-3xl mb-3">
                Seller Discription
              </h1>
              <div className=" md:flex  flex-row  items-center justify-between ">
                <div className="flex md:gap-0 gap-5 md:w-1/2 ">
                  <div className="flex items-center gap-2  md:w-2/3 w-full">
                    <img src={profile} className="rounded-full w-[20%]" />
                    <div>
                      <h1 className="text-black font-Robot font-medium 2xl:text-3xl text-2xl">
                        {/* John Doe */} {product?.Vendor_Name || ''}
                      </h1>
                      <p className="font-Robot font-medium 2xl:text-base text-sm text-[#92929D]">
                        Member Since Apr 2021
                      </p>
                    </div>
                  </div>
                  <div className="flex flex-col items-center  ">
                    <h1 className="text-[#92929D]  font-Robot font-normal 2xl:text-3xl text-2xl mt-1">
                      Product
                    </h1>
                    <h1 className="text-black font-Robot font-normal 2xl:text-3xl text-2xl -mt-1">
                      50
                    </h1>
                  </div>
                </div>
                <div className="flex  items-center justify-end gap-12 md:w-1/2 md:mt-0 mt-2">
                  <div className="xl:w-1/3 w-1/2">
                    <BlackButton
                      label={"Contact with Seller "}
                      bgColor={"transparent"}
                      BorderColor={"black"}
                      textColor={"black"}
                    />
                  </div>
                  <div className="w-[25%]">
                    <BlackButton label={"Follow"} />
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* -------Company that provide You  --------------------- */}
          <div>
            <CompService />
          </div>
          {/* -------Company Products details  --------------------- */}
          <div>
            <CompanyProductDetails />
          </div>
          {/* -------Location/Map  --------------------- */}
          <div>
            <Location />
          </div>
          {/* -------Cancelation policy  --------------------- */}
          <div>
            <CancellationPolicy />
          </div>
          {/* -------RelatedProduct  --------------------- */}
          <div>
            <RelatedProduct />
          </div>
        </div>
      </div>
    </>
  );
};

export default LeftSection;

/*  */

