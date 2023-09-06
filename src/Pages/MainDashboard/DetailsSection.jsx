import React from "react";
import logo from "../../assets/Logo.png";
const DetailsSection = ({ textcolor, fill }) => {
  return (
    <>
      <div className="bg-color-primary-yel p-4 rounded-lg ">
        <div className=" flex md:gap-[11px] gap-8 md:flex-nowrap flex-wrap ">
          {/* Col 1 ---------------------------------------------------------- */}
          <div className=" w-full md:w-[15%]">
            <div className="flex md:flex-col flex-row-reverse  justify-center items-center gap-2">
              <h1 className="font-Mont font-bold  text-4xl">Why?</h1>
              <img src={logo} />
            </div>
          </div>
          {/* Col 2 ------------------------------------------------------------*/}
          <div className=" lg:w-[25%] xl:w-[15%] md:w-[25%] w-full  flex items-center justify-center">
            <button className="bg-white mt-3 text-black rounded-lg px-3 py-2 text-sm font-Robot font-medium">
              Know More
            </button>
          </div>
          {/* Col 3 -------------------------------------------------------------- */}
          <div className="md:w-[22%] w-full flex  flex-col items-center justify-center gap-2">
            <span>
              <svg
                width="24"
                height="24"
                viewBox="0 0 34 28"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M33.6 18.4C33.6 17.7852 33.3689 17.2245 32.9888 16.7998C33.3689 16.3752 33.6 15.8144 33.6 15.1997V12.8H28C26.6745 12.8 25.6 11.7255 25.6 10.4V7.19998C25.6 5.87449 26.6745 4.79998 28 4.79998H32.2749L32.2341 4.63394C32.0009 3.68499 31.2156 2.97218 30.2486 2.83164L21.9452 1.62493C21.8309 1.60831 21.7155 1.59998 21.6 1.59998C20.2745 1.59998 19.2 2.67449 19.2 3.99998V15.1997C19.2 15.4803 19.2482 15.7497 19.3367 16H2.4C1.07452 16 0 17.0745 0 18.4V20C0 21.3255 1.07452 22.4 2.4 22.4H3.25671C3.64489 19.6861 5.97882 17.6 8.8 17.6C11.6212 17.6 13.9551 19.6861 14.3433 22.4H20.8567C21.2449 19.6861 23.5788 17.6 26.4 17.6C29.1823 17.6 31.4907 19.6291 31.9261 22.2882C32.8967 21.9805 33.6 21.0724 33.6 20V18.4ZM33.5307 9.90996L32.6681 6.39997H28C27.5582 6.39997 27.2 6.75815 27.2 7.19998V10.4C27.2 10.8418 27.5582 11.2 28 11.2H33.6V10.4827C33.6 10.2897 33.5767 10.0974 33.5307 9.90996Z"
                  
                  fill={fill === 'white' ? "white" : "#2E2E2E"}
                />
                <path
                  d="M26.4004 27.2C28.6095 27.2 30.4004 25.4091 30.4004 23.2C30.4004 20.9908 28.6095 19.2 26.4004 19.2C24.1913 19.2 22.4004 20.9908 22.4004 23.2C22.4004 25.4091 24.1913 27.2 26.4004 27.2Z"
                  fill={fill === 'white' ? "white" : "#2E2E2E"}
                />
                <path
                  d="M8.7998 27.2C11.0089 27.2 12.7998 25.4091 12.7998 23.2C12.7998 20.9908 11.0089 19.2 8.7998 19.2C6.59067 19.2 4.7998 20.9908 4.7998 23.2C4.7998 25.4091 6.59067 27.2 8.7998 27.2Z"
                  fill={fill === 'white' ? "white" : "#2E2E2E"}
                />
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M17.6 14.4H0V2.4C0 1.07452 1.07452 0 2.4 0H18.4C18.914 0 19.3902 0.161575 19.7807 0.436705C18.4862 1.09898 17.6 2.446 17.6 4V14.4Z"
                  fill={fill === 'white' ? "white" : "#2E2E2E"}
                />
              </svg>
            </span>
            <div className="text-center">
              <h1
                className={`font-Mont font-semibold 2xl:text-lg text-base ${textcolor}`}
              >
                Free Shipping
              </h1>
              <p className="text-[#5A7184] font-Robot font-normal 2xl:text-base text-sm py-1">
                Free delivery for all orders
              </p>
            </div>
          </div>
          {/* Col 4 -------------------------------------------------------------- */}
          <div className="md:w-[20%] flex w-full  flex-col items-center justify-center gap-2">
            <span>
              <svg
                width="24"
                height="24"
                viewBox="0 0 34 32"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M5.6 0H28C31.0928 0 33.6 2.50721 33.6 5.6V16.8C33.6 19.8928 31.0928 22.4 28 22.4H5.6C2.50721 22.4 0 19.8928 0 16.8V5.6C0 2.50721 2.50721 0 5.6 0ZM33.6 21.6V20.8C33.6 20.8 32.3911 23.7287 28 24H5.6C1.11491 23.6688 0 20.8 0 20.8V21.6C0 24.6928 2.50721 27.2 5.6 27.2H28C31.0928 27.2 33.6 24.6928 33.6 21.6ZM33.6 26.4V25.6C33.6 25.6 32.3911 28.5287 28 28.8H5.6C1.11491 28.4688 0 25.6 0 25.6V26.4C0 29.4928 2.50721 32 5.6 32H28C31.0928 32 33.6 29.4928 33.6 26.4ZM20 6.4H17.6V5.6C17.6 5.15817 17.2418 4.8 16.8 4.8C16.3582 4.8 16 5.15817 16 5.6V6.4H15.2223C13.8968 6.4 12.8223 7.47452 12.8223 8.8V9.60121C12.8223 10.9267 13.8968 12.0012 15.2223 12.0012H18.4C18.8418 12.0012 19.2 12.3594 19.2 12.8012V13.6C19.2 14.0418 18.8418 14.4 18.4 14.4H14.4196C14.3867 13.9997 14.0576 13.6795 13.6466 13.667C13.205 13.6535 12.8361 14.0007 12.8227 14.4423L12.8004 15.1757C12.7867 15.6268 13.1487 16 13.6 16H16V16.786C16 17.2278 16.3582 17.586 16.8 17.586C17.2418 17.586 17.6 17.2278 17.6 16.786V16H18.4C19.7255 16 20.8 14.9255 20.8 13.6V12.8012C20.8 11.4757 19.7255 10.4012 18.4 10.4012H15.2223C14.7805 10.4012 14.4223 10.043 14.4223 9.60121V8.8C14.4223 8.35817 14.7805 8 15.2223 8H19.2238C19.3106 8.34792 19.6252 8.60566 20 8.60566C20.4418 8.60566 20.8 8.24749 20.8 7.80566V7.2C20.8 6.75817 20.4418 6.4 20 6.4Z"
                  fill={fill === 'white' ? "white" : "#00005B"}
                />
              </svg>
            </span>
            <div className="text-center">
              <h1
                className={`font-Mont font-semibold 2xl:text-lg text-base ${textcolor}`}
              >
                Money Guarantee
              </h1>
              <p className="text-[#5A7184] font-Robot font-normal 2xl:text-base py-1 text-sm">
                30 days money back
              </p>
            </div>
          </div>
          {/* Col 5 --------------------------------------w-full ------------------------ */}
          <div className="md:w-[20%] w-full flex  flex-col items-center justify-center gap-2">
            <span>
              <svg
                width="24"
                height="24"
                viewBox="0 0 34 34"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M33.6 21.8257C32.9509 21.0235 32.1328 20.3636 31.2 19.9V16.7516C31.2 8.57775 24.9738 2.4 16.8 2.4C8.62619 2.4 2.4 8.57775 2.4 16.7516V19.9C1.46717 20.3636 0.649147 21.0235 0 21.8257V16.7516C0 7.25226 7.3007 0 16.8 0C26.2993 0 33.6 7.25226 33.6 16.7516V21.8257ZM4.87076 20.7986C4.82431 21.0425 4.8 21.2942 4.8 21.5516V31.1516C4.8 31.4089 4.82431 31.6607 4.87076 31.9045C2.12251 31.5471 0 29.1972 0 26.3516C0 23.5059 2.12251 21.156 4.87076 20.7986ZM28.8 31.1516C28.8 31.4089 28.7757 31.6607 28.7292 31.9045C31.4775 31.5471 33.6 29.1972 33.6 26.3516C33.6 23.5059 31.4775 21.156 28.7292 20.7986C28.7757 21.0425 28.8 21.2942 28.8 21.5516V31.1516ZM8.8 19.1516H10.4C11.7255 19.1516 12.8 20.2261 12.8 21.5516V31.1516C12.8 32.477 11.7255 33.5516 10.4 33.5516H8.8C7.47452 33.5516 6.4 32.477 6.4 31.1516V21.5516C6.4 20.2261 7.47452 19.1516 8.8 19.1516ZM24.8 19.1516H23.2C21.8745 19.1516 20.8 20.2261 20.8 21.5516V31.1516C20.8 32.477 21.8745 33.5516 23.2 33.5516H24.8C26.1255 33.5516 27.2 32.477 27.2 31.1516V21.5516C27.2 20.2261 26.1255 19.1516 24.8 19.1516Z"
                  fill={fill === 'white' ? "white" : "black"}
                />
              </svg>
            </span>
            <div className="text-center">
              <h1
                className={`font-Mont font-semibold 2xl:text-lg text-base ${textcolor}`}
              >
                24/7 Support
              </h1>
              <p className="text-[#5A7184] font-Robot font-normal 2xl:text-base py-1 text-sm">
                Friendly 24/7 support
              </p>
            </div>
          </div>
          {/* Col 6 -------------------------------------------------------------- */}
          <div className="md:w-[20%] w-full flex  flex-col items-center justify-center gap-2">
            <span>
              <svg
                width="24"
                height="24"
                viewBox="0 0 40 40"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M31.2002 8H8.80019C5.7074 8 3.2002 10.5072 3.2002 13.6V14.4H36.8002V13.6C36.8002 10.5072 34.293 8 31.2002 8ZM3.2002 28V20.8H36.8002V28C36.8002 31.0928 34.293 33.6 31.2002 33.6H8.80019C5.7074 33.6 3.2002 31.0928 3.2002 28ZM31.2002 28.8H24.8002C24.3584 28.8 24.0002 28.4418 24.0002 28C24.0002 27.5582 24.3584 27.2 24.8002 27.2H31.2002C31.642 27.2 32.0002 27.5582 32.0002 28C32.0002 28.4418 31.642 28.8 31.2002 28.8ZM3.2002 19.2V16H36.8002V19.2H3.2002Z"
                  fill={fill === 'white' ? "white" : "black"}
                />
              </svg>
            </span>
            <div className="text-center">
              <h1
                className={`font-Mont font-semibold 2xl:text-lg text-base ${textcolor}`}
              >
                Secure Payment
              </h1>
              <p className="text-[#5A7184] font-Robot font-normal 2xl:text-base py-1 text-sm">
                All cards accepted
              </p>
            </div>
          </div>
        </div>
        <div className="text-end lg:-mt-2">
          <h1 className={`font-Mont font-medium text-sm ${textcolor}`}>
            T&C Apply
          </h1>
        </div>
      </div>
    </>
  );
};

export default DetailsSection;
