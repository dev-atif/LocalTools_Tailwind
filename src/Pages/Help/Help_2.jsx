import React from 'react'
import Navbar from '../../Component/NavBar/Navbar'
import StaticHeading from '../../Component/Shared/StaticHeading'
import StaticSection from './StaticSection'
import Help_2_section_3 from './Help_2_section_3'
import Hepl_Tabs from './Hepl_Tabs'
import { Help_tabs } from './Help_TabsArray'
import HelpCategory from './HelpCategory'
import Footer from '../../Component/Shared/Footer'

const Help_2 = () => {
  return (
   <>
   <div>
    <div>
        <Navbar/>
    </div>
    <div>
        <div>
            <StaticHeading heading={'Help'} path={'About Us'} textcolor={'text-[#92929D]'}/>
        </div>
        <div className="px-3 xl:px-9 bg-white">
            <StaticSection/>
        </div>
        <div className="px-3 xl:px-9"> 
            <Help_2_section_3/>
        </div>
        <div className="px-3 xl:px-9 bg-white ">
            <Hepl_Tabs Tabs={Help_tabs}/>
        </div>
        <div className="px-3 xl:px-9  ">
           <HelpCategory/>
        </div>
    </div>
    <div>
        <Footer/>
    </div>
   </div>
   </>
  )
}

export default Help_2