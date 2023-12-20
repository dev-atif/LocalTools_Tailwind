import React from 'react'
import error from '../../assets/500.png'
import { Link } from 'react-router-dom'
const Error_505 = () => {
  return (
   <>
     <div className='bg-[#FFC10E] h-screen flex items-center justify-center'>
    <div className='flex flex-col items-center md:gap-8 gap-4'>
        <img src={error} className='w-[70%]' />
        <div >
            <h1 className='font-Robot font-bold text-white md:text-[64px] text-4xl'>Go to Home Page</h1>
        </div>
        <div>
         <Link to={'/'}>
         <button className='bg-black text-white font-Mont font-semibold md:text-2xl text-lg py-1 md:px-12 px-8 rounded-lg'>
            Home Page
            </button>
         </Link>
        </div>
    </div>

   </div>
   </>
  )
}

export default Error_505