import React from 'react'
const About_product=[
    {desc:'This product is 100% gate garden and which is made india.' },
    {desc:'In this gardening tools set 1 pc each of garden small trowel, big trowel, cultivator, i weeder and fork with pruners scissor and hand gloves.' },
    {desc:'Gate garden 5 spectacular gardening tools set with heavy gardening cut tool and one pair hand gloves by gate garden' },
    {desc:'Gate garden we are committed to producing top quality products that we know you will love. Non slip plastic handle' },
    {desc:'If for any reason you aren’t completely satisfied with your purchase, please contact us so that we can be of assistance.' },

]
const CancellationPolicy = () => {
  return (
   <>
   <div className='border-b border-[#92929D] pb-4'>
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
   </>
  )
}

export default CancellationPolicy