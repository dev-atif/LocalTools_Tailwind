import React from "react";
const notificationArray = [
  {
    headind: "Did you Know?",
    desc: "here is something that  you might like to know.",
    bariconcolor: "bg-[#4F52FF]",
  },
  {
    headind: "Uh oh, Something went wrong.",
    desc: "Sorry! There was a problem with our request.",
    bariconcolor: "bg-[#EB2424]",
  },
  {
    headind: "Yay! Everything Worked!",
    desc: "Congrats on the internet loading your request.",
    bariconcolor: "bg-[#20A779]",
  },
  {
    headind: "Extra other ",
    desc: "Congrats on the internet loading your request.",
    bariconcolor: "bg-[#FFC10E]",
  },
];
const CartNotification = () => {
  return (
    <>
      <div className="mt-8">
        {notificationArray.map((item, index) => (
          <>
            <div className="bg-white p-2 rounded-lg even:my-4 ">
              <div>
                <div className="relative flex ">
                  {/* Side Bar -------------------------------------------------------------------- */}
                  <div className={`w-1 rounded-full full  ${item.bariconcolor} `}></div>
                  {/* ---------------------------------------------------------------------------------- */}
                  <div className="flex items-center justify-between p-3 w-full gap-3">
                    <div className=" flex  items-center gap-3">
                      <div className={`w-14 h-10 md:h-14 rounded-full ${item.bariconcolor} flex items-center justify-center`}>
                        <span>
                          <svg
                            width="8"
                            height="50"
                            viewBox="0 0 14 50"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                            className="w-2"
                          >
                            <path
                              d="M13.2235 16.7963L0.761508 18.3576L0.313235 20.4289L2.76792 20.8772C4.36315 21.2574 4.68158 21.8325 4.32915 23.4246L0.313235 42.2923C-0.737889 47.1707 0.888263 49.4647 4.7125 49.4647C7.67729 49.4647 11.1182 48.0951 12.6794 46.2124L13.1586 43.9493C12.0765 44.9077 10.4813 45.2911 9.43019 45.2911C7.93079 45.2911 7.38977 44.24 7.77312 42.3881L13.2235 16.7963ZM13.6007 5.44111C13.6007 6.15565 13.4599 6.86319 13.1865 7.52334C12.9131 8.18348 12.5123 8.78331 12.007 9.28856C11.5018 9.79381 10.9019 10.1946 10.2418 10.468C9.58165 10.7415 8.8741 10.8822 8.15957 10.8822C7.44503 10.8822 6.73749 10.7415 6.07734 10.468C5.4172 10.1946 4.81737 9.79381 4.31212 9.28856C3.80687 8.78331 3.40608 8.18348 3.13263 7.52334C2.85919 6.86319 2.71846 6.15565 2.71846 5.44111C2.71846 3.99804 3.29171 2.61407 4.31212 1.59366C5.33253 0.573258 6.71649 0 8.15957 0C9.60264 0 10.9866 0.573258 12.007 1.59366C13.0274 2.61407 13.6007 3.99804 13.6007 5.44111Z"
                              fill="white"
                            />
                          </svg>
                        </span>
                      </div>
                      <div>
                        <h1 className="font-Mont font-semibold md:text-lg text-sm">
                          {item.headind}
                        </h1>
                        <p className="font-Mont font-semibold md:text-sm text-xs text-[#92929D]">
                          {item.desc}
                        </p>
                      </div>
                    </div>
                    <div>
                      <span>
                        <svg
                          width="40"
                          height="40"
                          viewBox="0 0 48 48"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                          className=""
                        >
                          <path
                            d="M24 3C12.3 3 3 12.3 3 24C3 35.7 12.3 45 24 45C35.7 45 45 35.7 45 24C45 12.3 35.7 3 24 3ZM24 42C14.1 42 6 33.9 6 24C6 14.1 14.1 6 24 6C33.9 6 42 14.1 42 24C42 33.9 33.9 42 24 42Z"
                            fill="#92929D"
                          />
                          <path
                            d="M32.1 34.5L24 26.4L15.9 34.5L13.5 32.1L21.6 24L13.5 15.9L15.9 13.5L24 21.6L32.1 13.5L34.5 15.9L26.4 24L34.5 32.1L32.1 34.5Z"
                            fill="#92929D"
                          />
                        </svg>
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </>
        ))}
      </div>
    </>
  );
};

export default CartNotification;
