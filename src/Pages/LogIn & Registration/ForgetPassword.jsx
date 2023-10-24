import React, { useState } from "react";
import logo from "../../assets/Logo-16.png";

import FormInput from "./FormInput";

import axios from "axios";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Link } from "react-router-dom";

const ForgetPassword = () => {
  const [email, setEmail] = useState("");
  const [disable,setDisable]= useState(false)

  const handleSubmit = async () => {
   
    try {
      let response = await axios.post("https://backend-two-blush-62.vercel.app/resetlink", {
        email,
      });
     
      if(response.data){
 // Display a success message when the email is sent successfully
 toast.success("Email sent successfully", {
  autoClose: 5000, // Set the duration in milliseconds
});
        setEmail("")
        setDisable(true)
      }
      else if(response.status ===500){
        toast.error('Error sending Email',  {
          autoClose: 5000, // Set the duration in milliseconds
      }
      )}

    }catch (error) {
     // Display an error message if there was any problem while sending the mail
      if (error.response && error.response.data && error.response.data.message) {
        // Set the error message received from the backend
        toast.error(error.response.data.message);
      } else {
        toast.error("An error occurred. Please try again later.");
      }

      
    }


    
  };
  return (
    <>
      <div className="bg-color-primary-yel flex justify-center items-center h-screen ">
      <ToastContainer />
        <div className="xl:w-2/5   2xl:w-1/3 w-full px-2">
          <div className="flex justify-center mb-8">
           <Link to={'/'}>
           <img src={logo} />
           </Link>
          </div>
          <div>
            <h1 className="font-Mont font-bold md:text-[56px] text-4xl mt-4 md:mt-0 text-center">
              Forgot Password
            </h1>
          </div>
          <div className="lg:w-1/2 mx-auto md:w-full xl:w-full ">
            <div className="bg-white md:p-8 p-4 rounded-2xl mt-6 ]">
              <div>
                <FormInput
                type={'email'}
                  placeholder={"Email ID"}
                  onChange={(e) => {
                    setEmail(e.target.value);
                  
                  }}
                />
              </div>
              <div className="mt-4">
               
                  <button
                    onClick={()=>{handleSubmit()}}
                    disabled={disable}
                    className={`bg-black w-full py-4 text-white rounded-lg  font-Mont font-bold text-xs ${disable ? 'opacity-50 cursor-not-allowed' : ''}`}
                  >
                    Forgot Password
                  </button>
               
              </div>
              <div className="mt-2 text-end" >
                <Link to={'/Login'} className="font-Mont font-semibold text-gray-500">Back to Login</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ForgetPassword;
