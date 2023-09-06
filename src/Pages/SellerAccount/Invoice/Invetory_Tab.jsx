import React from "react";
import ShareField from "../../../Component/Shared/ShareField";
import SharedSelect from "../../../Component/Shared/SharedSelect";
import InvoiceTable from "./InvoiceTable";

const Invetory_Tab = () => {
  return (
    <div>
      <div>
        <div className="pt-5 pb-3">
          <h1 className="font-Mont text-black font-semibold 2xl:text-2xl text-xl">
            Invoice
          </h1>
        </div>
        <div className="md:grid grid-cols-4 items-center gap-2">
          <div className=" bg-white rounded-lg flex px-2 py-[10px] items-center">
            <input
              type="text"
              className="placeholder:text-sm placeholder:font-Robot w-full bg-transparent outline-none"
              placeholder="From Date"
            />
            <span>
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M4.6829 4.6829C1.1057 8.2601 1.1057 14.0599 4.6829 17.6371C8.2601 21.2143 14.0599 21.2143 17.6371 17.6371C21.2143 14.0599 21.2143 8.2601 17.6371 4.6829C14.0599 1.1057 8.2601 1.1057 4.6829 4.6829ZM6.09712 6.09712C8.89327 3.30096 13.4267 3.30096 16.2229 6.09712C19.019 8.89327 19.019 13.4267 16.2229 16.2229C13.4267 19.019 8.89327 19.019 6.09712 16.2229C3.30096 13.4267 3.30096 8.89327 6.09712 6.09712Z"
                  fill="#92929D"
                />
                <path
                  d="M22.0943 20.2825L17.9649 16.153C17.0221 15.2102 15.6078 16.6244 16.5506 17.5672L20.6801 21.6967C21.6229 22.6395 23.0371 21.2253 22.0943 20.2825Z"
                  fill="#92929D"
                />
              </svg>
            </span>
          </div>
          <div className=" bg-white rounded-lg flex px-2 py-[10px] md:mt-0 mt-2 items-center">
            <input
              type="text"
              className="placeholder:text-sm placeholder:font-Robot w-full bg-transparent outline-none"
              placeholder="To Date"
            />
            <span>
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M4.6829 4.6829C1.1057 8.2601 1.1057 14.0599 4.6829 17.6371C8.2601 21.2143 14.0599 21.2143 17.6371 17.6371C21.2143 14.0599 21.2143 8.2601 17.6371 4.6829C14.0599 1.1057 8.2601 1.1057 4.6829 4.6829ZM6.09712 6.09712C8.89327 3.30096 13.4267 3.30096 16.2229 6.09712C19.019 8.89327 19.019 13.4267 16.2229 16.2229C13.4267 19.019 8.89327 19.019 6.09712 16.2229C3.30096 13.4267 3.30096 8.89327 6.09712 6.09712Z"
                  fill="#92929D"
                />
                <path
                  d="M22.0943 20.2825L17.9649 16.153C17.0221 15.2102 15.6078 16.6244 16.5506 17.5672L20.6801 21.6967C21.6229 22.6395 23.0371 21.2253 22.0943 20.2825Z"
                  fill="#92929D"
                />
              </svg>
            </span>
          </div>
          <div >
            <SharedSelect placeholder={'Listing'} bg={'bg-white'} bordercolor={'none'}/>
          </div>
          <div className="md:-mt-0 -mt-2">
            <SharedSelect placeholder={'Any'} bg={'bg-white'} bordercolor={'none'}/>
          </div>
        </div>
        <div className="py-4">
          <p className="text-[#92929D] font-Robot 2xl:text-sm text-xs font-normal">Reservation fees filter applies only to the invoices issued by you!</p>
        </div>
        <div>
          <InvoiceTable/>
        </div>
      </div>
    </div>
  );
};

export default Invetory_Tab;
