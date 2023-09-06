import React from 'react'
import Navbar from '../../Component/NavBar/Navbar'
import BusinessSidebar from './BusinessSidebar'
import BusinessCards from './BusinessCards'
import Footer from '../../Component/Shared/Footer'

const BusinessProfile = () => {
  return (
    <div>
      <div>
        <div>
          <Navbar/>
        </div>
       <div className='px-5 2xl:px-10 pb-28'>
       <div className='mt-4'>
          <h1 className='font-bold text-2xl '>
          Business Profile <span className='text-[#959EAD]'>/ Lenora Fowler</span>
          </h1>
        </div>
        <div className='mt-3 lg:flex gap-3'>
          <div className='lg:w-[43%] 2xl:w-[35%]'>
            <BusinessSidebar/>
          </div>
          <div className='w-full lg:mt-0 mt-3'>
            <BusinessCards/>
          </div>
        </div>
       </div>
       <div>
        <Footer/>
       </div>
      </div>
    </div>
  )
}

export default BusinessProfile