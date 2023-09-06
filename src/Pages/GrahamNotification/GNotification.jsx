import React from 'react'
import Navbar from '../../Component/NavBar/Navbar'
import NoNotification from './NoNotification'
import BlackButton from '../../Component/Shared/BlackButton'
import CartNotification from './CartNotification'



const GNotification = () => {
  return (
    <>
    <div>
        <div>
            <Navbar/>
        </div>
        {/* ----------------------------------------------------------------------- */}
        <div className="lg:px-2 xl:px-9 mt-2 px-2 ">
            <div>
            <div className='flex items-center gap-8 md:mt-4 mt-4'>
                <div className='md:w-1/4 w-3/4'> 
                    <BlackButton label={'Notification'}/>
                </div>
                <div className='w-full'>
                    <h1 className='text-black text-sm font-Robot font-normal'>
                    Home / <span className='text-color-primary-gr'>Notification</span>
                    </h1>
                </div>
            </div>

            <div >
                <CartNotification/>
            </div>

            </div>
           {/* <div>
           <NoNotification/>
           </div> */}
        </div>
        {/* -------------------------------------------------------------------------- */}
        <div>
           
            </div>
    </div>
    </>
  )
}

export default GNotification