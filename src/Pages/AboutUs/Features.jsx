import React from "react";

const Features = () => {
  return (
    <>
      <section name="Features" >
        <div className="bg-[#FFC10E] lg:p-8 p-4">
          <div>
            <div className="max-w-2xl mx-auto px-4">
              <h1 className="font-Robot font-bold text-black text-4xl text-center ">
                Features
              </h1>
              <p className="font-Robot font-normal mg:text-lg text-sm text-center my-8">
                Eu minim movet quodsi eum. Et vim dolore epicurei, ut aeque
                postea nam, at posse dicta est.
              </p>
            </div>
            {/* ------------------------------ */}
            <div className="max-w-5xl mx-auto ">
              <div className="grid md:grid-cols-3 grid-cols-1 gap-6 mb-8 pt-6">
                <div className="bg-white px-6 py-16 lg:h-[370px] rounded-md shadow-lg">
                  <div>
                    <span className="flex justify-center">
                      <svg
                        width="100"
                        height="100"
                        viewBox="0 0 168 144"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fill-rule="evenodd"
                          clip-rule="evenodd"
                          d="M21.5061 0H146.494L163.159 30.3H167.325V60.6H159.75V143.925H8.25V60.6H0.675V37.875H0.674805L0.675 37.8746V30.3H4.84107L21.5061 0ZM13.4862 30.3H154.513L142.015 7.57498H25.9849L13.4862 30.3ZM8.2502 37.875V53.025H159.75V37.875L8.2502 37.875ZM53.7 60.6V75.75H114.3V60.6H53.7ZM46.125 60.6V83.325H121.875V60.6H152.175V136.35H15.825V60.6H46.125Z"
                          fill="#FFC10E"
                        />
                      </svg>
                    </span>
                    <h1 className="text-black font-bold text-xl mt-8 mb-4">
                      Product
                    </h1>
                    <p className="text-[#00000080] text-sm font-Robot font-normal">
                      Pro ad ubique erroribus, in modo mutat sed. Suscipit,
                      natum animal qui et.
                    </p>
                  </div>
                </div>
                {/* --------------------------------------------- */}
                <div className="bg-white px-6 py-16 rounded-md shadow-lg">
                  <div>
                    <span className="flex justify-center">
                      <svg
                        width="100"
                        height="100"
                        viewBox="0 0 182 163"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M72.5432 111.099L98.2469 119.667C98.2469 119.667 162.506 106.815 171.074 106.815C179.642 106.815 179.642 115.383 171.074 123.951C162.506 132.519 132.519 158.222 106.815 158.222C81.1111 158.222 63.9753 145.37 46.8395 145.37H4"
                          stroke="#FFC10E"
                          stroke-width="8"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                        <path
                          d="M4 93.963C12.5679 85.3951 29.7037 72.5432 46.8395 72.5432C63.9753 72.5432 104.673 89.679 111.099 98.2469C117.525 106.815 98.2469 119.667 98.2469 119.667"
                          stroke="#FFC10E"
                          stroke-width="8"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                        <path
                          d="M55.4072 46.8395V12.5679C55.4072 10.2956 56.3099 8.11628 57.9167 6.50948C59.5235 4.90269 61.7028 4 63.9751 4H166.79C169.062 4 171.242 4.90269 172.848 6.50948C174.455 8.11628 175.358 10.2956 175.358 12.5679V81.1111"
                          stroke="#FFC10E"
                          stroke-width="8"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                        <path
                          d="M93.9629 4H136.802V42.5556H93.9629V4Z"
                          stroke="#FFC10E"
                          stroke-width="8"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                      </svg>
                    </span>
                    <h1 className="text-black font-bold text-xl mt-8 mb-4">
                      Product Take
                    </h1>
                    <p className="text-[#00000080] text-sm font-Robot font-normal">
                      An mel everti invenire intellegam, legendos consequuntur
                      eu sit.
                    </p>
                  </div>
                </div>
                {/* --------------------------------------------- */}
                <div className="bg-white px-6 py-16 rounded-md shadow-lg">
                  <div>
                    <span className="flex justify-center">
                      <svg
                        width="100"
                        height="100"
                        viewBox="0 0 182 160"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fill-rule="evenodd"
                          clip-rule="evenodd"
                          d="M175.318 61.6992C176.795 60.1286 179.252 60.0893 180.795 61.5814C182.349 63.0734 182.407 65.5471 180.93 67.1176L155.06 94.642C154.301 95.4666 153.277 95.8592 152.254 95.8592C151.293 95.8592 150.332 95.5058 149.584 94.7598L122.423 68.5704C120.873 67.0784 120.811 64.6047 122.292 63.0341C123.768 61.4636 126.221 61.385 127.768 62.8771L149.239 83.6087C151.355 46.229 124.446 13.0112 87.2672 8.41729C68.5129 6.10069 49.9872 11.3229 35.1047 23.1022C20.226 34.8815 10.7694 51.8438 8.48274 70.8478C6.1961 89.8518 11.3507 108.62 22.9971 123.698C34.6435 138.775 51.3824 148.356 70.1406 150.672C99.0531 154.245 126.822 139.835 140.802 113.882C141.829 111.997 144.185 111.29 146.065 112.35C147.941 113.371 148.634 115.766 147.607 117.651C133.659 143.526 107.386 159.075 78.8919 159.075C75.6828 159.075 72.4505 158.879 69.2027 158.486C48.3866 155.895 29.8105 145.293 16.889 128.567C3.96759 111.84 -1.74901 90.9904 0.789548 69.9054C3.32423 48.8204 13.8156 30.0127 30.326 16.8984C46.8363 3.82335 67.3695 -1.98779 88.2051 0.603667C128.454 5.59025 157.944 40.7712 157.184 81.0173L175.318 61.6992ZM44.9534 96.6267V102.262H74.1626V95.8995H55.8008C57.6996 94.3643 59.659 92.6978 61.679 90.9C63.699 89.1021 65.5776 87.1731 67.3148 85.1127C69.052 83.0522 70.4559 80.9111 71.5265 78.6891C72.5971 76.467 73.1324 74.1845 73.1324 71.8413C73.1324 68.084 71.9305 65.0238 69.5267 62.6604C67.1229 60.2969 63.7596 59.1153 59.4368 59.1153C56.7704 59.1153 54.3666 59.6304 52.2254 60.6606C50.0842 61.6908 48.3672 63.2461 47.0744 65.3268C45.7816 67.4074 45.0948 70.003 45.014 73.1139H52.5284C52.5284 71.0534 53.094 69.2961 54.2252 67.8417C55.3564 66.3873 57.033 65.6601 59.255 65.6601C61.4366 65.6601 63.0021 66.3267 63.9515 67.6599C64.9009 68.9931 65.3756 70.5283 65.3756 72.2655C65.3756 74.1239 64.7999 76.0327 63.6485 77.9922C62.4971 79.9516 60.9619 81.9614 59.0429 84.0219C57.1239 86.0823 54.9423 88.1628 52.4981 90.2637C50.0539 92.3645 47.539 94.4854 44.9534 96.6267ZM99.979 94.3845V102.262H107.736V94.3845H113.311V87.6579H107.736V59.8425H98.9488L79.072 88.2033V94.3845H99.979ZM100.463 87.6579H87.3732L100.463 68.3871V87.6579Z"
                          fill="#FFC10E"
                        />
                      </svg>
                    </span>
                    <h1 className="text-black font-bold text-xl mt-8 mb-4">
                      Support
                    </h1>
                    <p className="text-[#00000080] text-sm font-Robot font-normal">
                      Diam facilisi insolens per cu, eos malorum voluptaria ei.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Features;
