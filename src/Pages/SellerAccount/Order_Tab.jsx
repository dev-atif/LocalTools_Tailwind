import React, { useState } from "react";
import Product from "../../assets/Tabs Ass/Order_product.png";
import TableDropdown from "./TableDropdown";
import InvoiceDetails from "./InvoiceDetails";
const Order_Tab = () => {
  const [expandedRow, setExpandedRow] = useState(null);
  
  const Table_head = [
    {
      name: "Product ",
    },
    {
      name: "Rent ",
    },
    {
      name: "Lease Period ",
    },
    {
      name: "Total Rent ",
    },
    {
      name: "Quantity ",
    },
    {
      name: "Status ",
    },
  ];
  const data = [
    {
      id: 1,
      image: Product,
      imgDescription: "Morgan Drill Concrete",
      imgSeller: "John Doe",
      price: "$1/Day",
      Leaseperiod1: "15 Days",
      Leaseperiod2: "1st May to 15th May",
      Rent: "$15",
      quantity: "1",
      btn: "Completed",
      btnColor: "text-green-600",
      bgColor: "bg-green-200",
    },
    {
      id: 2,
      image: Product,
      imgDescription: "Morgan Drill Concrete",
      imgSeller: "John Doe",
      price: "$1/Day",
      Leaseperiod1: "15 Days",
      Leaseperiod2: "1st May to 15th May",
      Rent: "$0",
      quantity: "1",
      btn: "Cancelled",
      btnColor: "text-red-600",
      bgColor: "bg-red-200",
    },
    {
      id: 3,
      image: Product,
      imgDescription: "Morgan Drill Concrete",
      imgSeller: "John Doe",
      price: "$1/Day",
      Leaseperiod1: "15 Days",
      Leaseperiod2: "1st May to 15th May",
      Rent: "$15",
      quantity: "1",
      btn: "pending",
      btnColor: "text-purple-600",
      bgColor: "bg-purple-200",
    },
    // Add more data as needed
  ];

 const Collaps = (BitemId) => {
    if (expandedRow === BitemId) {
      setExpandedRow(null); // Collapse the row if it's already open
    } else {
      setExpandedRow(BitemId); // Expand the clicked row
    }
  };
  
  return (
    <div>
      <div>
        <div className="flex flex-col">
          <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
            <div className="py-2 align-middle inline-block lg:block min-w-full sm:px-6 lg:px-8">
              <div className=" overflow-hidden border-b  sm:rounded-lg">
                <table className="min-w-full table-auto w-full 	  border-separate border-spacing-y-4  ">
                  <thead className="">
                    <tr className="bg-color-primary-yel  ">
                      {Table_head.map((item, index) => (
                        <th
                          scope="col"
                          className=" 
                           text-white first:rounded-s-lg last:rounded-e-lg  text-center py-3  text-xs md:text-sm font-Mont first:text-left first:pl-14 font-semibold capitalize tracking-wider"
                        >
                          {item.name}
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {data.map((Bitem, index) => (
                     <>
                      <tr className="bg-white cursor-pointer " key={index} onClick={() => Collaps(Bitem.id)}>
                        <td className="px-3 py-3 whitespace-nowrap text-sm rounded-s-lg">
                          {/* wE USE iNLINE BLOCK AND THEN WE USE FLEX BECAUSE IF WE USE DIRECLTY FLEX
                      THE RADIUS ON LEFT SIDE IS NOT WORK THATS WHY WE USE THIS APPROACH */}
                          <div className=" flex flex-col lg:flex-row  lg:items-center gap-3 2xl:gap-5">
                            <div className="inline-block ">
                              <img
                                src={Bitem.image}
                                alt="Product"
                                className="max-w-full h-auto"
                              />
                            </div>
                            <div className="inline-block">
                              <h1 className="2xl:text-base xl:text-sm font-semibold font-Mont">
                                {Bitem.imgDescription}
                              </h1>
                              <p className="xl:text-xs 2xl:text-sm font-Robot font-medium text-[#92929D]">
                                Seller {Bitem.imgSeller}
                              </p>
                            </div>
                          </div>
                        </td>

                        <td className="px-3 py-3 whitespace-nowrap text-sm  ">
                          <h2 className="2xl:text-base xl:text-sm font-medium">
                            {" "}
                            {Bitem.price}
                          </h2>
                        </td>
                        <td className="px-3 py-3 whitespace-nowrap text-center ">
                          <h1 className=" 2xl:text-base xl:text-sm font-semibold font-Mont">
                            {Bitem.Leaseperiod1}
                          </h1>
                          <p className="font-semibold 2xl:text-base xl:text-xs text-color-primary-gr font-Mont">
                            {Bitem.Leaseperiod2}
                          </p>
                        </td>
                        <td className="px-3 py-3 whitespace-nowrap 2xl:text-base xl:text-xs font-Mont font-semibold text-center">
                          {Bitem.Rent}
                        </td>
                        <td className="px-3 py-3 whitespace-nowrap 2xl:text-base xl:text-xs font-Mont font-semibold text-center">
                          {Bitem.quantity}
                        </td>
                        <td className="px-3 py-3 whitespace-nowrap text-sm  text-center rounded-r-lg">
                          <button
                            className={`${Bitem.bgColor} rounded-lg w-[100px] 2xl:w-[140px] font-semibold py-2 ${Bitem.btnColor} xl:text-sm 2xl:text-lg`}
                          >
                            {Bitem.btn}
                          </button>
                        </td>
                      </tr>
                      {expandedRow === Bitem.id  && (
                      <tr>
                            <td colSpan="12" >
                             <TableDropdown/>
                            </td>
                          </tr>
                           )}
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
  );
};

export default Order_Tab;
