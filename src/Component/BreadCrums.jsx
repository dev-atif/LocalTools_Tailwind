import React from 'react'

const BreadCrums = ({Bread,Crums}) => {
  return (
    <div>
        <div>
            <h1 className='font-Robot text-sm font-normal'>
                Home <span>{Crums}</span> /  <span className='text-color-primary-gr'>{Bread}</span>
            </h1>
        </div>
    </div>
  )
}

export default BreadCrums