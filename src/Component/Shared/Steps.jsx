import React from 'react'

const Steps = () => {
  return (
  <>
  <div>
  <div className="max-w-3xl mx-auto border border-[#E1E1E1] pb-12 pt-4 rounded-lg">
           

           <div class="after:mt-4 after:block after:h-1 after:w-full after:rounded-lg after:bg-[#26A547] max-w-lg mx-auto">
             <ol class="grid grid-cols-3 text-sm font-medium text-green-500 relative">
               <li class="relative flex  justify-start text-green-600">
               
                 <span class="absolute -bottom-[1.75rem] start-0 rounded-full bg-green-600 text-white">
                   <svg
                     class="h-5 w-5"
                     xmlns="http://www.w3.org/2000/svg"
                     viewBox="0 0 20 20"
                     fill="currentColor"
                   >
                     {/*   <!-- SVG path code here --> */}
                   </svg>
                 </span>

                 <span className=" text-black text-start text-base 2xl:text-lg font-semibold font-Mont"> Delivered </span>
                 <span class="absolute top-14 -ml-10 text-center   text-sm font-Mont font-semibold  text-[#92929D]">Mon, 15th May 2023</span>
         
                 
               </li>

               <li class="relative flex justify-center text-green-600">
                 <span class="absolute -bottom-[1.75rem] left-1/2 -translate-x-1/2 rounded-full bg-green-600 text-white">
                   <svg
                     class="h-5 w-5"
                     xmlns="http://www.w3.org/2000/svg"
                     viewBox="0 0 20 20"
                     fill="currentColor"
                   >
                     {/*  <!-- SVG path code here --> */}
                   </svg>
                 </span>

                 <span className=" text-black text-start text-base 2xl:text-lg font-semibold font-Mont"> Returned </span>
                 <span class="absolute top-14  text-center   text-sm font-Mont font-semibold  text-[#92929D]">Tue, 16th May 2023</span>
               </li>

               <li class="relative flex justify-end">
                 <span class="absolute -bottom-[1.75rem] end-0 rounded-full bg-green-600 text-white">
                   <svg
                     class="h-5 w-5"
                     xmlns="http://www.w3.org/2000/svg"
                     viewBox="0 0 20 20"
                     fill="currentColor"
                   >
                     {/*   <!-- SVG path code here --> */}
                   </svg>
                 </span>
                 <span class="absolute top-14  -mr-12   text-sm font-Mont font-semibold  text-[#92929D]">Fri, 3rd Jun 2023</span>
                 <span className=" text-black text-start text-base 2xl:text-lg font-semibold font-Mont"> Ordered </span>

               
               </li>
             </ol>
           </div>
         </div>
  </div>
  </>
  )
}

export default Steps