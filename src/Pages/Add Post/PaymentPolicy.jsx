import React from "react";
import { useState } from "react";
import SharedSelect from "./Shared/SharedSelect";

const PaymentPolicy = () => {
  const [isYes, setYes] = useState(true);
  const [isNo, setNo] = useState(false);
  const Time=[
    {value:'1',label:'Hourly'},
    {value:'2',label:'Weekly'},
    {value:'3',label:'Monthly'},
  ]
  const Amount=[
    {value:'1',label:'5'},
    {value:'2',label:'10'},
    {value:'3',label:'15'},
  ]
  return (
    <div>
    <div>
        <div className="py-2">
        <h1 className="text-xl 2xl:text-2xl font-Mont font-semibold text-black">
        Payment policy
        </h1>
        </div>
        <div className="flex md:flex-row flex-col items-baseline md:gap-20 gap-3 bg-white md:px-6 px-4 py-4 rounded-lg">
        <div>
          <div > 
            <h1 className="text-base 2xl:text-lg font-Mont font-semibold text-black">
              Deposit
            </h1>
          </div>
          <div className="flex  items-center gap-10 pt-3">
            <div className="flex items-center gap-2">
              {isYes ? (
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  onClick={() => {
                  
                    setNo(false);
                  }}
                >
                  <circle cx="8" cy="8" r="7.5" stroke="#FFC10E" />
                  <circle cx="8" cy="8" r="5" fill="#FFC10E" />
                </svg>
              ) : (
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  onClick={() => {
                    setYes(!isYes);
                    setNo(false);
                  }}
                >
                  <circle cx="8" cy="8" r="7.5" stroke="black" />
                </svg>
              )}
              <label className="font-Mont text-lg font-medium">Yes </label>
            </div>
            <div className="flex items-center gap-2">
              {isNo ? (
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  onClick={() => {
                   
                    setYes(false);
                  }}
                >
                  <circle cx="8" cy="8" r="7.5" stroke="#FFC10E" />
                  <circle cx="8" cy="8" r="5" fill="#FFC10E" />
                </svg>
              ) : (
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  onClick={() => {
                    setNo(!isNo);
                    setYes(false);
                  }}
                >
                  <circle cx="8" cy="8" r="7.5" stroke="black" />
                </svg>
              )}
              <label className="font-Mont text-lg font-medium">No </label>
            </div>
          </div>
        </div>
        <div className="w-full">
            <div className=" md:grid grid-cols-2 lg:gap-20 md:gap-6">
            <div>
                <SharedSelect Value={Time} label={'Rented Amount per'} textsize={'text-base'}/>
            </div>
            <div>
                <SharedSelect Value={Amount} label={'Amount'} textsize={'text-base'}/>
            </div>
            </div>
        </div>
      </div>
    </div>
    </div>
  );
};

export default PaymentPolicy;
