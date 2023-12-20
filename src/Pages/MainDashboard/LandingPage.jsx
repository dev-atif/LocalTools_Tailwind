import React, { useState } from 'react'
import Navbar from '../../Component/NavBar/Navbar'
import LandingSideBar from './LandingSideBar'
import LeftBar from './LeftBar'
import Footer from './../../Component/Shared/Footer';
import {AiOutlineMenu , AiOutlineClose } from 'react-icons/ai';
const MainDashboard = () => {
  const [isclick,setClick] =useState(false)
  return (
   <>
   <div>
    <div>
        <Navbar/>
    </div>
    <div onClick={()=>{setClick(!isclick)}} className='text-3xl flex justify-end px-4 -mb-4 mt-2 transition-all duration-1000 lg:hidden'>
    {isclick ? (
      < AiOutlineClose/>
     
    )
  :
  (
    <AiOutlineMenu/>
  )}
    </div>
    <div className="lg:px-2 xl:px-9  mt-6 relative">
        <div className="flex lg:gap-3 justify-between ">
           <div className={`lg:w-1/4 md:w-1/2 w-full h-full rounded-lg  lg:block lg:relative absolute bg-[#FFFFFF] z-10 lg:z-0 md:-top-12 lg:-top-0  transition-all duration-500 ${isclick ? 'translate-x-0':'-translate-x-[200%] lg:translate-x-0'}`} >
           <LandingSideBar/>
           </div>
           <div className=" lg:w-3/4 w-full " >
            <LeftBar/>
           </div>
        </div>
    </div>
    <Footer/>
   </div>
   </>
  )
}

export default MainDashboard