import React, { Children } from 'react'

const BlackButton = ({bgColor,textColor ,BorderColor,Padding,label}) => {
  return (
    <div>
        <div >
         <button className={`${bgColor ==='yellow' ? 'bg-color-primary-yel hover:bg-black' : bgColor==='transparent' ? 'bg-none hover:bg-black': 'bg-black hover:bg-color-primary-yel' }
          ${textColor==='black' ? 'text-black hover:text-white':'text-white'}
          ${BorderColor === 'black' ? 'border border-black':''} 
          ${Padding === 'None' ? 'py-2' : 'py-3'} w-full font-semibold text-sm text-center rounded-lg`}>
            {label}
         </button>
        
        </div>
    </div>
  )
}

export default BlackButton