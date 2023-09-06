import React, { useState } from "react";
import BlackButton from "../../Component/Shared/BlackButton";
import Steps from "../../Component/Shared/Steps";
import InvoiceDetails from "./InvoiceDetails";
const steps = [
  "Step 1: Start",
  "Step 2: Progress",
  "Step 3: Finish",
  // Add more steps as needed
];

const TableDropdown = () => {
  const [invoice, setInvoice] = useState(false);
  return (
    <div className="border-t -mt-5 bg-white pt-4 ">
      <div className="px-7">
        <div className="grid grid-cols-3 gap-5">
          <div className="">
            <div>
              <h1 className="font-Mont font-semibold text-lg text-[#FFC10E]">
                Order From
              </h1>
              <h1 className="font-Mont font-semibold text-lg text-black pt-3 pb-2">
                James Johnson
              </h1>
            </div>
            <div>
              <ul className="pl-2">
                <li className="flex  2xl:text-base text-sm gap-1 text-[#92929D]">
                  <span>
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 20 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M19 10C19 17 10 23 10 23C10 23 1 17 1 10C1 7.61305 1.94821 5.32387 3.63604 3.63604C5.32387 1.94821 7.61305 1 10 1C12.3869 1 14.6761 1.94821 16.364 3.63604C18.0518 5.32387 19 7.61305 19 10Z"
                        stroke="black"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M10 13C11.6569 13 13 11.6569 13 10C13 8.34315 11.6569 7 10 7C8.34315 7 7 8.34315 7 10C7 11.6569 8.34315 13 10 13Z"
                        stroke="black"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg>
                  </span>
                  2rd Floor, Older Town, Melsugen, Schwalm-Eder, northern Hesse,
                  Germany
                </li>
                <li className="flex  2xl:text-base text-sm gap-1 text-[#92929D] py-3">
                  <span>
                    <svg
                      width="19"
                      height="20"
                      viewBox="0 0 19 25"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M3.38211 0.564152L4.78856 0.141131C5.55902 -0.0912001 6.3877 -0.0352717 7.11996 0.29848C7.85222 0.632232 8.43803 1.22101 8.76809 1.95494L9.85517 4.37254C10.1389 5.00382 10.218 5.7081 10.0812 6.38658C9.94433 7.06505 9.59854 7.68366 9.09228 8.15562L7.29173 9.83445C7.2391 9.8835 7.20576 9.94976 7.19773 10.0213C7.1447 10.4997 7.4689 11.4313 8.21611 12.7269C8.75965 13.6681 9.25257 14.3298 9.67077 14.6998C9.96243 14.9589 10.1227 15.0143 10.1914 14.9951L12.6138 14.2539C13.2754 14.0515 13.9837 14.0613 14.6394 14.2817C15.2951 14.5022 15.8654 14.9223 16.2704 15.4832L17.8142 17.6236C18.2837 18.2745 18.501 19.0736 18.4259 19.8727C18.3508 20.6717 17.9883 21.4163 17.4057 21.9683L16.3379 22.9806C15.7711 23.5173 15.0751 23.8981 14.3175 24.0858C13.5599 24.2736 12.7666 24.2619 12.0149 24.052C8.69578 23.1253 5.72017 20.3244 3.0543 15.7073C0.384808 11.0842 -0.551622 7.10229 0.311292 3.76031C0.505538 3.00867 0.890126 2.31975 1.42799 1.75994C1.96585 1.20012 2.63884 0.788297 3.38211 0.564152ZM3.90395 2.29601C3.45812 2.43033 3.05439 2.67719 2.73164 3.01281C2.4089 3.34844 2.17801 3.76151 2.06122 4.21225C1.3357 7.02275 2.16607 10.5527 4.61984 14.8034C7.06998 19.0481 9.70813 21.5308 12.5018 22.3118C12.9527 22.4373 13.4284 22.4441 13.8827 22.3313C14.3369 22.2185 14.7543 21.9901 15.0941 21.6682L16.1631 20.6558C16.428 20.4049 16.5929 20.0663 16.627 19.703C16.6611 19.3397 16.5623 18.9764 16.3487 18.6805L14.8061 16.5413C14.622 16.2861 14.3626 16.0949 14.0643 15.9946C13.766 15.8943 13.4438 15.8899 13.1429 15.9821L10.7145 16.7257C9.3044 17.1451 8.02449 16.011 6.65057 13.6308C5.72499 12.0279 5.29353 10.7865 5.4008 9.82119C5.45744 9.31983 5.69004 8.85704 6.05883 8.51236L7.85938 6.83353C8.08959 6.61903 8.24687 6.33782 8.30912 6.02938C8.37137 5.72093 8.33547 5.40074 8.20647 5.11373L7.11939 2.69613C6.96937 2.36278 6.70326 2.09536 6.37066 1.94369C6.03806 1.79203 5.66166 1.76647 5.31161 1.87178L3.90395 2.29601Z"
                        fill="black"
                      />
                    </svg>
                  </span>
                  +62 333 4242 555
                </li>
                <li className="flex  2xl:text-base text-sm gap-1 text-[#92929D]">
                  <span>
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 24 17"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M0 0.829409L0.829409 0H22.3941L23.2235 0.829409V15.7588L22.3941 16.5882H0.829409L0 15.7588V0.829409ZM1.65882 2.54629V14.9294H21.5646V2.54795L12.126 9.78703H11.1141L1.65882 2.54629ZM19.9556 1.65882H3.26787L11.6117 8.07679L19.9556 1.65882Z"
                        fill="black"
                      />
                    </svg>
                  </span>
                  abc@xyz.com
                </li>
              </ul>
            </div>
          </div>
          <div className="">
            <div>
              <div>
                <h1 className="font-Mont font-semibold text-lg text-[#FFC10E]">
                  Order By
                </h1>
                <h1 className="font-Mont font-semibold text-lg text-black pt-3 pb-2">
                  James Johnson
                </h1>
              </div>
              <div>
                <ul className="pl-2">
                  <li className="flex  2xl:text-base text-sm gap-1 text-[#92929D]">
                    <span>
                      <svg
                        width="20"
                        height="20"
                        viewBox="0 0 20 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M19 10C19 17 10 23 10 23C10 23 1 17 1 10C1 7.61305 1.94821 5.32387 3.63604 3.63604C5.32387 1.94821 7.61305 1 10 1C12.3869 1 14.6761 1.94821 16.364 3.63604C18.0518 5.32387 19 7.61305 19 10Z"
                          stroke="black"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                        <path
                          d="M10 13C11.6569 13 13 11.6569 13 10C13 8.34315 11.6569 7 10 7C8.34315 7 7 8.34315 7 10C7 11.6569 8.34315 13 10 13Z"
                          stroke="black"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                      </svg>
                    </span>
                    2rd Floor, Older Town, Melsugen, Schwalm-Eder, northern
                    Hesse, Germany
                  </li>
                  <li className="flex  2xl:text-base text-sm gap-1 text-[#92929D] py-3">
                    <span>
                      <svg
                        width="19"
                        height="20"
                        viewBox="0 0 19 25"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M3.38211 0.564152L4.78856 0.141131C5.55902 -0.0912001 6.3877 -0.0352717 7.11996 0.29848C7.85222 0.632232 8.43803 1.22101 8.76809 1.95494L9.85517 4.37254C10.1389 5.00382 10.218 5.7081 10.0812 6.38658C9.94433 7.06505 9.59854 7.68366 9.09228 8.15562L7.29173 9.83445C7.2391 9.8835 7.20576 9.94976 7.19773 10.0213C7.1447 10.4997 7.4689 11.4313 8.21611 12.7269C8.75965 13.6681 9.25257 14.3298 9.67077 14.6998C9.96243 14.9589 10.1227 15.0143 10.1914 14.9951L12.6138 14.2539C13.2754 14.0515 13.9837 14.0613 14.6394 14.2817C15.2951 14.5022 15.8654 14.9223 16.2704 15.4832L17.8142 17.6236C18.2837 18.2745 18.501 19.0736 18.4259 19.8727C18.3508 20.6717 17.9883 21.4163 17.4057 21.9683L16.3379 22.9806C15.7711 23.5173 15.0751 23.8981 14.3175 24.0858C13.5599 24.2736 12.7666 24.2619 12.0149 24.052C8.69578 23.1253 5.72017 20.3244 3.0543 15.7073C0.384808 11.0842 -0.551622 7.10229 0.311292 3.76031C0.505538 3.00867 0.890126 2.31975 1.42799 1.75994C1.96585 1.20012 2.63884 0.788297 3.38211 0.564152ZM3.90395 2.29601C3.45812 2.43033 3.05439 2.67719 2.73164 3.01281C2.4089 3.34844 2.17801 3.76151 2.06122 4.21225C1.3357 7.02275 2.16607 10.5527 4.61984 14.8034C7.06998 19.0481 9.70813 21.5308 12.5018 22.3118C12.9527 22.4373 13.4284 22.4441 13.8827 22.3313C14.3369 22.2185 14.7543 21.9901 15.0941 21.6682L16.1631 20.6558C16.428 20.4049 16.5929 20.0663 16.627 19.703C16.6611 19.3397 16.5623 18.9764 16.3487 18.6805L14.8061 16.5413C14.622 16.2861 14.3626 16.0949 14.0643 15.9946C13.766 15.8943 13.4438 15.8899 13.1429 15.9821L10.7145 16.7257C9.3044 17.1451 8.02449 16.011 6.65057 13.6308C5.72499 12.0279 5.29353 10.7865 5.4008 9.82119C5.45744 9.31983 5.69004 8.85704 6.05883 8.51236L7.85938 6.83353C8.08959 6.61903 8.24687 6.33782 8.30912 6.02938C8.37137 5.72093 8.33547 5.40074 8.20647 5.11373L7.11939 2.69613C6.96937 2.36278 6.70326 2.09536 6.37066 1.94369C6.03806 1.79203 5.66166 1.76647 5.31161 1.87178L3.90395 2.29601Z"
                          fill="black"
                        />
                      </svg>
                    </span>
                    +62 333 4242 555
                  </li>
                  <li className="flex  2xl:text-base text-sm gap-1 text-[#92929D]">
                    <span>
                      <svg
                        width="20"
                        height="20"
                        viewBox="0 0 24 17"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fill-rule="evenodd"
                          clip-rule="evenodd"
                          d="M0 0.829409L0.829409 0H22.3941L23.2235 0.829409V15.7588L22.3941 16.5882H0.829409L0 15.7588V0.829409ZM1.65882 2.54629V14.9294H21.5646V2.54795L12.126 9.78703H11.1141L1.65882 2.54629ZM19.9556 1.65882H3.26787L11.6117 8.07679L19.9556 1.65882Z"
                          fill="black"
                        />
                      </svg>
                    </span>
                    abc@xyz.com
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="">
            <div>
              <div>
                <h1 className="font-Mont font-semibold text-lg text-[#FFC10E]">
                  Payment Details
                </h1>
              </div>
              <div>
                <div className="flex 2xl:gap-3 pt-4">
                  <div className="xl:w-1/3 w-2/5 2xl:w-[35%]">
                    <h1 className="text-xs 2xl:text-base text-black font-semibold font-Mont ">
                      Invoice No. :
                    </h1>
                  </div>
                  <div className="w-1/2">
                    <p className="text-xs 2xl:text-base font-Mont font-medium text-[#92929D]">
                      123456
                    </p>
                  </div>
                </div>
                <div className="flex  2xl:gap-3 py-3">
                  <div className="xl:w-1/3 w-2/5 2xl:w-[35%]">
                    <h1 className="text-xs 2xl:text-base text-black font-semibold font-Mont ">
                      Pay Amount :
                    </h1>
                  </div>
                  <div className="w-1/2">
                    <p className="text-xs 2xl:text-base font-Mont font-medium text-[#92929D]">
                      USD 15
                    </p>
                  </div>
                </div>
                <div className="flex  2xl:gap-3">
                  <div className="xl:w-1/3 w-2/5 2xl:w-[35%]">
                    <h1 className="text-xs 2xl:text-base text-black font-semibold font-Mont ">
                      Balance :
                    </h1>
                  </div>
                  <div className="w-1/2">
                    <p className="text-xs 2xl:text-base font-Mont font-medium text-[#92929D]">
                      USD 15 to be paid until 04-02-23 01:00
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="py-5">
          {/* Steps ------------------------------------------------- */}
          <div>
            <Steps />
          </div>
          <div className="flex gap-4 justify-center mt-5 pb-8">
            <div className="w-1/5">
              <BlackButton label={"Invoice Detailed"} bgColor={"yellow"}  Onclick={()=>{setInvoice(!invoice)}}/>
            </div>
            <div className="w-1/5">
              <BlackButton
                label={"Completed Booking"}
                bgColor={"green"}
                textColor={"green"}
              />
            </div>
            <div className="w-1/5">
              <BlackButton label={"Send reminder Mail"} />
            </div>
          </div>
          <div></div>
        </div>
      </div>
      {invoice && (
        <div>
          <InvoiceDetails />
        </div>
      )}
    </div>
  );
};

export default TableDropdown;
