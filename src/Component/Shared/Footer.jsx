import React from "react";
import Logo from "../../assets/Logo.png";
const Footer = () => {
  return (
    <div>
      <div className="bg-black p-8 ">
        <div className=" lg:px-0 md:px-8">
          <div className="md:grid grid-cols-4 md:gap-9 lg:gap-0">

            {/* Grid Col 1 -------------------------------------------------------------------------- */}
            <div className="flex justify-center lg:col-auto md:col-span-2 ">
              <div className="flex flex-col gap-4 items-center md:items-start">
                <div>
                  <img src={Logo} />
                </div>
                <div>
                  <p className="text-[#F6F7FB] font-Mont font-normal text-base">
                    © 2021 - All rights reserved
                  </p>
                </div>
                <div className="flex gap-3">
                  <div className="bg-white w-min p-3 rounded-full">
                    <span>
                      <svg
                        width="24"
                        height="24"
                        viewBox="0 0 20 20"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M14.5 1H5.5C3.01472 1 1 3.01472 1 5.5V14.5C1 16.9853 3.01472 19 5.5 19H14.5C16.9853 19 19 16.9853 19 14.5V5.5C19 3.01472 16.9853 1 14.5 1Z"
                          stroke="black"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                        <path
                          d="M13.5995 9.43229C13.7106 10.1813 13.5827 10.9463 13.2339 11.6184C12.8852 12.2905 12.3334 12.8356 11.657 13.176C10.9806 13.5164 10.2141 13.6349 9.46655 13.5146C8.71895 13.3943 8.02833 13.0414 7.4929 12.5059C6.95747 11.9705 6.6045 11.2799 6.4842 10.5323C6.3639 9.78469 6.4824 9.0182 6.82283 8.34183C7.16327 7.66546 7.70831 7.11366 8.38043 6.76491C9.05255 6.41616 9.81752 6.28822 10.5665 6.39929C11.3306 6.51259 12.0379 6.86861 12.5841 7.41477C13.1302 7.96093 13.4862 8.66826 13.5995 9.43229Z"
                          stroke="black"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                        <path
                          d="M14.9502 5.05078H14.9584"
                          stroke="black"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                      </svg>
                    </span>
                  </div>
                  <div className="bg-white w-min p-3 rounded-full">
                    <span>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M22 4.00897C21.1294 4.61128 20.1656 5.07195 19.1455 5.37324C18.5979 4.75576 17.8703 4.3181 17.0609 4.11947C16.2516 3.92083 15.3995 3.9708 14.6201 4.26261C13.8406 4.55442 13.1713 5.07399 12.7027 5.75105C12.2341 6.42812 11.9888 7.23001 12 8.04827V8.93995C10.4024 8.98058 8.81934 8.63305 7.39183 7.92829C5.96431 7.22354 4.73665 6.18362 3.81818 4.90082C3.81818 4.90082 0.181818 12.9258 8.36364 16.4925C6.49139 17.739 4.26105 18.364 2 18.2758C10.1818 22.7342 20.1818 18.2758 20.1818 8.02152C20.181 7.77315 20.1566 7.52539 20.1091 7.28143C21.0369 6.38395 21.6917 5.25082 22 4.00897Z" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

                    </span>
                  </div>
                  <div className="bg-white w-min p-3 rounded-full">
                    <span>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M18 2H15C13.6739 2 12.4021 2.52678 11.4645 3.46447C10.5268 4.40215 10 5.67392 10 7V10H7V14H10V22H14V14H17L18 10H14V7C14 6.73478 14.1054 6.48043 14.2929 6.29289C14.4804 6.10536 14.7348 6 15 6H18V2Z" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

                    </span>
                  </div>
                </div>
              </div>
            </div>
             {/* Grid Col 2 -------------------------------------------------------------------------- */}
            <div className="lg:flex justify-center md:my-0 my-12">
                <div >
                    <div >
                        <h1 className="text-2xl font-Mont font-bold text-[#F6F7FB]">Categories</h1>
                    </div>
                    <div className="mt-4">
                        <ul>
                            <li className="text-[#F6F7FB] font-Mont font-normal text-base">
                            Garden tools
                            </li>
                            <li className="text-[#F6F7FB] font-Mont font-normal text-base py-3">
                            KFZ tools
                            </li>
                            <li className="text-[#F6F7FB] font-Mont font-normal text-base">
                            machines
                            </li>
                            <li className="text-[#F6F7FB] font-Mont font-normal text-base py-3">
                            Forestic tools
                            </li>
                            <li className="text-[#F6F7FB] font-Mont font-normal text-base">
                            Agriculture Machinery
                            </li>

                        </ul>
                    </div>
                </div>
            </div>
             {/* Grid Col 3 -------------------------------------------------------------------------- */}
             <div className="lg:flex justify-center lg:col-auto md:col-span-2">
                <div >
                    <div >
                        <h1 className="text-2xl font-Mont font-bold text-[#F6F7FB]">Legal</h1>
                    </div>
                    <div className="mt-4">
                        <ul>
                            <li className="text-[#F6F7FB] font-Mont font-normal text-base">
                            Terms of Service
                            </li>
                            <li className="text-[#F6F7FB] font-Mont font-normal text-base py-3">
                            Privacy Policy
                            </li>
                            <li className="text-[#F6F7FB] font-Mont font-normal text-base">
                            Return Policy
                            </li>
                            <li className="text-[#F6F7FB] font-Mont font-normal text-base py-3">
                            Shipping
                            </li>
                            <li className="text-[#F6F7FB] font-Mont font-normal text-base">
                            Data Protection
                            </li>

                        </ul>
                    </div>
                </div>
            </div>
             {/* Grid Col 4 -------------------------------------------------------------------------- */}
             <div className="lg:flex justify-center md:mt-0 mt-12">
                <div>
                    <div >
                        <h1 className="text-2xl font-Mont font-bold text-[#F6F7FB]">Company</h1>
                    </div>
                    <div className="mt-4">
                        <ul>
                            <li className="text-[#F6F7FB] font-Mont font-normal text-base">
                            About
                            </li>
                            <li className="text-[#F6F7FB] font-Mont font-normal text-base py-3">
                            Team
                            </li>
                            <li className="text-[#F6F7FB] font-Mont font-normal text-base">
                            Contact
                            </li>
                            <li className="text-[#F6F7FB] font-Mont font-normal text-base py-3">
                            Careers
                            </li>
                            <li className="text-[#F6F7FB] font-Mont font-normal text-base">
                            Vision
                            </li>

                        </ul>
                    </div>
                </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
