import React from "react";
import Dashboard from "../../Dashboard";
import BreadCrums from "../../Component/BreadCrums";
const Table_head = [
  {
    name: "Payment ID",
  },
  {
    name: "Date ",
  },
  {
    name: "Payment Mode ",
  },
  {
    name: "Order Description ",
  },
  {
    name: "Quantity ",
  },
  {
    name: "Payment ",
  },
  {
    name: "Status ",
  },
];
const Table_body=[
  {
    Pid:'#316',
    Date:'1st May 2021',
    Paymethod:'Cedit card 4839',
    orderdescription:'hammer',
    quantity:'10',
    Payment:'100',
    Status:'Completed',
    textcolor:'text-[#369768]',
    bgcolor:'bg-[#D0E7DC]'
  },
  {
    Pid:'#317',
    Date:'5th May 2021',
    Paymethod:'Cedit card 4839',
    orderdescription:'Skrew Driver',
    quantity:'7',
    Payment:'80',
    Status:'Completed',
    textcolor:'text-[#369768]',
    bgcolor:'bg-[#D0E7DC]'
  },
  {
    Pid:'#318',
    Date:'5th May 2021',
    Paymethod:'Cedit card 4839',
    orderdescription:'Pliers',
    quantity:'5',
    Payment:'40',
    Status:'Completed',
    textcolor:'text-[#369768]',
    bgcolor:'bg-[#D0E7DC]'
  },
  {
    Pid:'#319',
    Date:'9th May 2021',
    Paymethod:'Cedit card 4839',
    orderdescription:'Tape Measure',
    quantity:'12',
    Payment:'85',
    Status:'Pending',
    textcolor:'text-[#A228B6]',
    bgcolor:'bg-purple-200'
  },
  {
    Pid:'#320',
    Date:'21th May 2021',
    Paymethod:'Cedit card 4839',
    orderdescription:'Power Drill',
    quantity:'20',
    Payment:'130',
    Status:'Cancelled',
    textcolor:"text-red-600",
    bgcolor:"bg-red-200",
  },
]
const Payment = () => {
  return (
    <Dashboard>
      <div className="lg:pl-3">
        <div>
          <BreadCrums Bread={' Orders'} Crums={'/ My Profile'}/>
        </div>
       <div className="!h-4/5 overflow-y-scroll overflow-x-hidden">
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
                   {Table_body.map((item,index)=>(
                     <tr className="bg-white  " key={index}>
                     <td className="px-3 py-3 whitespace-nowrap text-sm font-Robot font-semibold rounded-s-lg">
                       {item.Pid}
                     </td>

                     <td className="px-3 py-3 whitespace-nowrap text-sm  ">
                       <h2 className="2xl:text-base xl:text-sm font-Robot font-semibold text-[#92929D]">
                        {item.Date}
                       </h2>
                     </td>
                     <td className="px-3 py-3 whitespace-nowrap text-center ">
                       <h1 className=" 2xl:text-base xl:text-sm font-Robot font-medium ">
                       {item.Paymethod}
                       </h1>
                     </td>
                     <td className="px-3 py-3 whitespace-nowrap  text-center">
                       <p className="font-medium font-Robot 2xl:text-base xl:text-xs text-black">
                         {item.orderdescription}
                       </p>
                     </td>
                     <td className="px-3 py-3 whitespace-nowrap 2xl:text-base xl:text-xs font-Robot font-medium text-center">
                       {item.quantity}
                     </td>
                     <td className="px-3 py-3 whitespace-nowrap 2xl:text-base xl:text-xs font-Robot font-medium text-center">
                      {item.Payment}
                     </td>
                     <td className="px-3 py-3 whitespace-nowrap text-sm  text-center rounded-r-lg">
                       <button
                         className={`${item.bgcolor} rounded-lg w-[100px] 2xl:w-[140px] font-semibold py-2 ${item.textcolor} xl:text-sm 2xl:text-lg`}
                       >
                        {item.Status}
                       </button>
                     </td>
                   </tr>
                   ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
       </div>
      </div>
    </Dashboard>
  );
};

export default Payment;
