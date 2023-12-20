import React from "react";
import Dashboard from "./../../Dashboard";
import BreadCrums from "../../Component/BreadCrums";
import SharedSelect from "../../Component/Shared/SharedSelect";
import BlackButton from "../../Component/Shared/BlackButton";

const Notification = () => {
  return (
    <Dashboard>
      <div className="px-2">
        <div>
          <BreadCrums Crums={"/ Manage Profile"} Bread={"Notification"} />
        </div>
        <div>
          <div className="pt-7 pb-6">
            <h1 className="font-Mont text-black font-semibold 2xl:text-2xl text-xl">
              Notification
            </h1>
          </div>
          <div className="bg-white pt-4 pb-8 px-6 rounded-lg">
            <div>
              <h1 className="text-lg 2xl:text-xl font-Mont font-semibold">
                Email
              </h1>
              <h2 className="text-sm text-[#696974] pt-2 pb-3">
                (sending to Abc******123@gmail.com)
              </h2>
              <p className="text-sm text-[#696974] pb-1">
                Send an email with unread activity for:
              </p>
            </div>
            <div className="md:flex items-center gap-4">
              <div className="lg:w-2/5 w-full">
                <SharedSelect bordercolor={"blue"} />
              </div>
              <div className="lg:w-2/5 w-full">
                <SharedSelect bordercolor={"blue"} />
              </div>
            </div>
           
              <div class="inline-flex items-center gap-1 mt-1">
                <label
                  class="relative flex cursor-pointer items-center rounded-full "
                  for="checkbox-3"
                  data-ripple-dark="true"
                >
                  <input
                    type="checkbox"
                    class="before:content[''] peer relative h-4 w-4 cursor-pointer appearance-none rounded-md border border-blue-gray-200 transition-all before:absolute before:top-2/4 before:left-2/4 before:block before:h-12 before:w-12 before:-translate-y-2/4 before:-translate-x-2/4 before:rounded-full  before:opacity-0 before:transition-opacity checked:border-[#3DD598] checked:bg-[#3DD598] checked:before:bg-[#3DD598] hover:before:opacity-10 bg-slate-200"
                    id="checkbox-3"
                    defaultChecked
                  />
                  <div class="pointer-events-none absolute top-2/4 left-2/4 -translate-y-2/4 -translate-x-2/4 text-white opacity-0 transition-opacity peer-checked:opacity-100">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      class="h-3.5 w-3.5"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      stroke="currentColor"
                      stroke-width="1"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clip-rule="evenodd"
                      ></path>
                    </svg>
                  </div>
                </label>
                <label className="font-Robot font-normal text-sm text-[#696974]">
                Only send when offline or idle
                </label>
              </div>
           <div className="md:mt-9 mt-5">
            <div className="md:w-[40%]  mx-auto">
              <BlackButton label={'Save'}/>
            </div>
           </div>
          </div>
        </div>
      </div>
    </Dashboard>
  );
};

export default Notification;
