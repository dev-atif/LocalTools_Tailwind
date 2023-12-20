import React from 'react'
import LandingPageSlider from './LandingPageSlider'
import ProductsSection from './ProductsSection'
import DetailsSection from './DetailsSection'


const LeftBar = () => {
  return (
    <>
    <div>
        <div className='px-3 lg:px-0'>
            <div>
                <LandingPageSlider/>
            </div>
            <div className='my-8'>
                <ProductsSection/>
            </div>
            <div className='pb-6'>
              <DetailsSection />
            </div>
        </div>
        
    </div>
    </>
  )
}

export default LeftBar