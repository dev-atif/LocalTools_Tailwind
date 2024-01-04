import React from "react";
import SharedSelect from "../../Component/Shared/SharedSelect";
import BlackButton from "../../Component/Shared/BlackButton";
import Calender from "./../Add Post/Shared/Calender";
import { useDispatch } from "react-redux";
import { add } from "../../Store/CartSlice";
import { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "react-time-picker/dist/TimePicker.css";
import "react-clock/dist/Clock.css";
import TimePicker from "react-time-picker";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Link, useNavigate } from "react-router-dom";
/* const Stock = [
  { value: "1", label: "1kit" },
  { value: "2", label: "2kit" },
  { value: "3", label: "3kit" },
  { value: "4", label: "4kit" },
  { value: "5", label: "5kit" },
  { value: "6", label: "6kit" },
  { value: "7", label: "7kit" },
]; */

const RightSection = ({ product }) => {
  const [startDate, setStartDate] = useState();
  const [endDate, setEndDate] = useState();

  const [fromTime, setFromtime] = useState();
  const [timeTo, setTimeto] = useState();
  const [stock, setStock] = useState();
  const [error, setError] = useState(false);
  const navigate = useNavigate();

  const dispatch = useDispatch();

  const StartTimeDate = new Date(startDate).getTime();
  const EndTimeDate = new Date(endDate).getTime();
  const DayDifference = Math.ceil(
    (EndTimeDate - StartTimeDate) / (1000 * 3600 * 24)
  );
  const totalPrice = stock * product?.Rented_Price * DayDifference;
  const serviceFee = parseFloat(product?.Service_fee) || 0; // Convert to number, default to 0 if conversion fails
  const taxes = parseFloat(product?.Taxes) || 0; // Convert to number, default to 0 if conversion fails
  const netTotalAmount = totalPrice + serviceFee + taxes;

  const addtoCart = (product) => {
    let missingFields = [];

    if (!fromTime) missingFields.push("Time From");
    if (!timeTo) missingFields.push("Time To");
    if (!stock) missingFields.push("Stock");
    if (!startDate) missingFields.push("Date From");
    if (!endDate) missingFields.push("Date To");
    if (missingFields.length > 0) {
      setError(true);
      // Display a toast for missing fields
      toast.error(
        `Please fill the following fields: ${missingFields.join(", ")}`,
        {
          autoClose: 4000, // Set the duration to 3000 milliseconds (2 seconds)
        }
      );

      // Set the error state to true for styling or any other purpose
      
    } else {
      setError(false);
      const cartItem = {
        startDate: new Date(startDate),
        endDate: new Date(endDate),
        fromTime: fromTime,
        timeTo: timeTo,
        stock: Number(stock),
      };
      const combinedData = {
        product: product,
        cartItem: cartItem,
        
      };

      dispatch(add(combinedData));
      navigate('/cart')
    }
  };
  const Stock = Array.from({ length: product?.quantity }, (_, index) => ({
    value: (index + 1).toString(),
    label: `${index + 1}kit`,
  }));

  return (
    <>
      <div>
        <div>
          <div>
            <ToastContainer />
          </div>
          <div className="flex items-center justify-end gap-2 mt-14">
            <span>
              <svg
                width="48"
                height="49"
                viewBox="0 0 48 49"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M8.8336 31.766C11.0363 31.7539 13.155 30.944 14.774 29.4952L30.5313 38.2367C30.3306 38.9114 30.2289 39.6101 30.2293 40.3123C30.2131 42.2939 30.9013 44.2204 32.178 45.7674C33.4547 47.3144 35.2419 48.3874 37.2387 48.8057C39.2355 49.2241 41.3199 48.9622 43.1409 48.0642C44.962 47.1662 46.4085 45.687 47.2368 43.8755C48.0651 42.0641 48.2247 40.031 47.6887 38.1188C47.1526 36.2066 45.9538 34.5319 44.2939 33.3768C42.634 32.2217 40.6145 31.6567 38.5754 31.7769C36.5363 31.8971 34.6023 32.6952 33.0988 34.0369L17.3415 25.2953C17.5317 24.6936 17.6334 24.0688 17.6436 23.4395L33.124 14.8445C34.6193 16.1553 36.5338 16.9275 38.5464 17.0316C40.559 17.1356 42.5473 16.5652 44.1778 15.416C45.8083 14.2667 46.9818 12.6086 47.5016 10.7196C48.0214 8.83064 47.8558 6.82574 47.0326 5.04115C46.2094 3.25655 44.7787 1.80081 42.9803 0.918075C41.182 0.0353349 39.1255 -0.220718 37.1556 0.192859C35.1858 0.606437 33.4225 1.66449 32.1614 3.18957C30.9003 4.71465 30.2181 6.61401 30.2293 8.56909C30.2378 9.27063 30.3393 9.96819 30.5313 10.6446L16.2088 18.5804C15.3789 17.335 14.2293 16.3205 12.8728 15.6366C11.5163 14.9527 9.99979 14.623 8.4722 14.6799C6.94461 14.7367 5.45855 15.1782 4.16011 15.9609C2.86166 16.7436 1.79551 17.8406 1.06644 19.144C0.337377 20.4474 -0.0295056 21.9125 0.0018543 23.3951C0.0332142 24.8778 0.461737 26.327 1.2453 27.6003C2.02887 28.8736 3.14051 29.9273 4.47096 30.6576C5.80141 31.388 7.30488 31.77 8.8336 31.766ZM39.0393 36.6496C39.786 36.6496 40.516 36.8644 41.1369 37.2669C41.7578 37.6693 42.2418 38.2413 42.5276 38.9106C42.8133 39.5799 42.8881 40.3163 42.7424 41.0268C42.5967 41.7373 42.2371 42.3899 41.7091 42.9022C41.181 43.4144 40.5083 43.7632 39.7759 43.9046C39.0434 44.0459 38.2843 43.9733 37.5944 43.6961C36.9044 43.4189 36.3148 42.9495 35.8999 42.3471C35.485 41.7448 35.2635 41.0367 35.2635 40.3123C35.2635 39.3409 35.6614 38.4092 36.3694 37.7224C37.0775 37.0355 38.0379 36.6496 39.0393 36.6496ZM39.0393 4.90641C39.786 4.90641 40.516 5.12123 41.1369 5.52369C41.7578 5.92615 42.2418 6.49818 42.5276 7.16744C42.8133 7.83671 42.8881 8.57315 42.7424 9.28364C42.5967 9.99413 42.2371 10.6468 41.7091 11.159C41.181 11.6712 40.5083 12.0201 39.7759 12.1614C39.0434 12.3027 38.2843 12.2302 37.5944 11.953C36.9044 11.6757 36.3148 11.2063 35.8999 10.604C35.485 10.0016 35.2635 9.2935 35.2635 8.56909C35.2635 7.59769 35.6614 6.66607 36.3694 5.97919C37.0775 5.2923 38.0379 4.90641 39.0393 4.90641ZM8.8336 19.5571C9.58036 19.5571 10.3104 19.7719 10.9313 20.1744C11.5522 20.5768 12.0361 21.1489 12.3219 21.8181C12.6077 22.4874 12.6824 23.2238 12.5368 23.9343C12.3911 24.6448 12.0315 25.2974 11.5034 25.8097C10.9754 26.3219 10.3026 26.6708 9.5702 26.8121C8.83778 26.9534 8.07862 26.8809 7.38869 26.6036C6.69877 26.3264 6.10909 25.857 5.69421 25.2547C5.27933 24.6523 5.05789 23.9442 5.05789 23.2198C5.05789 22.2484 5.45568 21.3168 6.16377 20.6299C6.87185 19.943 7.83222 19.5571 8.8336 19.5571Z"
                  fill="#92929D"
                />
              </svg>
            </span>
            <spna>
              <svg
                width="70"
                height="70"
                viewBox="0 0 76 76"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g filter="url(#filter0_dd_2102_1271)">
                  <rect
                    x="11"
                    y="11"
                    width="50"
                    height="50"
                    rx="25"
                    fill="#EB2424"
                  />
                </g>
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M36.8972 30.3897C38.7508 28.5368 41.7561 28.5368 43.6097 30.3897C45.4634 32.2427 45.4634 35.2471 43.6097 37.1001L36.8535 43.8536C36.6582 44.0488 36.3418 44.0488 36.1465 43.8536L29.3903 37.1001C27.5366 35.2471 27.5366 32.2427 29.3903 30.3897C31.2439 28.5368 34.2492 28.5368 36.1028 30.3897L36.5 30.7867L36.8972 30.3897Z"
                  fill="#F6F7FB"
                />
                <defs>
                  <filter
                    id="filter0_dd_2102_1271"
                    x="0"
                    y="0"
                    width="76"
                    height="76"
                    filterUnits="userSpaceOnUse"
                    color-interpolation-filters="sRGB"
                  >
                    <feFlood flood-opacity="0" result="BackgroundImageFix" />
                    <feColorMatrix
                      in="SourceAlpha"
                      type="matrix"
                      values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                      result="hardAlpha"
                    />
                    <feOffset dy="4" />
                    <feGaussianBlur stdDeviation="5.5" />
                    <feComposite in2="hardAlpha" operator="out" />
                    <feColorMatrix
                      type="matrix"
                      values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0"
                    />
                    <feBlend
                      mode="normal"
                      in2="BackgroundImageFix"
                      result="effect1_dropShadow_2102_1271"
                    />
                    <feColorMatrix
                      in="SourceAlpha"
                      type="matrix"
                      values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                      result="hardAlpha"
                    />
                    <feOffset dx="4" />
                    <feGaussianBlur stdDeviation="5.5" />
                    <feComposite in2="hardAlpha" operator="out" />
                    <feColorMatrix
                      type="matrix"
                      values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0"
                    />
                    <feBlend
                      mode="normal"
                      in2="effect1_dropShadow_2102_1271"
                      result="effect2_dropShadow_2102_1271"
                    />
                    <feBlend
                      mode="normal"
                      in="SourceGraphic"
                      in2="effect2_dropShadow_2102_1271"
                      result="shape"
                    />
                  </filter>
                </defs>
              </svg>
            </spna>
          </div>
          {/* -------------------------------------------------------- */}
          <div className="bg-white  px-3 py-4 mt-[4.8%] rounded-lg">
            <div>
              <h1 className=" font-Robot font-medium 2xl:text-3xl text-2xl text-black">
                {product?.Rented_Price}/{product?.Rented_as}
              </h1>
            </div>
            <div
              className={`border  rounded-lg  my-4 ${
                error ? "border-red-600  shake" : "border-black"
              }`}
            >
              <div
                className={`flex border-b  ${
                  error ? "border-red-600 " : "border-black"
                }`}
              >
                <div
                  className={`p-2 w-1/2 border-r ${
                    error ? "border-red-600 " : "border-black"
                  }`}
                >
                  <p className="2xl:text-base text-sm font-Robot text-[#92929D]">
                    {" "}
                    DATE FROM
                  </p>

                  <div className="mt-1">
                    <DatePicker
                      placeholderText="mm/dd/yyy"
                      selected={startDate}
                      onChange={(date) => setStartDate(date)}
                      dateFormat="MM/dd/yyyy"
                      className="w-[100%]  md:text-lg font-Mont font-medium text-black placeholder:text-lg placeholder:text-black"
                    />
                  </div>
                </div>
                <div className="p-2 w-1/2">
                  <p className="2xl:text-base text-sm font-Robot text-[#92929D]">
                    {" "}
                    DATE TO
                  </p>
                  <div className="mt-1">
                    <DatePicker
                      placeholderText="mm/dd/yyy"
                      selected={endDate}
                      onChange={(date) => setEndDate(date)}
                      dateFormat="MM/dd/yyyy"
                      className="w-[100%]  md:text-lg font-Mont font-medium text-black placeholder:text-lg placeholder:text-black"
                    />
                  </div>
                </div>
              </div>
              <div
                className={`flex border-b ${
                  error ? "border-red-600 " : "border-black"
                } `}
              >
                <div
                  className={`p-2 w-1/2 border-r ${
                    error ? "border-red-600 " : "border-black"
                  }`}
                >
                  <p className="2xl:text-base text-sm font-Robot text-[#92929D]">
                    {" "}
                    TIME FROM
                  </p>
                  <div>
                    <TimePicker
                      onChange={setFromtime}
                      value={fromTime}
                      className="react-time-picker "
                      disableClock={true}
                    />
                  </div>
                </div>
                <div className="p-2 w-1/2">
                  <p className="2xl:text-base text-sm font-Robot text-[#92929D]">
                    {" "}
                    TIME TO
                  </p>
                  <div>
                    <TimePicker
                      onChange={setTimeto}
                      value={timeTo}
                      className="react-time-picker "
                      disableClock={true}
                    />
                  </div>
                </div>
              </div>
              <div>
                <SharedSelect
                  bordercolor={"none"}
                  placeholder={"Stock"}
                  Values={Stock}
                  onChange={(selectedOption) => setStock(selectedOption.value)}
                />
              </div>
            </div>
            {/* ---------------------------Buttons----------------------------------------- */}
            <div className="flex  xl:flex-row flex-col gap-3">
              <div className="xl:w-1/2">
                <button
                  onClick={() => {
                    test(product);
                  }}
                  className="text-white bg-color-primary-yel py-2 w-full text-center rounded-lg  font-Mont font-semibold text-base  "
                >
                  Book
                </button>
              </div>
              <div className="xl:w-1/2">
               
               <button
                  onClick={() => {
                    addtoCart(product);
                  }}
                  className="text-[#92929D] bg-none border border-[#92929D]  py-2 w-full text-center rounded-lg  font-Mont font-semibold text-base  "
                >
                  Add to Cart
                </button>
               
              </div>
            </div>
            {/* ======================================================================================= */}
            <div>
              <div className="text-center my-3">
                <p className="font-Robot font-medium 2xl:text-lg text-sm text-[#92929D]">
                  You won’t be charged yet
                </p>
              </div>
              <div className="mt-2">
                <div className="flex items-center justify-between">
                  <h1 className=" text-md text-black font-Robot font-medium">
                    {stock}kit x ${product?.Rented_Price} x {DayDifference}{" "}
                    {DayDifference > 1 ? "Day" : "Days"}
                  </h1>

                  <h1 className=" text-md text-black font-Robot font-medium">
                    ${totalPrice}
                  </h1>
                </div>
                <div className="flex items-center justify-between my-2">
                  <h1 className=" text-base text-black font-Robot font-medium">
                    Service Fees
                  </h1>

                  <h1 className=" text-base text-black font-Robot font-medium">
                    ${serviceFee}
                    </h1>
                    
                </div>
                <div className="flex items-center justify-between">
                  <h1 className=" text-base text-black font-Robot font-medium">
                    Occupancy Taxes & Fees
                  </h1>

                  <h1 className=" text-base text-black font-Robot font-medium">
                    ${taxes}
                  </h1>
                </div>
                <div className="flex items-center justify-between mt-2 pt-4 border-t border-[#92929D]">
                  <h1 className=" text-base text-black font-Robot font-medium">
                    Total
                  </h1>

                  <h1 className="text-base text-black font-Robot font-medium">
                    ${netTotalAmount}
                  </h1>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default RightSection;
