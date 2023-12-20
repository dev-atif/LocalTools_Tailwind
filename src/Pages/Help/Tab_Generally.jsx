import React from 'react'
const question = [
    {
        question:'What is “secure payment” - how does the buyer protection of eBay classifieds work?'
    },
    {
        question:'What is “secure payment” - how does the buyer protection of eBay classifieds work?'
    },
    {
        question:'What is “secure payment” - how does the buyer protection of eBay classifieds work?'
    },
    {
        question:'What is “secure payment” - how does the buyer protection of eBay classifieds work?'
    },
    {
        question:'What is “secure payment” - how does the buyer protection of eBay classifieds work?'
    },
    {
        question:'What is “secure payment” - how does the buyer protection of eBay classifieds work?'
    },

]
const Tab_Generally = () => {
  return (
   <>
   <div>
    <div>
            {question.map((item,index)=>(
                <>
                <div key={index} className='even:my-2'>
                    <p className='text-[#4244E6] font-Robot font-medium md:text-base text-xs '>{item.question}</p>
                </div>
                </>
            ))}
    </div>
   </div>
   </>
  )
}

export default Tab_Generally