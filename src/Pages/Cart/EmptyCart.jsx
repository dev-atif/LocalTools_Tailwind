import React from 'react'
import emptycart from '../../assets/emptycart.png'
const EmptyCart = () => {
  return (
   <>
   <div className='bg-white py-12 md:my-8 my-4 rounded-lg'>
            <div className='flex flex-col items-center gap-8'>
               <img src={emptycart} className='md:w-[422px] md:h-[411px] w-[300px] h-[300px]'/> 
               <div className='flex flex-col items-center gap-6'>
                <h1 className='font-Robot font-bold lg:text-6xl md:text-5xl text-2xl text-color-primary-yel'>
                Your Cart is currently empty
                </h1>
                <div className=''>
                <button className='bg-black text-white md:text-2xl text-base py-1 px-9 rounded-lg font-Mont font-semibold text-center '>
                Book Your Tool
                </button>
               </div>
               </div>
              
            </div>
   </div>
   </>
  )
}

export default EmptyCart