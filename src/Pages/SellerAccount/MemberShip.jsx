import React from "react";
import Search from "./MessagTab/Search";
import BlackButton from "../../Component/Shared/BlackButton";
import Product from "../../assets/Tabs Ass/Order_product.png";
import SharedSelect from "../../Component/Shared/SharedSelect";
const value = [
  {
    value: 1,
    label: "Active",
  },
  {
    value: 1,
    label: "Disable",
  },
];
const Table_head = [
  {
    name: "Product ",
  },
  {
    name: "Membership Type ",
  },
  {
    name: "TImeline ",
  },
  {
    name: "Price",
  },
  {
    name: "Status",
  },
  {
    name: "Action",
  },
];
const data = [
  {
    id: 1,
    image: Product,
    imgDescription: "Morgan Drill Concrete",
    Cat: "Garden",
    Sub: "Sub-Garden",
    city: "Berlin",
    price: "$100",
    type: "Highlight",
    Leaseperiod1: "15 Days",
    Leaseperiod2: "1st May to 15th May",
    status: <SharedSelect Value={value} />,
    quantity: "100",

    btn2: (
      <svg
        width="18"
        height="18"
        viewBox="0 0 25 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M5.18311 18.8338L10.9013 18.8144L23.3822 6.45276C23.872 5.96296 24.1415 5.31248 24.1415 4.62054C24.1415 3.9286 23.872 3.27813 23.3822 2.78833L21.3271 0.733242C20.3475 -0.246358 18.6384 -0.241175 17.6665 0.729355L5.18311 13.0936V18.8338ZM19.4949 2.56546L21.5538 4.61666L19.4845 6.66656L17.4294 4.61277L19.4949 2.56546ZM7.77464 14.1742L15.5881 6.43462L17.6432 8.4897L9.83102 16.2267L7.77464 16.2332V14.1742Z"
          fill="white"
        />
        <path
          d="M2.59153 23.9996H20.7323C22.1615 23.9996 23.3238 22.8373 23.3238 21.4081V10.1763L20.7323 12.7679V21.4081H6.68357C6.64988 21.4081 6.61489 21.421 6.5812 21.421C6.53844 21.421 6.49568 21.4093 6.45162 21.4081H2.59153V3.26731H11.4636L14.0552 0.675781H2.59153C1.1623 0.675781 0 1.83808 0 3.26731V21.4081C0 22.8373 1.1623 23.9996 2.59153 23.9996Z"
          fill="white"
        />
      </svg>
    ),
  },
  {
    id: 1,
    image: Product,
    imgDescription: "Morgan Drill Concrete",
    Cat: "Garden",
    Sub: "Sub-Garden",
    city: "Berlin",
    price: "$100",
    type: "Highlight",
    Leaseperiod1: "15 Days",
    Leaseperiod2: "1st May to 15th May",
    status: <SharedSelect Value={value} />,
    quantity: "100",

    btn2: (
      <svg
        width="18"
        height="18"
        viewBox="0 0 25 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M5.18311 18.8338L10.9013 18.8144L23.3822 6.45276C23.872 5.96296 24.1415 5.31248 24.1415 4.62054C24.1415 3.9286 23.872 3.27813 23.3822 2.78833L21.3271 0.733242C20.3475 -0.246358 18.6384 -0.241175 17.6665 0.729355L5.18311 13.0936V18.8338ZM19.4949 2.56546L21.5538 4.61666L19.4845 6.66656L17.4294 4.61277L19.4949 2.56546ZM7.77464 14.1742L15.5881 6.43462L17.6432 8.4897L9.83102 16.2267L7.77464 16.2332V14.1742Z"
          fill="white"
        />
        <path
          d="M2.59153 23.9996H20.7323C22.1615 23.9996 23.3238 22.8373 23.3238 21.4081V10.1763L20.7323 12.7679V21.4081H6.68357C6.64988 21.4081 6.61489 21.421 6.5812 21.421C6.53844 21.421 6.49568 21.4093 6.45162 21.4081H2.59153V3.26731H11.4636L14.0552 0.675781H2.59153C1.1623 0.675781 0 1.83808 0 3.26731V21.4081C0 22.8373 1.1623 23.9996 2.59153 23.9996Z"
          fill="white"
        />
      </svg>
    ),
  },
  {
    id: 1,
    image: Product,
    imgDescription: "Morgan Drill Concrete",
    Cat: "Garden",
    Sub: "Sub-Garden",
    city: "Berlin",
    price: "$100",
    type: "Highlight",
    Leaseperiod1: "15 Days",
    Leaseperiod2: "1st May to 15th May",
    status: <SharedSelect Value={value} />,
    quantity: "100",

    btn2: (
      <svg
        width="18"
        height="18"
        viewBox="0 0 25 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M5.18311 18.8338L10.9013 18.8144L23.3822 6.45276C23.872 5.96296 24.1415 5.31248 24.1415 4.62054C24.1415 3.9286 23.872 3.27813 23.3822 2.78833L21.3271 0.733242C20.3475 -0.246358 18.6384 -0.241175 17.6665 0.729355L5.18311 13.0936V18.8338ZM19.4949 2.56546L21.5538 4.61666L19.4845 6.66656L17.4294 4.61277L19.4949 2.56546ZM7.77464 14.1742L15.5881 6.43462L17.6432 8.4897L9.83102 16.2267L7.77464 16.2332V14.1742Z"
          fill="white"
        />
        <path
          d="M2.59153 23.9996H20.7323C22.1615 23.9996 23.3238 22.8373 23.3238 21.4081V10.1763L20.7323 12.7679V21.4081H6.68357C6.64988 21.4081 6.61489 21.421 6.5812 21.421C6.53844 21.421 6.49568 21.4093 6.45162 21.4081H2.59153V3.26731H11.4636L14.0552 0.675781H2.59153C1.1623 0.675781 0 1.83808 0 3.26731V21.4081C0 22.8373 1.1623 23.9996 2.59153 23.9996Z"
          fill="white"
        />
      </svg>
    ),
  },
  // Add more data as needed
];
const MemberShip = () => {
  return (
    <div>
      <div>
        <div>
          <div className="pt-5">
            <h1 className="font-Mont text-black font-semibold 2xl:text-2xl text-xl">
              Membership
            </h1>
          </div>
          <div className="py-5 flex justify-between">
            <div className="w-1/3">
              <Search placeholder={"Search by Listing Name"} />
            </div>
            <div className="w-1/4">
              <BlackButton label={"Add New Membership"} bgColor={"yellow"} />
            </div>
          </div>
          <div>
            {/* Tabbles for itemm--------------------  */}
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
                              className=" text-white first:rounded-s-lg last:rounded-e-lg px-4 text-center py-3  text-xs md:text-sm font-Mont first:text-left first:pl-14 font-semibold capitalize tracking-wider"
                            >
                              {item.name}
                            </th>
                          ))}
                        </tr>
                      </thead>
                      <tbody>
                        {data.map((Bitem, index) => (
                          <tr className="bg-white  " key={index}>
                            <td className="px-3 py-3 whitespace-nowrap text-sm rounded-s-lg">
                              {/* wE USE iNLINE BLOCK AND THEN WE USE FLEX BECAUSE IF WE USE DIRECLTY FLEX
                      THE RADIUS ON LEFT SIDE IS NOT WORK THATS WHY WE USE THIS APPROACH */}
                              <div className=" flex flex-col lg:flex-row  lg:items-center gap-1 2xl:gap-5">
                                <div className="inline-block ">
                                  <img
                                    src={Bitem.image}
                                    alt="Product"
                                    className="max-w-full h-auto"
                                  />
                                </div>
                                <div className="inline-block">
                                  <h1 className="text-sm font-semibold font-Mont">
                                    {Bitem.imgDescription}
                                  </h1>
                                  <p className="text-sm font-Robot font-medium text-[#92929D]">
                                    Category{" "}
                                    <span className="text-black">
                                      {Bitem.Cat}
                                    </span>{" "}
                                    and{" "}
                                    <span className="text-black">
                                      {Bitem.Sub}
                                    </span>
                                    <br /> City{" "}
                                    <span className="text-black">
                                      {Bitem.city}
                                    </span>
                                  </p>
                                </div>
                              </div>
                            </td>

                            <td className="px-3 py-3 whitespace-nowrap text-sm text-center ">
                              <h2 className="2xl:text-base xl:text-sm font-medium ">
                                {" "}
                                {Bitem.type}
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
                              {Bitem.price}
                            </td>
                            <td className="px-3 py-3 whitespace-nowrap 2xl:text-base xl:text-xs font-Mont font-semibold text-center">
                              <div className="w-full mx-auto">
                                {Bitem.status}
                              </div>
                            </td>
                            <td className="px-3 py-3 whitespace-nowrap text-sm  text-center rounded-r-lg">
                              
                                
                                  <button
                                    className={`bg-color-primary-yel p-3 rounded-full w-min`}
                                  >
                                    {Bitem.btn2}
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
      </div>
    </div>
  );
};

export default MemberShip;
