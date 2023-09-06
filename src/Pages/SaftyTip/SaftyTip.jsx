import React from 'react'
import Navbar from '../../Component/NavBar/Navbar'
import StaticHeading from '../../Component/Shared/StaticHeading'
import Section1 from './Section1'
import Section2 from './Section2'
import Accordian from './Accordian'
import { tips_Accordian } from './TipsAccordian_Array'
import Footer from '../../Component/Shared/Footer'

const SaftyTip = () => {
  return (
  <>
  <div>
    <div>
        <Navbar/>
    </div>
    <div  className='pb-12 bg-white'>
        <section>
        <div className="flex items-center justify-center flex-col bg-[#FFC10E] py-10 ">
          <h1 className="font-Robot font-bold text-white lg:text-[72px] text-4xl ">Tips for your safety</h1>
          <p className="font-Robot text-sm font-normal text-black md:mt-12 mt-6">
            Home / <span className={`text-white`}>Tips for your safety</span>
          </p>
        </div>
        </section>
        <section className='px-3 xl:px-9'>
            <Section1/>
        </section>
        <section className='px-3 xl:px-9 '>
            <Section2/>
        </section>
        <section className=' px-3 xl:px-9 mt-10'>
          <Accordian Accordian={tips_Accordian}/>
        </section>
    </div>
    <div>
      <Footer/>
    </div>
  </div>
  </>
  )
}

export default SaftyTip