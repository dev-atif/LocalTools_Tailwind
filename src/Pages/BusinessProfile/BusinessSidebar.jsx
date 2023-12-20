import React from "react";
import businessProfile from "../../assets/photo.png";
import BlackButton from "../../Component/Shared/BlackButton";
const BusinessSidebar = () => {
  return (
    <div className="bg-white rounded-lg">
      <div className="p-6 ">
        <div>
          <div>
            <div className="flex flex-col justify-center items-center gap-1">
              <img src={businessProfile} />
              <h1 className="font-Mont font-bold text-2xl text-black">
                Lenora Fowler
              </h1>
            </div>
            <div className="mt-6">
              <ul>
                <li className="font-Mont font-medium text-[13px] 2xl:text-sm  flex items-center gap-5">
                  <span>
                    <svg
                      width="25"
                      height="25"
                      viewBox="0 0 32 32"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M28 6H4C3.46957 6 2.96086 6.21071 2.58579 6.58579C2.21071 6.96086 2 7.46957 2 8V24C2 24.5304 2.21071 25.0391 2.58579 25.4142C2.96086 25.7893 3.46957 26 4 26H28C28.5304 26 29.0391 25.7893 29.4142 25.4142C29.7893 25.0391 30 24.5304 30 24V8C30 7.46957 29.7893 6.96086 29.4142 6.58579C29.0391 6.21071 28.5304 6 28 6ZM25.8 8L16 14.78L6.2 8H25.8ZM4 24V8.91L15.43 16.82C15.5974 16.9361 15.7963 16.9984 16 16.9984C16.2037 16.9984 16.4026 16.9361 16.57 16.82L28 8.91V24H4Z"
                        fill="black"
                      />
                    </svg>
                  </span>
                  eravi@mail.com
                </li>
                <li className="font-Mont font-medium text-[13px] 2xl:text-sm  flex items-center gap-5 py-2">
                  <span>
                    <svg
                     width="25"
                     height="25"
                      viewBox="0 0 20 25"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M3.92061 0.645356L5.58061 0.145356C6.33626 -0.0826196 7.14906 -0.0278114 7.86726 0.29955C8.58547 0.62691 9.16 1.20445 9.48361 1.92436L10.5166 4.22236C10.795 4.84142 10.8725 5.5321 10.7383 6.19747C10.6042 6.86284 10.2651 7.46951 9.76861 7.93236L7.96361 9.61536C7.9413 9.63619 7.923 9.66093 7.90961 9.68836C7.72061 10.0744 8.00761 11.1054 8.90661 12.6634C9.92061 14.4194 10.7036 15.1134 11.0666 15.0064L13.4356 14.2814C14.0844 14.0832 14.7789 14.0931 15.4218 14.3095C16.0647 14.526 16.6238 14.9382 17.0206 15.4884L18.4886 17.5214C18.9495 18.1597 19.163 18.9436 19.0894 19.7275C19.0158 20.5114 18.6602 21.2419 18.0886 21.7834L16.8256 22.9784C16.3864 23.3944 15.8531 23.698 15.2711 23.8632C14.6892 24.0285 14.0759 24.0505 13.4836 23.9274C9.96661 23.1954 6.81561 20.3634 4.00361 15.4934C1.19061 10.6204 0.313607 6.47036 1.44361 3.05736C1.63276 2.48596 1.95668 1.96849 2.38799 1.54867C2.81929 1.12885 3.34531 0.819022 3.92161 0.645356H3.92061ZM4.35461 2.08136C4.00882 2.18551 3.69318 2.37137 3.43436 2.62322C3.17554 2.87508 2.98115 3.18553 2.86761 3.52836C1.89361 6.46936 2.68261 10.2054 5.30261 14.7434C7.92061 19.2784 10.7586 21.8284 13.7886 22.4584C14.1442 22.5323 14.5123 22.5191 14.8616 22.4198C15.211 22.3205 15.5311 22.1382 15.7946 21.8884L17.0566 20.6944C17.3645 20.4029 17.5561 20.0096 17.5959 19.5874C17.6356 19.1653 17.5207 18.7432 17.2726 18.3994L15.8046 16.3654C15.591 16.0692 15.29 15.8473 14.9439 15.7307C14.5978 15.6141 14.2239 15.6088 13.8746 15.7154L11.4996 16.4424C10.1856 16.8334 8.94961 15.7384 7.60761 13.4124C6.47061 11.4444 6.07661 10.0224 6.56261 9.02936C6.65661 8.83736 6.78461 8.66436 6.94061 8.51836L8.74561 6.83536C9.01305 6.58614 9.19573 6.25943 9.26801 5.90108C9.34029 5.54274 9.29853 5.17076 9.14861 4.83736L8.11561 2.54036C7.94136 2.15262 7.63194 1.84155 7.24513 1.66526C6.85832 1.48897 6.42056 1.4595 6.01361 1.58236L4.35361 2.08236L4.35461 2.08136Z"
                        fill="black"
                      />
                    </svg>
                  </span>
                  +62 123 456 789
                </li>
                <li className="font-Mont font-medium text-[13px] 2xl:text-sm flex items-center gap-5">
                  <span>
                    <svg
                     width="25"
                     height="25"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M12 13C13.6569 13 15 11.6569 15 10C15 8.34315 13.6569 7 12 7C10.3431 7 9 8.34315 9 10C9 11.6569 10.3431 13 12 13Z"
                        stroke="black"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M12 2C9.87827 2 7.84344 2.84285 6.34315 4.34315C4.84285 5.84344 4 7.87827 4 10C4 11.892 4.402 13.13 5.5 14.5L12 22L18.5 14.5C19.598 13.13 20 11.892 20 10C20 7.87827 19.1571 5.84344 17.6569 4.34315C16.1566 2.84285 14.1217 2 12 2V2Z"
                        stroke="black"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg>
                  </span>
                  Random Federation 115302, Berlin, Germany
                </li>
              </ul>
            </div>
            <div className="mt-8">
                <BlackButton label={'Contact Me'}/>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BusinessSidebar;
