import React, { useState } from 'react'
import InvoiceDetails from '../InvoiceDetails'
const Table_head=[
    {
        name:'Invoice'
    },
    {
        name:'Order ID'
    },
    {
        name:'Date'
    },
    {
        name:'Invoice Type'
    },
    {
        name:'Status'
    },
    {
        name:'Price'
    },
    {
        name:''
    },


]
const data=[
    {    id:1,
        invoice:'123456',
        orderid:'123456',
        date:'February 5, 2023',
        type:'Highlight Plan',
        status:'Amount Paid',
        price:'$ 155.00',
        btntext:'View Details'
    },
    {
      id:2,
        invoice:'123456',
        orderid:'123456',
        date:'February 5, 2023',
        type:'Product',
        status:'Amount Paid',
        price:'$ 155.00',
        btntext:'View Details'
    },
    {
      id:3,
        invoice:'123456',
        orderid:'123456',
        date:'February 5, 2023',
        type:'Highlight Plan',
        status:'Amount Paid',
        price:'$ 155.00',
        btntext:'View Details'
    },
   
]
const InvoiceTable = () => {
  const [invoice,setInvoice] = useState(null)
  const invoiveCollaps = (itemid)=>{
    if (invoice === itemid) {
      setInvoice(null); // Collapse the row if it's already open
    } else {
      setInvoice(itemid); // Expand the clicked row
    }
  }
  return (
    <div>
        <div>
            <div className='flex md:flex-row flex-col md:gap-10 gap-2 md:items-center'>
                <h1 className='font-Mont font-semibold text-base text-black'>
                Total Invoices Confirmed: <span className='font-medium text-base font-Mont text-[#92929D] ml-3'> 15 USD</span>
                </h1>
                <h1 className='font-Mont font-semibold text-base text-black'>
                Total Invoices Issued: <span className='font-medium text-base font-Mont text-[#92929D] ml-3'> 10</span>
                </h1>
            </div>
            <div>
            <div className="h-[400px] overflow-y-scroll overflow-x-hidden">
       <div className="flex flex-col md:pt-0 pt-3">
          <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
            <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
              <div className=" overflow-hidden sm:rounded-lg">
                <table className="min-w-full table-auto w-full 	  border-separate border-spacing-y-4  ">
                  <thead className="">
                    <tr className="bg-color-primary-yel  ">
                      {Table_head.map((item, index) => (
                        <th
                          scope="col"
                          key={index}
                          className=" text-white first:rounded-s-lg last:rounded-e-lg px-4 text-center py-3  text-xs md:text-sm font-Robot first:text-left first:pl-7 font-semibold capitalize tracking-wider"
                        >
                          {item.name}
                        </th>
                      ))}
                    </tr>
                  </thead>

                  <tbody>
                    
                   {data.map((item,index)=>(
                    <>
                     <tr className="bg-white  " key={index} >
                     <td className="px-3 py-3 whitespace-nowrap text-sm font-Robot font-semibold rounded-s-lg">
                      {item.invoice}
                     </td>

                     <td className="px-3 py-3 whitespace-nowrap text-sm text-center ">
                       <h2 className="2xl:text-base xl:text-sm font-Robot font-semibold ">
                       {item.orderid}
                       </h2>
                     </td>
                     <td className="px-3 py-3 whitespace-nowrap text-center ">
                       <h1 className=" 2xl:text-base xl:text-sm font-Robot font-medium ">
                       {item.date}
                       </h1>
                     </td>
                     <td className="px-3 py-3 whitespace-nowrap  text-center">
                       <p className="font-medium font-Robot 2xl:text-base xl:text-sm text-black">
                        {item.type}
                       </p>
                     </td>
                     <td className="px-3 py-3 whitespace-nowrap font-semibold 2xl:text-base xl:text-xs font-Robot  text-center">
                       {item.status}
                     </td>
                     <td className="px-3 py-3 whitespace-nowrap 2xl:text-base xl:text-sm font-Robot font-semibold text-center">
                    {item.price}
                     </td>
                     <td className="px-3 py-3 whitespace-nowrap text-sm  text-center rounded-r-lg">
                       <button onClick={()=>{invoiveCollaps(item.id)}}
                         className={`bg-color-primary-yel rounded-lg w-[100px] 2xl:w-[140px] font-semibold py-2 text-white xl:text-sm 2xl:text-lg`}
                       >
                       {item.btntext}
                       </button>
                     </td>
                   
                   </tr>
                   {
                    invoice === item.id && (
                      <tr  >
                        <td colSpan="12" >
                          <InvoiceDetails/>
                        </td>
                      </tr>
                    )
                  }
                  </>
                   ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
       </div>
            </div>
        </div>
    </div>
  )
}

export default InvoiceTable