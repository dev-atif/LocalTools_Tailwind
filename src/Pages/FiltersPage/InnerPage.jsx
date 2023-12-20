import React, { useEffect, useState } from 'react'
import Navbar from './../../Component/NavBar/Navbar';
import LeftBar from './../MainDashboard/LeftBar';
import FilterBar from './FilterBar';
import FilterMain from './FilterMain';
import Footer from './../../Component/Shared/Footer';
import { useLocation, useParams } from 'react-router';
import axios from 'axios';


const InnerPage = () => {

  const [product,setProduct] = useState([])
  const { category } = useParams();


  // Log the category to the console
  /* console.log('Category from URL:', category); */

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`http://localhost:5000/category?cat=${encodeURIComponent(category)}`);
        console.warn(response.data);
        setProduct(response.data);
      } catch (error) {
        console.warn(error);
      }
    };
  
    fetchData();
  }, [category]);
  

 
 
 

  return (
   <>
   <div>
    <div>
        <Navbar/>
    </div>
    <div className='lg:px-0 px-3'>
    <div className="lg:px-2 xl:px-9  mt-2 relative">
        <div className="flex lg:flex-row flex-col lg:gap-3 justify-between ">
           <div className={`lg:w-1/4  w-full h-full rounded-lg  `} >
           <FilterBar product={product}   />
           </div>
           <div className=" lg:w-3/4 w-full md:mt-0 mt-3" >
           <FilterMain product={product} />
           </div>
        </div>
    </div>
    </div>
    <Footer/>
   </div>
   </>
  )
}

export default InnerPage