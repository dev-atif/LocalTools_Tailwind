import React  from "react";

import signin from "../../assets/signin.png";

import { Link, useNavigate } from "react-router-dom";

import { BiLogoGoogle } from "react-icons/bi";
import { AiFillFacebook } from "react-icons/ai";
import logo from "../../assets/Logo-16.png";
import FormInput from "./FormInput";
const Signin = () => {
 
  return (
    <>
      <div className="bg-color-primary-yel  flex items-center  h-full justify-center pb-32">
        <div className="md:px-12 px-2  ">
          <div className="md:p-8 p-4">
            <img src={logo} />
          </div>
          <div className="lg:grid grid-cols-2 xl:gap-6 items-center">
            <div /* className="mt-10" */ className="flex items-center">
              <img src={signin} />
            </div>
            <div>
              <div>
                <h1 className="font-Mont font-bold text-[56px] text-center">
                  Sign In
                </h1>
              </div>
              <div>
                <p className="text-base font-Robot font-normal text-center pt-4 pb-14">
                  {" "}
                  Just sign in if you have an account in here. Enjoy our Website
                </p>
              </div>
              <div className="md:px-10 ">
                <div className="bg-white md:p-10  p-5 rounded-2xl">
                  <div>
                    <FormInput placeholder={"Enter e mail"} />
                  </div>
                  <div className="py-5">
                    <FormInput placeholder={"Enter Password "} />
                  </div>
                  <div className="flex items-center justify-between">
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
                        Remember Me
                      </label>
                    </div>
                    <div>
                      <p className="text-[#50B5FF] font-Robot font-medium text-sm">
                        <Link to="/ForgetPassword">Forgot Password</Link>
                      </p>
                    </div>
                  </div>
                  <div className="my-4">
                    <button
                     
                      className="bg-black text-white w-full py-3 rounded-lg font-Mont text-sm "
                    >
                      Login{" "}
                    </button>
                  </div>
                  <div className="mt-10">
                    <p className="text-[#0062FF] font-Robot text-sm font-medium text-center">
                      If you don’t have an account?{" "}
                      <span>
                        <Link to="/Registration">Register here</Link>
                      </span>
                    </p>
                  </div>
                  <div className="xl:flex gap-4 mt-8 pt-8 border-t relative">
                    <div className="xl:w-1/2">
                      <button className="bg-[#FC5A5A] flex items-center justify-center w-full gap-2 py-3 px-5 rounded-lg text-white text-xs font-semibold">
                        <span className="text-white text-xl">
                          <BiLogoGoogle />
                        </span>
                        Continue with Google
                      </button>
                    </div>
                    <div className="xl:w-1/2 mt-2 xl:mt-0">
                      <button className="bg-[#0062FF]  w-full flex items-center justify-center gap-2 py-3 px-5 rounded-lg text-white text-xs font-semibold">
                        <span className="text-white text-xl">
                          <AiFillFacebook />
                        </span>
                        Continue with Facebook
                      </button>
                    </div>
                    <div className="absolute bg-white px-4 py-2 rounded-lg -top-5 xl:left-[40%] lg:left-[30%] md:left-[38%] left-[25%]">
                      <p className="text-[#B5B5BE] font-normal font-Robot text-sm ">
                        Instant Signup
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Signin;
