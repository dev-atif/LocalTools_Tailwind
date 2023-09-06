import React from 'react'
import noNotificatio from '../../assets/no_notification.png'
const NoNotification = () => {
  return (
    <>
     <div className='bg-white py-12 md:my-8 my-4 rounded-lg'>
            <div className='flex flex-col items-center gap-8'>
               <img src={noNotificatio} className='md:w-[412px] md:h-[400px] w-[300px] h-[300px]'/> 
               <div className='flex flex-col items-center gap-6'>
                <h1 className='font-Robot font-bold lg:text-6xl md:text-5xl text-2xl text-color-primary-yel'>
                There is no new Notification for you.
                </h1>
                
               </div>
              
            </div>
   </div>
    </>
  )
}

export default NoNotification