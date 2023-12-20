import React, { useEffect, useState } from "react";
import logo from "../../assets/Logo-16.png";
import FormInput from "./FormInput";
import {Link, useNavigate, useParams, useSearchParams } from "react-router-dom";
import axios from "axios";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const ResetPassword = () => {
  let [searchParams, setSearchParams] = useSearchParams();
  const token = searchParams.get("token");
  console.warn("token is ", token);
  const { id } = useParams();
  console.warn("id is ", id);

  const [pasword, setPasword] = useState("");
  const [confirm_pasword, setConfirm_pasword] = useState("");

  const history = useNavigate();
 
  //User Validation Api
  const userValid = async () => {
    const response = await axios.get(
      `https://backend-two-blush-62.vercel.app/forgotpasword/${id}/${token}`
    );

    if (response.data !== 201) {
      history("*");
    }
  };
  useEffect(() => {
    userValid();
  }, []);
  //Update password Function and call API
  const updatePasword = async()=>{
    try {
      if(pasword === confirm_pasword){
        const response = await axios.post(
          `https://backend-two-blush-62.vercel.app/${id}/${token}`,{
            pasword:pasword,
            confirm_pasword:confirm_pasword,
          }
        );
      //it moves to login page and replace true prevent it to moves back at this page 
      history('/Login', { replace: true });
        localStorage.setItem("updateSuccess", "true");
      }
      else{
        toast.error("password not match");
      }
    } catch (error) {
      toast.error(" Link is expired");
    }
    
  }

  return (
    <>
      <div className="bg-color-primary-yel flex justify-center items-center h-screen ">
      <ToastContainer />
        <div className="xl:w-2/5 2xl:w-1/3 w-full px-2">
          <div className="flex justify-center mb-8">
           <Link to={'/'}><img src={logo} /></Link> 
          </div>
          <div>
            <h1 className="font-Mont font-bold md:text-[56px] text-4xl mt-4 md:mt-0 text-center">
              Reset Password
            </h1>
          </div>
          <div className="lg:w-1/2 mx-auto md:w-full xl:w-full ">
            <div className="bg-white md:p-8 p-4 rounded-2xl mt-6 ">
              <div>
                <FormInput type={"password"}
                  onChange={(e) => {
                    setPasword(e.target.value);
                  }}
                  placeholder={"Password"}
                />
              </div>
              <div className="my-4">
                <FormInput type={"password"}
                  onChange={(e) => {
                    setConfirm_pasword(e.target.value);
                  }}
                  placeholder={"Password"}
                />
              </div>
              <div className="">
                <button onClick={()=>{updatePasword()}} className="bg-black w-full py-4 text-white rounded-lg  font-Mont font-bold text-xs">
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
