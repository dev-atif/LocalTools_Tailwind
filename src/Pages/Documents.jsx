import React from 'react'
import Dashboard from '../Dashboard'
import BreadCrums from '../Component/BreadCrums'

const Documents = () => {
  return (
    <Dashboard>
        <div>
            <div className='lg:pl-4 lg:py-0 '>
            <div>
                <BreadCrums Crums='/ Profile' Bread='Documents'/>
            </div>
            </div>
        </div>
    </Dashboard>
  )
}

export default Documents