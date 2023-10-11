import React, { useEffect, useState } from "react";
import logo from "../../assets/Logo-16.png";
import FormInput from "./FormInput";
import { useParams, useSearchParams } from "react-router-dom";
import { axios } from 'axios';
const ResetPassword = () => {
  let [searchParams, setSearchParams] = useSearchParams();
  const token = searchParams.get("token");
  console.warn("token is ", token);
  const { id } = useParams();
  console.warn("id is ", id);

  const [pasword, setPasword] = useState("");
  const [confirm_pasword, setConfirm_pasword] = useState("");

  //User Validation Api
  const userValid = async() => {
    try {
      const response = await axios.get(`/forgotpasword/${id}/${token}`);
    
      // Handle the Axios response here
      console.log(response.data); // Access response data
      console.log(response.status); // Access response status code
      console.log(response.statusText); // Access response status text
      console.log(response.headers); // Access response headers
      // You can also use interceptors and error handling as needed with Axios.
    } catch (error) {
      // Handle errors if the request fails
      console.error('Axios request failed', error);
    }
  };
  useEffect(()=>{
    userValid();
  },[])

  return (
    <>
      <div className="bg-color-primary-yel flex justify-center items-center h-screen ">
        <div className="xl:w-2/5 2xl:w-1/3 w-full px-2">
          <div className="flex justify-center mb-8">
            <img src={logo} />
          </div>
          <div>
            <h1 className="font-Mont font-bold md:text-[56px] text-4xl mt-4 md:mt-0 text-center">
              Reset Password
            </h1>
          </div>
          <div className="lg:w-1/2 mx-auto md:w-full xl:w-full ">
            <div className="bg-white md:p-8 p-4 rounded-2xl mt-6 ">
              <div>
                <FormInput
                  onChange={(e) => {
                    setPasword(e.target.value);
                  }}
                  placeholder={"Password"}
                />
              </div>
              <div className="my-4">
                <FormInput
                  onChange={(e) => {
                    setConfirm_pasword(e.target.value);
                  }}
                  placeholder={"Password"}
                />
              </div>
              <div className="">
                <button className="bg-black w-full py-4 text-white rounded-lg  font-Mont font-bold text-xs">
                  Reset Password
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ResetPassword;
