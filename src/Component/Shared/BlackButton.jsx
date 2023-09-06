import React, { Children } from 'react'

const BlackButton = ({bgColor,textColor ,BorderColor,Padding,label,Onclick ,to}) => {
  return (
    <div>
        <div >
         <button to={to} onClick={Onclick} className={`${bgColor ==='yellow' ? 'bg-color-primary-yel hover:bg-black' : bgColor==='transparent' ? 'bg-none hover:bg-black':bgColor==='green' ? 'bg-[#D0E7DC]': 'bg-black hover:bg-color-primary-yel' }
          ${textColor==='black' ? 'text-black hover:text-white':textColor==='green' ? 'text-[#369768] ':'text-white'}
          ${BorderColor === 'black' ? 'border border-black':''} 
          ${Padding === 'None' ? 'py-2' : 'py-3'} w-full font-semibold text-sm text-center rounded-lg`}>
            {label}
         </button>
        
        </div>
    </div>
  )
}

export default BlackButton