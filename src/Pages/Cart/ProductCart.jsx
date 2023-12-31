import React from 'react'
import EmptyCart from './EmptyCart'
import BlackButton from '../../Component/Shared/BlackButton'
import Navbar from './../../Component/NavBar/Navbar';
import CartProducts from './CartProducts';
import PriceDetails from './PriceDetails';
import { Link } from 'react-router-dom';
import Footer from '../../Component/Shared/Footer';

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
                   <Link to={'/'}> Home</Link> / <span className='text-color-primary-gr'>Cart</span>
                    </h1>
                </div>
            </div>
            <div className="flex lg:flex-row flex-col lg:gap-3 justify-between ">
                <div className=" lg:w-[70%] w-full md:mt-0 mt-3 ">
                 <CartProducts/>
                </div>
                <div className={`lg:w-[30%]  w-full h-full  `}>
                   <PriceDetails/>
                </div>
              </div>
            {/* -------------------Empty cart */}
           {/*  <div>

            <EmptyCart/>
        </div> */}
        </div>
        <div>
            <Footer/>
        </div>
    </div>
    </>
  )
}

export default ProductCart