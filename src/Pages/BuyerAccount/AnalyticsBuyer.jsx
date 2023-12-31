import React from "react";
import order from "../../assets/Tabs Ass/Order_product.png";
const AnalyticsBuyer = () => {
  return (
    <div className="md:px-4 ">
      <div>
        <div className="pt-5 pb-3">
          <h1 className="font-Mont text-black font-semibold 2xl:text-2xl text-xl">
            Analytics
          </h1>
        </div>
        <div className="flex  md:flex-row flex-col items-center gap-5">
          <div className="bg-white xl:w-1/3 md:w-[40%] w-full p-5 2xl:p-7 rounded-lg">
            <div className="flex flex-col">
              <div className="flex items-center gap-2">
                <span>
                  <svg
                    width="56"
                    height="56"
                    viewBox="0 0 56 56"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <circle cx="28" cy="28" r="28" fill="#38E25D" />
                    <path
                      d="M41.1512 34.9401C40.9896 35.1155 40.8434 35.3277 40.6601 35.4612C38.1318 37.3081 35.5971 39.1412 33.0672 40.9871C32.9481 41.0859 32.81 41.1443 32.6668 41.1566C32.5236 41.1688 32.3804 41.1344 32.2513 41.0569C28.9271 39.3029 25.5995 37.5559 22.2683 35.8158C19.9974 34.6204 17.7273 33.4249 15.4581 32.2295C15.2157 32.101 15.0219 31.9306 15.0186 31.574C15.0186 31.2612 15.1802 31.0848 15.3837 30.9434C15.9855 30.5329 16.5857 30.1095 17.2279 29.6672C16.9387 29.5188 16.6859 29.3883 16.433 29.2598C16.0865 29.0834 15.7408 28.9061 15.3934 28.7328C15.1665 28.6202 14.9896 28.4509 14.9678 28.1271C14.9459 27.8033 15.1115 27.6091 15.3264 27.4626C15.8708 27.091 16.4128 26.7145 16.9548 26.3399C17.0356 26.2841 17.1115 26.2213 17.2206 26.1406C16.5938 25.8209 15.9985 25.521 15.4056 25.2142C15.1043 25.0568 14.9346 24.7639 15.0267 24.463C15.0989 24.2568 15.2207 24.0829 15.3757 23.9649C15.8999 23.5734 16.4419 23.2188 16.9766 22.8492C17.0501 22.7984 17.1212 22.7436 17.223 22.6689C16.6285 22.37 16.0647 22.0781 15.5025 21.7882C15.3996 21.7393 15.3011 21.6776 15.2085 21.6039C15.1449 21.5504 15.0922 21.4796 15.0545 21.3969C15.0168 21.3142 14.995 21.2219 14.991 21.1271C14.9869 21.0323 15.0006 20.9377 15.0311 20.8506C15.0615 20.7634 15.1078 20.6861 15.1665 20.6246C15.2527 20.5396 15.3455 20.4651 15.4435 20.4025C17.9745 18.6458 20.5055 16.8889 23.0364 15.1316C23.157 15.0375 23.2948 14.9822 23.4373 14.9709C23.5797 14.9596 23.7221 14.9926 23.8515 15.0668C25.6681 15.9933 27.4928 16.8958 29.3111 17.8163C33.0892 19.7277 36.8671 21.6408 40.6447 23.5555C40.8677 23.6681 41.0486 23.8175 41.1512 24.0865V24.4023C41.009 24.5736 40.8863 24.7808 40.7223 24.9093C40.2635 25.27 39.7885 25.5977 39.32 25.9394C39.2093 26.0201 39.1011 26.1068 38.9622 26.2144C39.5454 26.5083 40.093 26.7643 40.6253 27.0651C40.8208 27.1757 40.9767 27.3899 41.1512 27.5573V27.9358C40.9896 28.1121 40.8418 28.3184 40.6617 28.4578C40.1714 28.8384 39.6673 29.189 39.1698 29.5537C39.11 29.5975 39.0559 29.6533 38.9751 29.723C39.5664 30.0219 40.1148 30.3098 40.6714 30.5768C40.8879 30.6764 41.0575 30.8288 41.156 31.0918V31.4046C41.0131 31.576 40.8887 31.7842 40.7239 31.9117C40.2069 32.3102 39.6738 32.6847 39.1472 33.0693C39.0955 33.1071 39.0494 33.1579 38.9799 33.2207C39.5518 33.5096 40.0995 33.7656 40.6318 34.0665C40.8265 34.1761 40.9824 34.3922 41.156 34.5596L41.1512 34.9401ZM39.4751 24.3315C39.3604 24.2718 39.2917 24.2319 39.2223 24.199C37.3313 23.2457 35.4395 22.2963 33.5526 21.333C33.4751 21.2859 33.3883 21.2672 33.3024 21.2791C33.2165 21.2909 33.1352 21.3327 33.068 21.3997C31.1294 23.0056 29.1891 24.6065 27.2473 26.2024C27.1778 26.2602 27.11 26.322 27.0243 26.4017C27.1213 26.4584 27.1964 26.5013 27.2739 26.5471C28.9702 27.4377 30.6754 28.3223 32.3717 29.2219C32.4416 29.2655 32.5199 29.2848 32.598 29.2776C32.6762 29.2704 32.7512 29.237 32.8151 29.1811C34.9492 27.627 37.0858 26.0776 39.2247 24.5328C39.2934 24.475 39.3604 24.4172 39.4751 24.3315ZM32.1302 20.6505C32.0987 20.6157 32.0825 20.5868 32.0599 20.5758C31.2885 20.1873 30.5171 19.7968 29.7408 19.4222C29.6949 19.4088 29.6473 19.4072 29.6009 19.4175C29.5545 19.4277 29.5103 19.4497 29.471 19.482C27.2917 21.2645 25.1164 23.0537 22.9452 24.8496C22.9012 24.8905 22.8647 24.9423 22.838 25.0017C22.8113 25.061 22.795 25.1266 22.7901 25.1943C22.782 28.2825 22.7852 31.3757 22.7804 34.466C22.7728 34.5421 22.7877 34.6191 22.8224 34.6828C22.8571 34.7465 22.9093 34.7926 22.9694 34.8126C23.7166 35.1922 24.4589 35.5857 25.2036 35.9722C25.261 36.0021 25.3232 36.018 25.4032 36.0489V35.6375C25.4032 32.6837 25.4032 29.73 25.3991 26.7762C25.3902 26.5939 25.4226 26.4121 25.4928 26.2512C25.563 26.0904 25.6682 25.9569 25.7965 25.8657C27.6495 24.3521 29.4988 22.8312 31.3442 21.3031C31.6059 21.0879 31.8644 20.8717 32.1302 20.6505ZM28.4411 18.7697C26.807 17.9429 25.2182 17.1349 23.6253 16.341C23.5225 16.3121 23.4147 16.3339 23.3248 16.4017C21.1848 17.8781 19.0469 19.3591 16.9112 20.8448C16.8498 20.8867 16.7941 20.9444 16.7117 21.0082C16.8183 21.066 16.887 21.1078 16.954 21.1427C18.6374 22.0263 20.3224 22.906 22.0025 23.7986C22.0682 23.8405 22.1425 23.8579 22.2161 23.8485C22.2897 23.8391 22.3595 23.8034 22.4169 23.7458C24.341 22.1518 26.2675 20.5642 28.1964 18.9829C28.2675 18.9261 28.3337 18.8643 28.4411 18.7697ZM39.4589 34.8385C38.9646 34.5785 38.4953 34.3404 38.0333 34.0814C37.9705 34.0417 37.9001 34.0242 37.8298 34.0309C37.7595 34.0376 37.6921 34.0682 37.635 34.1193C36.1197 35.2261 34.5963 36.3179 33.0841 37.4327C32.9587 37.5378 32.8129 37.6 32.6617 37.613C32.5104 37.6259 32.359 37.5891 32.2231 37.5064C30.3943 36.5401 28.5575 35.5947 26.7238 34.6423C26.6431 34.5994 26.555 34.5666 26.4379 34.5148C26.4379 35.1444 26.4476 35.7311 26.4339 36.3159C26.4282 36.543 26.4953 36.6437 26.6608 36.7293C28.5499 37.7096 30.4366 38.6975 32.3208 39.6931C32.401 39.7457 32.4913 39.7706 32.582 39.7649C32.6728 39.7593 32.7606 39.7235 32.8361 39.6612C34.96 38.1104 37.0871 36.5653 39.2174 35.0258C39.2885 34.973 39.3604 34.9162 39.4589 34.8385ZM39.4589 27.8352C38.9848 27.5941 38.5349 27.3769 38.0938 27.1379C38.016 27.0885 37.9288 27.0661 37.8415 27.0729C37.7542 27.0798 37.67 27.1156 37.5979 27.1767C36.0898 28.2825 34.5728 29.3684 33.0655 30.4771C32.9464 30.576 32.8083 30.6343 32.665 30.6462C32.5218 30.6581 32.3785 30.6231 32.2497 30.5449C30.4201 29.5746 28.5857 28.6192 26.7521 27.6559C26.6617 27.6091 26.5688 27.5682 26.4403 27.5064C26.4403 28.1301 26.4516 28.7019 26.4355 29.2807C26.4282 29.5297 26.4928 29.6483 26.6778 29.7449C28.576 30.7292 30.4718 31.7221 32.3652 32.7236C32.4358 32.7667 32.5145 32.7856 32.593 32.778C32.6715 32.7705 32.7468 32.7369 32.8111 32.6807C34.936 31.1287 37.0631 29.5815 39.1924 28.0394C39.2748 27.9826 39.3507 27.9179 39.4565 27.8352H39.4589ZM26.4363 30.9982C26.4363 31.6517 26.4452 32.2394 26.4322 32.8272C26.4274 33.0424 26.4872 33.141 26.6439 33.2257C28.5647 34.2219 30.4834 35.2264 32.4 36.2392C32.4588 36.276 32.5247 36.2924 32.5905 36.2868C32.6564 36.2812 32.7197 36.2537 32.774 36.2073C34.928 34.6366 37.0844 33.0696 39.2433 31.5062C39.3039 31.4624 39.358 31.4066 39.4444 31.3319C38.9598 31.0858 38.5058 30.8706 38.0648 30.6276C37.995 30.5826 37.9165 30.5622 37.838 30.5687C37.7595 30.5752 37.6839 30.6083 37.6197 30.6644C36.1043 31.7742 34.5817 32.869 33.0688 33.9828C32.95 34.0821 32.8121 34.1409 32.669 34.1534C32.5259 34.1658 32.3826 34.1313 32.2538 34.0535C30.9613 33.3562 29.6568 32.6847 28.3563 32.0033C27.7344 31.6726 27.1091 31.3478 26.4363 30.9982ZM21.7513 30.6565C21.7513 29.9432 21.7561 29.2946 21.7448 28.6471C21.7448 28.5774 21.6536 28.4817 21.5881 28.4479C20.5817 27.9166 19.573 27.3882 18.5623 26.8629C18.4965 26.8228 18.4209 26.8149 18.3506 26.841C17.8094 27.2066 17.2731 27.5861 16.6826 27.9986L21.7513 30.6565ZM21.7513 34.1581C21.7513 33.4608 21.7569 32.8322 21.7448 32.2036C21.7358 32.1528 21.7175 32.1052 21.6913 32.0645C21.6652 32.0237 21.6318 31.9909 21.5938 31.9685C20.5873 31.4318 19.5782 30.9005 18.5663 30.3745C18.4999 30.3329 18.4233 30.3234 18.3514 30.3476C17.803 30.7152 17.2594 31.0958 16.6818 31.4963L21.7513 34.1581ZM16.6826 24.5029L21.7513 27.1548C21.7513 26.4574 21.757 25.8298 21.744 25.2022C21.7345 25.1518 21.7158 25.1047 21.6894 25.0645C21.6629 25.0243 21.6294 24.992 21.5914 24.9701C20.5865 24.4328 19.5782 23.9042 18.5663 23.3841C18.484 23.3427 18.3918 23.3427 18.3094 23.3841C17.7787 23.7408 17.2545 24.1084 16.6826 24.5029Z"
                      fill="white"
                    />
                  </svg>
                </span>
                <h2 className="font-Mont font-semibold 2xl:text-2xl  text-xl">
                  Total Spend
                </h2>
              </div>
              <h1 className="font-Mont font-semibold text-xl 2xl:text-2xl text-[#38E25D] ">
                $20,000
              </h1>
            </div>
          </div>
          <div className="bg-white xl:w-1/3 md:w-[40%] w-full p-5 2xl:p-7 rounded-lg">
            <div className="flex flex-col">
              <div className="flex items-center gap-2">
                <span>
                  <svg
                    width="56"
                    height="56"
                    viewBox="0 0 56 56"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <circle cx="28" cy="28" r="28" fill="#FC5A5A" />
                    <path
                      d="M40.9223 21.4118C40.8018 21.2184 40.641 21.0604 40.4535 20.9511C40.266 20.8419 40.0575 20.7848 39.8459 20.7848H21.9493L20.4381 16.7545C20.24 16.2237 19.9045 15.7703 19.4741 15.4517C19.0438 15.1331 18.538 14.9636 18.0208 14.9649H14.9658V17.8748H18.0208L24.233 34.4397C24.3325 34.7047 24.5003 34.9311 24.7154 35.0904C24.9305 35.2496 25.1832 35.3345 25.4416 35.3345H35.9174C36.4635 35.3345 36.9519 34.9577 37.1444 34.3917L41.0729 22.7519C41.1471 22.5316 41.1722 22.2947 41.146 22.0613C41.1197 21.8279 41.043 21.6051 40.9223 21.4118ZM35.01 32.4246H26.3151L23.0414 23.6947H37.9563L35.01 32.4246Z"
                      fill="white"
                    />
                    <path
                      d="M26.0951 41.154C27.1799 41.154 28.0593 40.1769 28.0593 38.9715C28.0593 37.7662 27.1799 36.7891 26.0951 36.7891C25.0103 36.7891 24.1309 37.7662 24.1309 38.9715C24.1309 40.1769 25.0103 41.154 26.0951 41.154Z"
                      fill="white"
                    />
                    <path
                      d="M35.263 41.154C36.3478 41.154 37.2272 40.1769 37.2272 38.9715C37.2272 37.7662 36.3478 36.7891 35.263 36.7891C34.1782 36.7891 33.2988 37.7662 33.2988 38.9715C33.2988 40.1769 34.1782 41.154 35.263 41.154Z"
                      fill="white"
                    />
                  </svg>
                </span>
                <h2 className="font-Mont font-semibold 2xl:text-2xl  text-xl">
                  Total Ordered
                </h2>
              </div>
              <h1 className="font-Mont font-semibold text-xl 2xl:text-2xl text-[#FC5A5A] ">
                160
              </h1>
            </div>
          </div>
        </div>
        {/* Secction 2 --------------------------------------------- */}
        <div>
          <div className="xl:grid grid-cols-12 gap-6  2xl:gap-10 items-start">
            <div className=" col-span-7  2xl:col-span-7 ">
              <div className="py-5">
                <h1 className="font-Mont text-black font-semibold 2xl:text-2xl text-xl">
                  Next Booking
                </h1>
              </div>
             <div className="bg-white md:p-5 py-3 px-2 flex flex-col gap-2 rounded-lg">
             <div className="flex items-center justify-between px-3 py-1  rounded-lg border border-[#E1E1E1] ">
                <div className="md:flex items-center gap-2">
                  <img src={order} className="w-[48px] h-[48px]" />
                  <h1 className="text-xs text-black font-semibold font-Mont">
                    Morgan Drill Concrete
                  </h1>
                </div>
                <div className=" px-6 md:px-0">
                  <h2 className="text-xs text-black font-semibold font-Mont">
                    Hourly
                  </h2>
                </div>
                <div className="">
                  <h2 className="text-xs text-black font-semibold font-Mont ">
                    04-02-23 01:00 to 04-02-23 04:00
                  </h2>
                </div>
              </div>
              <div className="flex items-center justify-between px-3 py-1  rounded-lg border border-[#E1E1E1] ">
                <div className="md:flex items-center gap-2">
                  <img src={order} className="w-[48px] h-[48px]" />
                  <h1 className="text-xs text-black font-semibold font-Mont">
                    Morgan Drill Concrete
                  </h1>
                </div>
                <div className="px-6 md:px-0">
                  <h2 className="text-xs text-black font-semibold font-Mont">
                    Daily
                  </h2>
                </div>
                <div>
                  <h2 className="text-xs text-black font-semibold font-Mont">
                    04-02-23 01:00 to 04-02-23 04:00
                  </h2>
                </div>
              </div>
             </div>
            </div> 
            {/* Col Span 3 ---------------------------------------------- */}
            <div className="col-span-5 2xl:col-span-5 ">
            <div className="py-5">
                <h1 className="font-Mont text-black font-semibold 2xl:text-2xl text-xl">
                Account History (last 7 days)
                </h1>
              </div>
              <div className="bg-white md:p-5 px-2 py-3 flex flex-col gap-2 rounded-lg">
                <div className="flex flex-col gap-1 border rounded-lg px-3 py-[10px]">
                    <h1 className="text-xs font-Mont font-normal">
                    February 5, 2023, 10:17 am
                    </h1>
                    <h1 className="text-xs font-Robot font-medium">
                    Generated Invoice Invoice 33842
                    </h1>
                </div>
                <div className="flex flex-col gap-1 border rounded-lg  py-[10px] px-3">
                    <h1 className="text-xs font-Mont font-normal">
                    February 5, 2023, 10:17 am
                    </h1>
                    <h1 className="text-xs font-Robot font-medium">
                    Generated Invoice Invoice 33842
                    </h1>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AnalyticsBuyer;
