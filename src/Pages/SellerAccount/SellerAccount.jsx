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
                    <BreadCrums Crums='/ My Profile' Bread='Documents'/>
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