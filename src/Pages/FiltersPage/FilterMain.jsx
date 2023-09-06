import React from 'react'
import BreadCrums from '../../Component/BreadCrums'
import { ProductsCardsArray } from '../MainDashboard/ProductsArray'
import ProductCard from '../../Component/Shared/ProductCard'
import DetailsSection from '../MainDashboard/DetailsSection'

const FilterMain = () => {
  return (
   <>
   <div>
    <div>
        <div className='md:mt-3 my-4'>
            <h1 className='font-Robot font-normal text-sm text-[#92929D]'>
            Home / Garden Tools / 
            </h1>
        </div>
        <div className='flex flex-wrap gap-3 2xl:mt-[3.5%] xl:mt-[4%] lg:mt-[5%]'>
            {ProductsCardsArray.map((item,index)=>(
                <div className="xl:w-[32%] 2xl:w-[32%] lg:w-[48%] md:w-[48%] w-full   bg-white relative rounded-md pb-5 h-[350px]"
                key={index}>
                    <ProductCard 
                    cat={item.cat}
                    image={item.image}
                    Pname={item.name}
                    price={item.price}
                    location={item.location}
                    LabelColor={item.LabelColor}
                     Label={item.Label}/>
                    </div>
                    
            ))}
        </div>
        <div>
        <div className='text-center mt-8'>
        <button className='border-[#000000] border py-2 px-7 rounded-lg font-Mont font-semibold text-sm text-center text-black'>
            Load More
        </button>
    </div>
        </div>
        <div className='my-8'>
            <DetailsSection textcolor={'text-white'} fill={'white'}/>
        </div>
    </div>
   </div>
   </>
  )
}

export default FilterMain