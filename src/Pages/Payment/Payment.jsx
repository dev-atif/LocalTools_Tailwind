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
const Payment = () => {
  return (
    <Dashboard>
      <div className="lg:pl-3">
        <div>
          <BreadCrums Bread={' Orders'} Crums={'/ My Profile'}/>
        </div>
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
                          className=" text-white first:rounded-s-lg last:rounded-e-lg px-4 text-center py-3  text-xs md:text-sm font-Robot first:text-left first:pl-7 font-semibold capitalize tracking-wider"
                        >
                          {item.name}
                        </th>
                      ))}
                    </tr>
                  </thead>

                  <tbody>
                    <tr className="bg-white  ">
                      <td className="px-3 py-3 whitespace-nowrap text-sm font-Robot font-semibold rounded-s-lg">
                        #316
                      </td>

                      <td className="px-3 py-3 whitespace-nowrap text-sm  ">
                        <h2 className="2xl:text-base xl:text-sm font-Robot font-semibold text-[#92929D]">
                          1st May 2021
                        </h2>
                      </td>
                      <td className="px-3 py-3 whitespace-nowrap text-center ">
                        <h1 className=" 2xl:text-base xl:text-sm font-Robot font-medium ">
                          Cedit card 4839
                        </h1>
                      </td>
                      <td className="px-3 py-3 whitespace-nowrap  text-center">
                        <p className="font-medium font-Robot 2xl:text-base xl:text-xs text-black">
                          hammer
                        </p>
                      </td>
                      <td className="px-3 py-3 whitespace-nowrap 2xl:text-base xl:text-xs font-Robot font-medium text-center">
                        10
                      </td>
                      <td className="px-3 py-3 whitespace-nowrap 2xl:text-base xl:text-xs font-Robot font-medium text-center">
                        100
                      </td>
                      <td className="px-3 py-3 whitespace-nowrap text-sm  text-center rounded-r-lg">
                        <button
                          className={`bg-[#D0E7DC] rounded-lg w-[100px] 2xl:w-[140px] font-semibold py-2 text-[#369768] xl:text-sm 2xl:text-lg`}
                        >
                          Completed
                        </button>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Dashboard>
  );
};

export default Payment;
