import React from "react";

const InvoiceDetails = () => {
  return (
    <>
      <div className="bg-white border-t border-[#E1E1E1] -mt-4">
        <div className=" p-10 max-w-3xl mx-auto">
          <div className="flex  items-center justify-between">
            <div>
              <h1 className="text-2xl text-black font-Mont font-semibold">
                Invoice No. : <spna className="text-[#92929D] pl-3">123456</spna>
              </h1>
            </div>
            <div>
                <button className="text-[#A228B6] rounded-lg border border-[#A228B6] 2xl:text-lg text-base 2xl:py-2 py-3 font-Mont font-semibold 2xl:px-16 px-14  ">Print</button>
            </div>
          </div>
         <div className="mt-10">
         <div className="flex items-center ">
            <div className="w-2/6">
                <h1 className="text-base font-Mont font-semibold text-black">
                Invoice No. :
                </h1>
            </div>
            <div className="w-5/6">
                <h1 className="text-base font-Mont font-medium text-[#92929D]">
                123456
                </h1>
            </div>
          </div>
          {/* -------------------------------------------------------------- */}
          <div className="flex items-center  py-4">
            <div className="w-2/6" >
                <h1 className="text-base font-Mont font-semibold text-black">
                Period :
                </h1>
            </div>
            <div className="w-5/6">
                <h1 className="text-base font-Mont font-medium text-[#92929D]">
                04-02-23 01:00 to 04-02-23 04:00
                </h1>
            </div>
          </div> {/* -------------------------------------------------------------- */}
          <div className="flex items-center ">
            <div className="w-2/6">
                <h1 className="text-base font-Mont font-semibold text-black">
                No of hours:
                </h1>
            </div>
            <div className="w-5/6">
                <h1 className="text-base font-Mont font-medium text-[#92929D]">
                15 Hours
                </h1>
            </div>
          </div> {/* -------------------------------------------------------------- */}
          <div className="flex items-center py-4">
            <div className="w-2/6">
                <h1 className="text-base font-Mont font-semibold text-black">
                Stock :
                </h1>
            </div>
            <div className="w-5/6">
                <h1 className="text-base font-Mont font-medium text-[#92929D]">
                01
                </h1>
            </div>
          </div> {/* -------------------------------------------------------------- */}
          <div className="flex items-center ">
            <div className="w-2/6">
                <h1 className="text-base font-Mont font-semibold text-black">
                Price per hour :
                </h1>
            </div>
            <div className="w-5/6 ">
                <h1 className="text-base font-Mont font-medium text-[#92929D]">
                01
                </h1>
            </div>
          </div> {/* -------------------------------------------------------------- */}
          <div className="flex items-center py-4">
            <div className="w-2/6">
                <h1 className="text-base font-Mont font-semibold text-black">
                Product :
                </h1>
            </div>
            <div className="w-5/6">
                <h1 className="text-base font-Mont font-medium text-[#92929D]">
                Morgan Drill Concrete
                </h1>
            </div>
          </div> {/* -------------------------------------------------------------- */}
          <div className="flex items-center ">
            <div className="w-2/6">
                <h1 className="text-base font-Mont font-semibold text-black">
                Rented By :
                </h1>
            </div>
            <div className="w-5/6">
                <h1 className="text-base font-Mont font-medium text-[#92929D]">
                JohnDoe
                </h1>
            </div>
          </div> {/* -------------------------------------------------------------- */}
          <div className="flex items-center py-4">
            <div className="w-2/6">
                <h1 className="text-base font-Mont font-semibold text-black">
                Email :
                </h1>
            </div>
            <div className="w-5/6">
                <h1 className="text-base font-Mont font-medium text-[#92929D]">
                johndoe@gmail.com
                </h1>
            </div>
          </div> {/* -------------------------------------------------------------- */}
          <div className="flex items-center pb-2">
            <div className="w-2/6">
                <h1 className="text-base font-Mont font-semibold text-black">
                Phone :
                </h1>
            </div>
            <div className="w-5/6">
                <h1 className="text-base font-Mont font-medium text-[#92929D]">
                +1 234567890
                </h1>
            </div>
          
          </div>
         </div>
{/* ------------------------------------------------------------------------------------------------------------- */}
          <div className="my-4 ">
            <div className="border  border-[#E1E1E1] flex  items-center rounded-lg max-w-md">
              <div className=" flex flex-col w-[25%] p-3 gap-2">
                <h1 className="font-Mont font-semibold text-base text-black">Cost :</h1>
                <p className="font-Mont font-medium text-base text-[#92929D]">
                Sub Total
                </p>
              </div>
              <div className=" flex flex-col w-[25%]  p-3 gap-2 border-l border-r border-[#E1E1E1]">
                <h1 className="font-Mont font-semibold text-base text-black">Price :</h1>
                <p className="font-Mont font-medium text-base text-[#92929D]">
                EURO 15
                </p>
              </div>
              <div className=" flex flex-col w-[40%] p-3 gap-2">
                <h1 className="font-Mont font-semibold text-base text-black">Detail :</h1>
                <p className="font-Mont font-medium text-base text-[#92929D]">
                15 hours x USD 225
                </p>
              </div>
            </div>
          </div>
          {/* -------------------------------------------------------------------------------------------- */}
          <div className="mt-8">
          <div className="flex items-center ">
            <div className="w-2/6">
                <h1 className="text-base font-Mont font-semibold text-black">
                User Pays :
                </h1>
            </div>
            <div className="w-5/6">
                <h1 className="text-base font-Mont font-medium text-[#92929D]">
                USD 225
                </h1>
            </div>
          </div>
          {/* -------------------------------------------------------------------- */}
          <div className="flex items-center py-4">
            <div className="w-2/6">
                <h1 className="text-base font-Mont font-semibold text-black">
                Balance :
                </h1>
            </div>
            <div className="w-5/6">
                <h1 className="text-base font-Mont font-medium text-[#92929D]">
                USD 225
                </h1>
            </div>
          </div>
          {/* ----------------------------------------------------------------------- */}
          <div className="flex items-center ">
            <div className="w-2/6">
                <h1 className="text-base font-Mont font-semibold text-black">
                You Earned :
                </h1>
            </div>
            <div className="w-5/6">
                <h1 className="text-base font-Mont font-medium text-[#92929D]">
                USD 225
                </h1>
            </div>
          </div>
          </div>
          {/* ---------------------------------------- */}
          <div className="my-4">
            <p className="font-Mont text-base font-medium text-[#EB2424]">
            *we deduct security deposit, city fees, cleaning fees and website service fee
            </p>
          </div>
          {/* ------------------------------------------------- */}
          <div>
          <div className="flex items-center ">
            <div className="w-2/6">
                <h1 className="text-base font-Mont font-semibold text-black">
                Service Fee :
                </h1>
            </div>
            <div className="w-5/6">
                <h1 className="text-base font-Mont font-medium text-[#92929D]">
                USD 5
                </h1>
            </div>
          </div>
          {/* -------------------------------------------------------------------- */}
          <div className="flex items-center py-4">
            <div className="w-2/6">
                <h1 className="text-base font-Mont font-semibold text-black">
                Taxes :
                </h1>
            </div>
            <div className="w-5/6">
                <h1 className="text-base font-Mont font-medium text-[#92929D]">
                USD 25
                </h1>
            </div>
          </div>
          </div>
            {/* ---------------------------------------- */}
            <div className="mb-4">
            <p className="font-Mont text-base font-medium text-[#EB2424]">
            *taxes are included in your earnings and you are responsible for paying these taxes
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default InvoiceDetails;
