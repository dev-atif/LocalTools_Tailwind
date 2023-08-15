import React from "react";
import Dashboard from "../Dashboard";
import BreadCrums from "../Component/BreadCrums";

const Changepassword = () => {
  return (
    <Dashboard>
      <div>
        <div className="lg:pl-3  lg:mt-0">
          <div>
            <BreadCrums Crums="/ Manage Profile" Bread="Change Password" />
          </div>
          <div className="bg-white py-20 mt-6 rounded-lg">
            <div className="flex justify-center">
              <div className="lg:w-[45%] 2xl:w-[35%] w-full ">
                <div className=" flex flex-col gap-3 md:px-10 px-3">
                  <div >
                    <label className="text-sm font-Mont text-color-primary-gr">
                      Old Password
                    </label>
                    <input
                      type="text"
                      className="bg-transparent
                                w-full border-[#00005B] border rounded-lg 
                                mt-1 font-Mont text-sm text-black focus:outline-none p-2"
                      placeholder="Enter Old Password"
                    />
                  </div>
                  <div>
                    <label className="text-sm font-Mont text-color-primary-gr">
                      New Password
                    </label>
                    <input
                      type="text"
                      className="bg-transparent
                                w-full border-[#00005B] border rounded-lg 
                                mt-1 font-Mont text-sm text-black focus:outline-none p-2"
                      placeholder="Enter New Password"
                    />
                  </div>
                  <div>
                    <label className="text-sm font-Mont text-color-primary-gr">
                      Confirm New Password
                    </label>
                    <input
                      type="text"
                      className="bg-transparent
                                w-full border-[#00005B] border rounded-lg 
                                mt-1 font-Mont text-sm text-black focus:outline-none p-2"
                      placeholder="Confirm New Password"
                    />
                  </div>
                </div>
                <div className=" flex justify-between md:justify-evenly lg:justify-between mt-5  2xl:mt-5 px-4 lg:px-0">
                  <button className="text-sm font-Mont bg-black font-semibold text-white py-2 rounded-lg xl:w-[170px] w-[150px] hover:bg-color-primary-yel hover:text-white transition-all">
                    Save Changes
                  </button>
                  <button className="text-sm py-2 font-Mont bg-transparent border border-black font-semibold text-black w-[150px] xl:w-[170px] rounded-lg  hover:bg-black hover:text-white transition-all">
                    Cancel
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Dashboard>
  );
};

export default Changepassword;
