import React from 'react'
import logo from "../../assets/Logo-16.png";
import FormInput from './FormInput';
const ResetPassword = () => {
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
         <div className='lg:w-1/2 mx-auto md:w-full xl:w-full '>
         <div className="bg-white md:p-8 p-4 rounded-2xl mt-6 ">
            <div>
            <FormInput placeholder={'Password'}/>
            </div>
            <div className='my-4'>
            <FormInput placeholder={'Password'}/>
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
  )
}

export default ResetPassword