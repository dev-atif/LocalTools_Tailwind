import React from 'react'

const TextArea = ( ) => {
  return (
    <div>
        <label className={`font-Mont font-medium text-base 2xl:text-lg text-color-primary-gr  `}>
        Description*
        </label>
        <div className='border border-[#00005B] rounded-lg my-1'>
            <textarea className='w-full focus:outline-none h-40 rounded-lg p-2'/>
        </div>
    </div>
  )
}

export default TextArea