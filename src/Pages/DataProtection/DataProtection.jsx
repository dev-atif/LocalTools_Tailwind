import React from 'react'
import Navbar from '../../Component/NavBar/Navbar'
import Protection_Section_1 from './Protection_Section_1'
import Accordian from '../SaftyTip/Accordian'
import { DataProtection_Accordian } from './Protection_Data_Accordian_Array'
import Footer from '../../Component/Shared/Footer'
import { Link } from 'react-router-dom'

const DataProtection = () => {
  return (
   <>
   <div>
    <div>
        <Navbar/>
    </div>
    <div>
    <section>
        <div className="flex items-center justify-center flex-col bg-[#FFC10E] py-10 ">
          <h1 className="font-Robot font-bold text-white lg:text-[72px] text-4xl ">Data Protection</h1>
          <p className="font-Robot text-sm font-normal text-black md:mt-12 mt-6">
            <Link to={'/'}>Home</Link> / <span className={`text-white`}>Data Protection</span>
          </p>
        </div>
        </section>
    </div>
    <div className='bg-white  px-3 xl:px-9 pb-12'>

        <section>
            <Protection_Section_1/>
        </section>
        <section>
            <Accordian Accordian={DataProtection_Accordian}/>
        </section>
    </div>
    <Footer/>
   </div>
   </>
  )
}

export default DataProtection