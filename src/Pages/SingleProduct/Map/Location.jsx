import React from 'react'
import GoogleMapApi from '../../Add Post/Shared/GoogleMapAPi'

const Location = () => {
  return (
   <>
   <div className='my-8'>
    <div>
        <h1 className='text-2xl text-black font-Robot font-medium'>Where you’ll be</h1>
    </div>
    <div className='my-4'>
        <GoogleMapApi/>
    </div>
    
   </div>
   </>
  )
}

export default Location