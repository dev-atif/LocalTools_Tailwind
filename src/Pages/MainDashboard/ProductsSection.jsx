import React from 'react'

import ProductCard from '../../Component/Shared/ProductCard';
import { ProductsCardsArray } from './ProductsArray';


const ProductsSection = () => {
  return (
   <>
   <div>
    <div className='flex  gap-3 flex-wrap'>
    {ProductsCardsArray.map((item, index) => (
        <div className='xl:w-[32%] md:w-[32%] w-full  ' key={index}>
          <ProductCard
            Pname={item.name}
            cat={item.cat}
            image={item.image}
            price={item.price}
            location={item.location}
            Label={item.Label}
            LabelColor={item.LabelColor}
          />
        </div>
      ))}
    </div>
    <div className='text-center mt-8'>
        <button className='border-[#000000] border py-2 px-7 rounded-lg font-Mont font-semibold text-sm text-center text-black'>
            Load More
        </button>
    </div>
   </div>
   </>
  )
}

export default ProductsSection