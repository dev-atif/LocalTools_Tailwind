import React from 'react'

const FormInput = ( {type,placeholder,pr}) => {
  return (
   <>
   <div className=' '>
    <input type={type} placeholder={placeholder} className={`border py-2 px-2 w-full rounded-lg outline-none focus:border-[#00005B] ${pr}`}/>
   </div>
   </>
  )
}

export default FormInput