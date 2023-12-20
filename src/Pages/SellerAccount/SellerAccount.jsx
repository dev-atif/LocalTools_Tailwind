import React from 'react'
import Dashboard from '../../Dashboard'
import BreadCrums from '../../Component/BreadCrums'
import  TabsMenuArray  from './TabsMenuArray';

const SellerAccount = () => {
  return (
    <Dashboard>
        <div className='lg:pl-3'>
            <div>
                <div>
                    <BreadCrums Crums='/ Manage Profile' Bread='Seller Account'/>
                </div>
                <div>
                    <TabsMenuArray/>
                </div>
            </div>
        </div>
    </Dashboard>
  )
}

export default SellerAccount