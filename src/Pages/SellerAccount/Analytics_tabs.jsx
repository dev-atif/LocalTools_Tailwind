import React from 'react'
import Analytics_Section1 from './Analytics_Section1'
import Analytics_Chart from './Analytics_Chart'
import Analytics_Section3 from './Analytics_Section3'

const Analytics_tabs = () => {
  return (
    <div>
        <div className='py-4'>
            <Analytics_Section1/>
        </div>
        <div className='pb-4'>
            <Analytics_Chart/>
        </div>
        <div className='pb-4'>
          <Analytics_Section3/>
        </div>
    </div>
  )
}

export default Analytics_tabs