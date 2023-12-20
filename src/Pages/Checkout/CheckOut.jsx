import React from 'react'
import Navbar from '../../Component/NavBar/Navbar'
import BlackButton from '../../Component/Shared/BlackButton'
import BreadCrums from '../../Component/BreadCrums'
import CheckoutForm from './CheckoutForm'
import CartSummary from './CartSummary'
import Footer from '../../Component/Shared/Footer'

const CheckOut = () => {
  return (
   <>
   <div>
    <div>
        <Navbar/>
    </div>
    <div className='px-2 xl:px-9 my-3 '>
        <div className='flex items-center md:gap-6 gap-3 '>
            <div className='md:w-1/4 w-1/2'>
                <BlackButton label={'My Account'}/>
            </div>
           {/*  <div>
                <BreadCrums Bread={'Manage Profile'}/>
            </div> */}
        </div>
        {/* --------------------------------------------------- */}
        <div className='my-3'>
            <div className=' lg:grid grid-cols-12 gap-8'>
                <div className=' col-span-7'>
                        <CheckoutForm/>
                </div>
                <div className=' col-span-5'>
                        <CartSummary/>
                </div>
                
            </div>
        </div>
    </div>
    <div>
        <Footer/>
    </div>
   </div>
   </>
  )
}

export default CheckOut