import React from 'react'
import EmptyCart from './EmptyCart'
import BlackButton from '../../Component/Shared/BlackButton'
import Navbar from './../../Component/NavBar/Navbar';
import CartProducts from './CartProducts';
import PriceDetails from './PriceDetails';

const ProductCart = () => {
  return (
    <>
    <div>
        <div>
            <Navbar/>
        </div>
        <div className='px-2 xl:px-9'>
            <div className='flex items-center gap-8 md:mt-8 mt-4'>
                <div className='md:w-1/4 w-3/4'> 
                    <BlackButton label={'My Cart'}/>
                </div>
                <div className='w-full'>
                    <h1 className='text-black text-sm font-Robot font-normal'>
                    Home / <span className='text-color-primary-gr'>Cart</span>
                    </h1>
                </div>
            </div>
            <div className="flex lg:flex-row flex-col lg:gap-3 justify-between ">
                <div className=" lg:w-3/4 w-full md:mt-0 mt-3 ">
                 <CartProducts/>
                </div>
                <div className={`lg:w-1/4  w-full h-full  `}>
                   <PriceDetails/>
                </div>
              </div>
            {/* -------------------Empty cart */}
           {/*  <div>

            <EmptyCart/>
        </div> */}
        </div>
        
    </div>
    </>
  )
}

export default ProductCart