import React from "react";
import logo from "../assets/Logo.png";
import model from '../assets/modelAuth.jpg'
import { useNavigate } from "react-router";
const Not_auth_Model = ({setCheck}) => {
    const navigate = useNavigate()
  return (
    <>
      <div>
        <div className="fixed inset-0 flex items-center justify-center z-50 ">
          <div className="fixed inset-0 bg-black opacity-50"></div>
          <div className="bg-color-primary-yel pt-2 px-2 pb-2 rounded-lg z-50 relative md:w-1/2 w-[80%]">
            <div className="flex justify-between items-center">
              <img src={logo} className="w-[10%]" />

              <div >
                <button  onClick={()=>{
                    setCheck(false)
                 }}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="40"
                    height="40"
                    viewBox="0 0 100 100"
                  >
                    <circle cx="50" cy="50" r="40" fill="white" />
                    <line
                      x1="30"
                      y1="30"
                      x2="70"
                      y2="70"
                      stroke="black"
                      stroke-width="6"
                    />
                    <line
                      x1="30"
                      y1="70"
                      x2="70"
                      y2="30"
                      stroke="black"
                      stroke-width="6"
                    />
                  </svg>
                </button>
              </div>
            </div>
            <div className="bg-white rounded-lg lg:mt-2 ">
              <div className="p-8  lg:flex items-center">
                <div className="w-[90%]">
                    <img src={model} />
                </div>
                <div>
                    <h1 className="font-bold md:text-5xl text-2xl font-Mont text-color-primary-yel">
                        Opppss !
                    </h1>
                    <p className=" text-base font-semibold mt-5 font-Robot">You Are Not Login  if You want to Add Post You need to be Login</p>
                 <button onClick={()=>{setCheck(false)
                navigate('/login')}} className="bg-color-primary-yel px-8 py-1 rounded-lg font-bold text-white font-Mont mt-4"> Log In Now</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Not_auth_Model;
