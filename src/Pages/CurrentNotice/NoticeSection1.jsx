import React from 'react'
import notice from '../../assets/notice.png'
const NoticeSection1 = () => {
  return (
   <>
    <div  className="py-12">
        <div>
          <div className="flex  lg:flex-row flex-col-reverse items-center justify-between xl:gap-0 gap-16 ">
            <div className="lg:w-[50%] text-center md:text-start ">
              <div>
                <div>
                  <h1 className="font-Robot font-bold  text-black text-4xl">
                  Current Notice
                  </h1>
                </div>
                <div className=" font-Mont font-medium text-base mt-8">
                  <p>
                    In our data protection declaration we have put together all
                    the essential information about how we handle your personal
                    data and your rights in this regard.
                  </p>
                 
                </div>
                <div className='w-2/3 mt-8 mx-auto md:mx-0'>
                    <button className='bg-[#FFC10E] text-white font-Mont font-medium text-xl py-2 w-full rounded-lg'>
                    Continue Reading
                    </button>
                </div>
              </div>
            </div>
            <div className="lg:w-[50%] xl:w-[50%] flex justify-center">
              <img src={notice}  className='w-[450px] h-[450px]'/>
            </div>
          </div>
        </div>
      </div>
   </>
  )
}

export default NoticeSection1