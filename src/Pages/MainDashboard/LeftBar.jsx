import React, { useEffect, useState } from 'react'
import LandingPageSlider from './LandingPageSlider'
import ProductsSection from './ProductsSection'
import DetailsSection from './DetailsSection'
import axios from "axios";
import Loader from '../../Component/Shared/Loader';


const LeftBar = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    axios
      .get("https://backend-two-blush-62.vercel.app/products")
      .then((responce) => {
        setProducts(responce.data);
        setLoading(false);
      })
      .catch((error) => {
        console.warn(error.message);
        setLoading(false);
      });
  }, [products]);
  return (
    <>
    <div>
        <div className='px-3 lg:px-0'>
            <div>
                <LandingPageSlider products={products}/>
            </div>
            {loading ? (
              <>
              <div><Loader/></div>
              </>
            ):(<>
             <div className='my-8'>
                <ProductsSection products={products}/>
            </div>
            </>)}
            
           
            <div className='pb-6'>
              <DetailsSection />
            </div>
        </div>
        
    </div>
    </>
  )
}

export default LeftBar