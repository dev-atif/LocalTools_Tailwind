import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import image from '../../SellerAccount/MessagTab/UserImages/icon_1area.png'
import image2 from '../../SellerAccount/MessagTab/UserImages/icon_2area.png'
import image3 from '../../SellerAccount/MessagTab/UserImages/icon_3area.png'
import image4 from '../../SellerAccount/MessagTab/UserImages/icon_4area.png'
import image5 from '../../SellerAccount/MessagTab/UserImages/icon_5area.png'

const users=[
    {
        name:'Christian Alonso',
        message:"Hello!, What's up?",
        image:image,
        time:'12:30',
    },
    {
        name:'Óscar Óbil',
        message:"Did you read this?",
        image:image2,
        time:'11:25',
    },
    {
        name:'Hernán López',
        message:"Is about the previous...?",
        image:image3,
        time:'11:10',
    },
    {
        name:'Iván Chiguil',
        message:"The review was left yesterday",
        image:image4,
        time:'10:30',
    },
    {
        name:'Dante Ortega',
        message:"Hi!",
        image:image5,
        time:'09:00',
    },
]
const UserSection = () => {
    const [open,setOpen] = useState(false)
    const [selectedUserIndex, setSelectedUserIndex] = useState(2);

  return (
    <div >
      <div className="py-4">
        <div className="flex items-center justify-between relative px-4 2xl:px-9 pb-2">
          <div className="flex items-center gap-1">
            <h1 className="text-[#666666] font-Robot font-medium  text-base">
              Chats
            </h1>
            <div className="bg-color-primary-yel rounded-full text-white p-2 h-[16px] w-[8px] relative">
              <span class="text-sm absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                1
              </span>
            </div>
          </div>
          <div className="">
            <svg
              width="12"
              height="8"
              viewBox="0 0 12 8"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="cursor-pointer"
              onClick={()=>{setOpen(!open)}}
            >
              <path
                d="M6 0.25L0 6.25L1.41 7.66L6 3.08L10.59 7.66L12 6.25L6 0.25Z"
                fill="#666666"
              />
            </svg>
            {open && (
                <div className="bg-white rounded-lg shadow-lg absolute top-[70%] 2xl:left-1/3 2xl:w-2/3 w-1/2 right-[2%]">
                <ul className="text-color-primary-gr text-base 2xl:text-lg px-3 py-2">
                  <li className="py-2">
                    <Link>Sellect All</Link>
                  </li>
                  <li className="py-2">
                    <Link>Mark all as Read</Link>
                  </li>
                </ul>
              </div>
            )}
          </div>
        </div>
       {
        users.map((item,index)=>(
            <div  className={`flex justify-between px-2  2xl:px-7 py-2 ${
                selectedUserIndex === index ? 'bg-[#FFC10E] text-white' : 'text-[#666666]'
              }`}
              key={index}
              onClick={() => setSelectedUserIndex(index)}>
            {/* <!-- Chat Section --> */}
            <div className=" flex items-center  ">
                <div>
                    <img src={item.image}/>
                </div>
                <div>
                    <h1 className="font-Robot font-medium text-sm ">
                   {item.name}
                    </h1>
                    <h2 className="font-Robot font-light text-sm ">
                   {item.message}
                    </h2>
                </div>
            </div>
            <div className="flex flex-col items-center justify-center gap-1">
                    <div className={`w-2 h-2 bg-[#66666629] ${index === 0 ? 'first:bg-[#2A4494]' : ''} rounded-full`}>
                        <span></span>
                    </div>
                    <div>
                        <h4 className="font-Robot font-light text-xs ">
                        {item.time}
                        </h4>
                    </div>
            </div>
        </div>
        ))
       }
      </div>
    </div>
  );
};

export default UserSection;
