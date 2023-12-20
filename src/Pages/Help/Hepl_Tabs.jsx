import React, { useState } from 'react'


const Hepl_Tabs = ({Tabs}) => {
    const [activeTab, setActiveTab] = useState(0);

    const handleTabClick = (index) => {
      setActiveTab(index);
    };
  return (
   <>
   <div className='py-12'>
  <div className='px-4 flex items-center gap-4  '>
  <div className=' w-1/5'>
        <h1 className='text-black font-Robot font-bold md:text-4xl text-lg'>
        Question
        </h1>
      </div>
      <div className='w-full'>
        <h3 className='font-Robot font-medium md:text-start text-center text-black  md:text-base text-sm'>Help / <span className='text-[#92929D]'> Pay Safely /</span></h3>
      </div>
  </div>
   <div className=" rounded-lg p-4 lg:flex gap-4 items-start ">
      <div className="flex lg:flex-col lg:w-[20%] w-full gap-3">
        {Tabs.map((tab, index) => (
         <>
         <div className='w-[33%] lg:w-full'>
         <button
            key={index}
            onClick={() => handleTabClick(index)}
            className={`${
              index === activeTab
                ? 'bg-[#FFC10E] text-white'
                : 'bg-[#F6F7FB] text-gray-800'
            } px-4 py-2 rounded-lg mr-4 focus:outline-none w-full text-start font-Robot font-bold md:text-base text-xs`}
          >
            {tab.label}
          </button>
         </div>
         </>
        ))}
      </div>
      <div className=" py-2 w-full lg:mt-0 mt-4">{Tabs[activeTab].content}</div>
    </div>
   </div>
   </>
  )
}

export default Hepl_Tabs
