import React from "react";
const About_product=[
    {desc:'This product is 100% gate garden and which is made india.' },
    {desc:'In this gardening tools set 1 pc each of garden small trowel, big trowel, cultivator, i weeder and fork with pruners scissor and hand gloves.' },
    {desc:'Gate garden 5 spectacular gardening tools set with heavy gardening cut tool and one pair hand gloves by gate garden' },
    {desc:'Gate garden we are committed to producing top quality products that we know you will love. Non slip plastic handle' },
    {desc:'If for any reason you aren’t completely satisfied with your purchase, please contact us so that we can be of assistance.' },

]
const CompanyProductDetails = () => {
  return (
    <>
      <div className="mt-4 ">
        <div>
          {/* Section 1 ---------------------------------------*/}
          <div className="md:grid grid-cols-5 gap-5 items-start">
            <div className="col-span-2 ">
                <div>
                <div className="my-8">
                <h1 className="text-2xl font-Robot font-medium text-black ">
                Product Details
                </h1>
            </div>
                </div>
              <ul class=" ">
                <li className="  text-black font-Robot text-sm font-normal flex gap-3   ">
                  <span class="mt-1">
                    <svg
                      width="7"
                      height="7"
                      viewBox="0 0 10 10"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <circle cx="5" cy="5" r="5" fill="black" />
                    </svg>
                  </span>
                  This product is 100% Gate Garden and is made in India.
                </li>
                <li className=" my-2 text-black font-Robot text-sm font-normal flex gap-3   ">
                  <span class="mt-1">
                    <svg
                      width="7"
                      height="7"
                      viewBox="0 0 10 10"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <circle cx="5" cy="5" r="5" fill="black" />
                    </svg>
                  </span>
                  This product is 100% Gate Garden and is made in India.
                </li>
                <li className="  text-black font-Robot text-sm font-normal flex gap-3   ">
                  <span class="mt-1">
                    <svg
                      width="7"
                      height="7"
                      viewBox="0 0 10 10"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <circle cx="5" cy="5" r="5" fill="black" />
                    </svg>
                  </span>
                  This product is 100% Gate Garden and is made in India.
                </li>
                <li className=" my-2 text-black font-Robot text-sm font-normal flex gap-3   ">
                  <span class="mt-1">
                    <svg
                      width="7"
                      height="7"
                      viewBox="0 0 10 10"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <circle cx="5" cy="5" r="5" fill="black" />
                    </svg>
                  </span>
                  This product is 100% Gate Garden and is made in India.
                </li>
                <li className="  text-black font-Robot text-sm font-normal flex gap-3   ">
                  <span class="mt-1">
                    <svg
                      width="7"
                      height="7"
                      viewBox="0 0 10 10"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <circle cx="5" cy="5" r="5" fill="black" />
                    </svg>
                  </span>
                  This product is 100% Gate Garden and is made in India.
                </li>

              </ul>
            </div>
            <div className=" col-span-3   ">
            <div className="my-8">
                <h1 className="text-2xl font-Robot font-medium text-black ">
                About This Product
                </h1>
            </div>
            <div>
            <ul class=" ">
                {About_product.map((item,index)=>(
                    <>
                    <li className="  text-black font-Robot text-sm font-normal flex gap-3 even:my-2  ">
                  <span class="mt-1">
                    <svg
                      width="7"
                      height="7"
                      viewBox="0 0 10 10"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <circle cx="5" cy="5" r="5" fill="black" />
                    </svg>
                  </span>
                 {item.desc}
                </li>
                    </>
                ))}
                </ul>
            </div>
            </div>
          </div>
          {/* ------Section 2 ----------------------------------- */}
          <div className=" md:grid grid-cols-5">
            <div className="col-span-2 ">
            <div >
                <div>
                <div className="my-8">
                <h1 className="text-2xl font-Robot font-medium text-black ">
                Things to Know
                </h1>
            </div>
                </div>
              <ul class=" ">
                <li className="  text-black font-Robot text-sm font-normal flex gap-3   ">
                  <span class="mt-1">
                    <svg
                      width="7"
                      height="7"
                      viewBox="0 0 10 10"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <circle cx="5" cy="5" r="5" fill="black" />
                    </svg>
                  </span>
                  This product is 100% Gate Garden and is made in India.
                </li>
                <li className=" my-2 text-black font-Robot text-sm font-normal flex gap-3   ">
                  <span class="mt-1">
                    <svg
                      width="7"
                      height="7"
                      viewBox="0 0 10 10"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <circle cx="5" cy="5" r="5" fill="black" />
                    </svg>
                  </span>
                  This product is 100% Gate Garden and is made in India.
                </li>
                <li className="  text-black font-Robot text-sm font-normal flex gap-3   ">
                  <span class="mt-1">
                    <svg
                      width="7"
                      height="7"
                      viewBox="0 0 10 10"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <circle cx="5" cy="5" r="5" fill="black" />
                    </svg>
                  </span>
                  This product is 100% Gate Garden and is made in India.
                </li>
                <li className=" my-2 text-black font-Robot text-sm font-normal flex gap-3   ">
                  <span class="mt-1">
                    <svg
                      width="7"
                      height="7"
                      viewBox="0 0 10 10"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <circle cx="5" cy="5" r="5" fill="black" />
                    </svg>
                  </span>
                  This product is 100% Gate Garden and is made in India.
                </li>
                <li className="  text-black font-Robot text-sm font-normal flex gap-3   ">
                  <span class="mt-1">
                    <svg
                      width="7"
                      height="7"
                      viewBox="0 0 10 10"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <circle cx="5" cy="5" r="5" fill="black" />
                    </svg>
                  </span>
                  This product is 100% Gate Garden and is made in India.
                </li>

              </ul>
            </div>
            </div>
            <div className="col-span-3 ">
            <div className="my-8">
                <h1 className="text-2xl font-Robot font-medium text-black ">
                Other Details
                </h1>
            </div>
            <div>
                <div className="grid grid-cols-2 max-w-xs">
                        <div className="">
                        <h1 className="text-sm font-Robot font-medium text-black">Power Source :</h1>
                        </div>
                        <div className=" ">
                        <h1 className="text-sm font-Robot font-medium text-[#92929D]">No Power</h1>
                        </div>
                    {/* ----------------------------------------------------- */}
                    <div className=" my-2">
                        <h1 className="text-sm font-Robot font-medium text-black">Brand :</h1>
                        </div>
                        <div className="  my-2">
                        <h1 className="text-sm font-Robot font-medium text-[#92929D]">JetFire</h1>
                        </div>
                    {/* ----------------------------------------------------- */}
                    <div className="">
                        <h1 className="text-sm font-Robot font-medium text-black">Color :</h1>
                        </div>
                        <div className=" ">
                        <h1 className="text-sm font-Robot font-medium text-[#92929D]">Orange, Black</h1>
                        </div>
                    {/* ----------------------------------------------------- */}
                    <div className=" my-2">
                        <h1 className="text-sm font-Robot font-medium text-black">Metal :</h1>
                        </div>
                        <div className="  my-2">
                        <h1 className="text-sm font-Robot font-medium text-[#92929D]">Iron</h1>
                        </div>
                    {/* ----------------------------------------------------- */}
                </div>
            </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CompanyProductDetails;
