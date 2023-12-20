import React, { useState } from "react";
import { Menu } from "../Sidebar/Menu";
import { Link, useLocation } from "react-router-dom";

const SideBar = () => {
  const location = useLocation();

  return (
    <div className=" ">
      <div>
        <div className="py-3 lg:px-0 px-5">
         <Link to={'/BusinessProfile'}>
         <button  className="text-sm text-white font-semibold leading-5  bg-black w-full font-Mont py-3 rounded-lg hover:bg-color-primary-yel hover:text-black transition-all duration-300">
            My Account
          </button>
         </Link>
        </div>
        <div className="lg:bg-white  rounded-xl ">
          <ul>
            {Menu.map((item, index) => (
              <li
                key={item.id}
                className={`group font-semibold font-Mont text-sm py-3
                  hover:bg-color-primary-yel hover:text-white first:hover:rounded-t-lg last:hover:rounded-b-lg
                  border-t border-b first:border-t-0 last:border-b-0 ${
                    location.pathname === item.path
                      ? "bg-color-primary-yel text-white first:rounded-t-lg last:rounded-b-xl"
                      : ""
                  }`}
              >
                <Link to={item.path} className="flex items-center gap-3 px-12">
                 
                <span>
                    {React.createElement(item.icon, {
                      className: `group-hover:fill-white ${item.id===1?'group-hover:fill-yellow-400 group-hover:stroke-white':''} ${
                        location.pathname === item.path ? " fill-white " : ""
                      } ${item.id ===1 && location.pathname === item.path ? 'stroke-white fill-yellow-400' : ""}   `,
                    })}
                  </span> 
                 

                  
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default SideBar;
