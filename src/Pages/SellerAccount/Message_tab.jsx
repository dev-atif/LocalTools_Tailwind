import React from 'react'
import Search from './MessagTab/Search'
import UserSection from './MessagTab/UserSection'
import MessagesSection from './MessagTab/MessagesSection'

const Message_tab = () => {
  return (
    <div className='pt-5'>
      <div>
        <div>
          <h1 className='font-Mont text-black font-semibold 2xl:text-2xl text-xl'>
          Messages
          </h1>
        </div>
        <div className='md:inline-block py-4'>
          <Search/>
        </div>
        <div className='md:grid grid-cols-12   gap-8 pb-5' >
            <div className='col-span-5 2xl:col-span-4 bg-white rounded-lg'>
              <UserSection/>
            </div>
            <div className='col-span-7 2xl:col-span-8 bg-white'>
                <MessagesSection/>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Message_tab