import React from "react";
import user2 from "../../SellerAccount/MessagTab/UserImages/Ellipse 88.png";
import user1 from "../../SellerAccount/MessagTab/UserImages/Ellipse 88m.png";
const MessagesSection = () => {
  return (
    <div>
      <div>
        <div className="flex flex-col h-screen">
          <div className="bg-white py-3 border-b border-[#E6E8F0] px-3 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <img src={user1} className="w-[40px] h-[40px]" />
              <h1 className="text-black text-sm font-bold font-Mont">
                Hernán López
              </h1>
            </div>
            <div>
              <svg
                width="4"
                height="16"
                viewBox="0 0 4 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle
                  cx="1.6"
                  cy="14.4"
                  r="1.6"
                  transform="rotate(-90 1.6 14.4)"
                  fill="#8F95B2"
                />
                <circle
                  cx="1.6"
                  cy="7.99961"
                  r="1.6"
                  transform="rotate(-90 1.6 7.99961)"
                  fill="#8F95B2"
                />
                <circle
                  cx="1.6"
                  cy="1.59922"
                  r="1.6"
                  transform="rotate(-90 1.6 1.59922)"
                  fill="#8F95B2"
                />
              </svg>
            </div>
          </div>
          <div className="px-4 flex-grow ">
            <div>
              <div className="flex justify-end gap-2 items-baseline">
                <div className="w-2/4 flex flex-col justify-end">
                  <p className="text-[#8F95B2] text-xs font-Cairo text-end">
                    18:00
                  </p>
                  <h1 className="text-[#244CB2] text-xs bg-[#CDF4FF] inline-block p-2 rounded-md">
                    Hello Jennifer. Nice to meet you.
                  </h1>
                  <h1 className="text-[#244CB2] text-xs bg-[#CDF4FF] inline-block p-2 rounded-md my-1">
                    Following up your previous email. What do you think about
                    the project?
                  </h1>
                </div>
                <img src={user2} className="h-[40px] w-[40px] mt-8" />
              </div>
            </div>
            <div>
              <div className="flex justify-end flex-row-reverse gap-2 items-baseline">
                <div className="w-2/4 flex flex-col justify-start">
                  <p className="text-[#8F95B2] text-xs font-Cairo ">
                    johndoe, 18:15
                  </p>
                  <h1 className="text-[#244CB2] text-xs bg-[#CDF4FF] inline-block p-2 rounded-md">
                    Hello Berry. Nice to meet you too. Sorry for not answering
                    yesterday.
                  </h1>
                </div>
                <img src={user1} className="h-[40px] w-[40px] mt-8" />
              </div>
            </div>
          </div>
          <div className=" px-4 border-t border[#E6E8F0] py-3">
            <div className="w-full flex  py-2 rounded-lg px-3 bg-[#F9FAFC]">
              <input
                type="text"
                placeholder="Write a message..."
                className="placeholder:text-[#8F95B2]
                placeholder:text-xs placeholder:font-Mont placeholder:font-normal w-[80%] bg-transparent outline-none"
              />
              <button className="px-2">
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clip-path="url(#clip0_2102_7155)">
                    <path
                      d="M14.6668 8.00051L8.66679 14.0005C4.66679 18.0005 -1.33321 12.0005 2.66679 8.00051L8.66679 2.00051C11.3335 -0.666153 15.3335 3.33385 12.6668 6.00051L6.66679 12.0005C5.33345 13.3338 3.33345 11.3338 4.66679 10.0005L10.6668 4.00051"
                      stroke="#8F95B2"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_2102_7155">
                      <rect width="16" height="16" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
              </button>
              <button className="px-2">
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M4.11108 2.18056C4.87518 1.66089 5.73461 1.29765 6.6398 1.11179C7.54499 0.925938 8.47802 0.921146 9.38507 1.09769C10.2921 1.27424 11.1552 1.62863 11.9246 2.14043C12.694 2.65223 13.3545 3.31129 13.8679 4.07962C14.3813 4.84794 14.7375 5.71032 14.9159 6.617C15.0944 7.52368 15.0915 8.45671 14.9076 9.36229C14.7236 10.2679 14.3622 11.1281 13.8441 11.8932C13.326 12.6584 12.6616 13.3135 11.8891 13.8206C10.3455 14.8521 8.4554 15.2283 6.63451 14.8662C4.81363 14.5042 3.21114 13.4336 2.17958 11.8901C1.14802 10.3465 0.771891 8.45638 1.13393 6.63549C1.49597 4.81461 2.56652 3.21212 4.11008 2.18056H4.11108ZM4.66708 12.9896C5.32215 13.4322 6.05822 13.741 6.83301 13.8982C7.6078 14.0554 8.40602 14.058 9.1818 13.9057C9.95758 13.7535 10.6956 13.4494 11.3535 13.011C12.0114 12.5726 12.5761 12.0085 13.0153 11.3511C13.4545 10.6937 13.7594 9.95603 13.9126 9.18042C14.0657 8.40482 14.0641 7.6066 13.9078 6.83163C13.7515 6.05666 13.4435 5.32023 13.0017 4.66465C12.5598 4.00908 11.9928 3.44728 11.3331 3.01156C10.0098 2.13754 8.39437 1.82293 6.83984 2.13651C5.2853 2.45009 3.91813 3.36635 3.03718 4.685C2.15623 6.00365 1.83315 7.61743 2.13857 9.17359C2.44399 10.7298 3.35307 12.1017 4.66708 12.9896ZM6.50008 7.00056C6.50008 7.26578 6.39473 7.52013 6.20719 7.70767C6.01965 7.89521 5.7653 8.00056 5.50008 8.00056C5.23487 8.00056 4.98051 7.89521 4.79298 7.70767C4.60544 7.52013 4.50008 7.26578 4.50008 7.00056C4.50008 6.73535 4.60544 6.48099 4.79298 6.29346C4.98051 6.10592 5.23487 6.00056 5.50008 6.00056C5.7653 6.00056 6.01965 6.10592 6.20719 6.29346C6.39473 6.48099 6.50008 6.73535 6.50008 7.00056ZM11.5001 7.00056C11.5001 7.26578 11.3947 7.52013 11.2072 7.70767C11.0197 7.89521 10.7653 8.00056 10.5001 8.00056C10.2349 8.00056 9.98051 7.89521 9.79298 7.70767C9.60544 7.52013 9.50008 7.26578 9.50008 7.00056C9.50008 6.73535 9.60544 6.48099 9.79298 6.29346C9.98051 6.10592 10.2349 6.00056 10.5001 6.00056C10.7653 6.00056 11.0197 6.10592 11.2072 6.29346C11.3947 6.48099 11.5001 6.73535 11.5001 7.00056ZM8.00008 11.0006C7.45669 11.0019 6.92314 10.8556 6.45641 10.5773C5.98967 10.2991 5.60729 9.89923 5.35008 9.42056L4.48008 9.90056C4.83023 10.5485 5.35248 11.0872 5.98928 11.4573C6.62607 11.8274 7.35268 12.0145 8.08901 11.9979C8.82535 11.9814 9.54282 11.7619 10.1623 11.3635C10.7819 10.9652 11.2794 10.4036 11.6001 9.74056L10.7001 9.31056C10.4541 9.81734 10.0704 10.2446 9.5929 10.5435C9.11541 10.8424 8.56341 11.0008 8.00008 11.0006Z"
                    fill="#8F95B2"
                  />
                </svg>
              </button >
              <button className="px-3 border-l">
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M13.855 2.14562C13.7875 2.07845 13.7023 2.03195 13.6093 2.01158C13.5163 1.99121 13.4194 1.99781 13.33 2.03062L2.33 6.03062C2.23513 6.0666 2.15346 6.13059 2.09583 6.21409C2.03819 6.2976 2.00732 6.39666 2.00732 6.49812C2.00732 6.59958 2.03819 6.69864 2.09583 6.78214C2.15346 6.86564 2.23513 6.92964 2.33 6.96562L7.13 8.88562L9.05 13.6856C9.08608 13.7763 9.14791 13.8545 9.22787 13.9104C9.30784 13.9664 9.40243 13.9978 9.5 14.0006C9.60104 13.9985 9.69909 13.9659 9.7812 13.907C9.86332 13.8481 9.92566 13.7657 9.96 13.6706L13.96 2.67062C13.9941 2.58216 14.0023 2.48583 13.9837 2.39288C13.9651 2.29993 13.9205 2.21417 13.855 2.14562ZM9.5 12.1006L8.105 8.60062L10.5 6.20562L9.795 5.50062L7.38 7.91562L3.9 6.50062L12.665 3.33562L9.5 12.1006Z"
                    fill="#8F95B2"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MessagesSection;
