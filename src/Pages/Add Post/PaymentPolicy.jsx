import React, { useEffect } from "react";
import { useState } from "react";
import SharedSelect from "../../Component/Shared/SharedSelect";

const PaymentPolicy = ({ formik }) => {
  const [isYes, setYes] = useState(null);
  const [isNo, setNo] = useState(null);
  const Time = [
    { value: "Hourly", label: "Hourly" },
    { value: "Weekly", label: "Weekly" },
    { value: "Monthly", label: "Monthly" },
  ];
  const Amount = [
    { value: "100", label: "100" },
    { value: "300", label: "300" },
    { value: "900", label: "900" },
  ];
  useEffect(() => {
    if (isYes === true) {
      const yes = "Yes";
      formik.setFieldValue("Payment_Deposit", yes);
    } else if (isNo === true) {
      const no = "No";
      formik.setFieldValue("Payment_Deposit", no);
    }
  }, [isYes, isNo]);
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
            <div>
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
                <SharedSelect
                  onChange={(selectedOption) =>
                    formik.setFieldValue(
                      "Rented_Amount_per",
                      selectedOption.value
                    )
                  }
                  Values={Time}
                  label={"Rented Amount per"}
                  textsize={"text-base"}
                />
              </div>
              <div>
                <SharedSelect
                  onChange={(selectedOption) =>
                    formik.setFieldValue("Payment_Amount", selectedOption.value)
                  }
                  Values={Amount}
                  label={"Amount"}
                  textsize={"text-base"}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PaymentPolicy;
