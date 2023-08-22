import React from 'react'
import Search from '../SellerAccount/MessagTab/Search'
import Order_Tab from '../SellerAccount/Order_Tab'

const OrderTab = () => {
  return (
    <div>
        <div>
            <div className='pt-5'>
            <h1 className='font-Mont text-black font-semibold 2xl:text-2xl text-xl'>
            My Orders
          </h1>
          
            </div>
            <div className='md:w-1/3 py-3 w-full'>
            <Search/>
            </div>
            <div>
                <Order_Tab/>
            </div>
        </div>
    </div>
  )
}

export default OrderTab