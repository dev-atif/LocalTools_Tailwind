import React from 'react'
import Product from "../../assets/Tabs Ass/Order_product.png";
const Table_head = [
    {
      name: "Product ",
    },
    
    {
      name: "Quantity ",
    },
    {
        name: "price ",
      },
   
  ];
  const data = [
    {
      id: 1,
      image: Product,
      imgDescription: "Morgan Drill Concrete",
      imgSeller: "John Doe",
      price: "$1/Day",
      
      quantity: "1",
     
    },
    {
      id: 2,
      image: Product,
      imgDescription: "Morgan Drill Concrete",
      imgSeller: "John Doe",
      price: "$1/Day",
     
      quantity: "1",
    
    },
    {
      id: 3,
      image: Product,
      imgDescription: "Morgan Drill Concrete",
      imgSeller: "John Doe",
      price: "$1/Day",
      
      quantity: "1",
     
    },
    // Add more data as needed
  ];
const CartSummary = () => {
  return (
    <>
    <div >
    <div>
        <div>
            <div>
                <h1 className='text-black text-2xl font-Mont font-semibold '>Cart Summary <span className='text-[#FFC10E]'>(Edit)</span></h1>
            </div>
            <div >
{/* --------------------------------------------------------------------------------------------------------------------- */}
<div className='my-4'>
        <div className="flex flex-col">
          <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8 ">
            <div className="py-2 align-middle inline-block lg:block min-w-full sm:px-6 lg:px-8 ">
              <div className=" overflow-hidden border-b  sm:rounded-lg ">
                <div className='mb-3 '>
                <table className="min-w-full table-auto w-full  ">
                  <thead className="mb-4">
                    <tr className="bg-color-primary-yel  ">
                      {Table_head.map((item, index) => (
                        <th
                          scope="col"
                          className=" 
                           text-white first:rounded-s-lg  last:rounded-e-lg   first:pl-4 text-center py-2  text-xs md:text-sm font-Mont first:text-left  font-semibold capitalize tracking-wider"
                        >
                          {item.name}
                        </th>
                      ))}
                    </tr>
                  </thead>
                  </table>
                </div>
                  {/* -----------experiment */}
                 <div className='px-2 bg-white py-3 rounded-lg'>
                 <table className="min-w-full table-auto w-full  ">
                  <tbody className='mt-4'>
                    {data.map((Bitem, index) => (
                     <>
                      <tr className=" border-b border-[#C4CDD5] " key={index} >
                        <td className="px-3 py-3 whitespace-nowrap text-sm  w-[50%] ">
                          {/* wE USE iNLINE BLOCK AND THEN WE USE FLEX BECAUSE IF WE USE DIRECLTY FLEX
                      THE RADIUS ON LEFT SIDE IS NOT WORK THATS WHY WE USE THIS APPROACH */}
                          <div className=" flex flex-col lg:flex-row  lg:items-center gap-3 2xl:gap-5">
                            <div >
                              <img
                                src={Bitem.image}
                                alt="Product"
                                className="w-[45px]"
                              />
                            </div>
                            <div >
                              <h1 className="2xl:text-base xl:text-sm font-semibold font-Mont">
                                {Bitem.imgDescription}
                              </h1>
                              <p className="xl:text-xs 2xl:text-sm font-Robot font-medium text-[#92929D]">
                                Seller <span className='text-black'>{Bitem.imgSeller}</span>
                              </p>
                            </div>
                          </div>
                        </td>
                        <td className="px-3 py-3  whitespace-nowrap  2xl:text-base xl:text-xs font-Mont  font-semibold text-center">
                          {Bitem.quantity}
                        </td>
                        <td className="px-3 py-3 w-[30%] text-center whitespace-nowrap text-sm  pl-16">
                          <h2 className="2xl:text-base xl:text-sm font-medium">
                            {" "}
                            {Bitem.price}
                          </h2>
                        </td>
                       
                      
                       
                      </tr>
                     
                     </>
                      
                      
                    ))}
                    <tr  className='text-end'>
                      <td colSpan="12" className='py-3'>
                        <h1 className='font-Mont font-semibold text-lg text-[#92929D]'>
                        Sub Total :  <span className='text-black ml-3'>$ 45.00</span>
                        </h1>
                      </td>
                    </tr>
                  </tbody>
                </table>
                 </div>
              </div>
            </div>
          </div>
        </div>
      </div>
{/* --------------------------------------------------------------------------------------------------------------------- */}
            </div>
        </div>
    </div>
    </div>
    </>
  )
}

export default CartSummary