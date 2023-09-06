import React from 'react'

const StaticHeading = ({heading,path,textcolor}) => {
  return (
    <>
     <div className="flex items-center justify-center flex-col bg-[#FFC10E] py-8 ">
          <h1 className="font-Robot font-bold text-white text-[72px]">{heading}</h1>
          <p className="font-Robot text-sm font-normal text-black">
            Home / <span className={`${textcolor}`}>{path}</span>
          </p>
        </div> 
    </>
  )
}

export default StaticHeading