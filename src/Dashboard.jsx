import React, { useState } from "react";
import Navbar from "./Component/NavBar/Navbar";
import SideBar from "./Component/Sidebar/SideBar";
import SubNav from "./Component/SubNav";

const Dashboard = ({ children }) => {
  const [open,setOpen] = useState(true)
  const profileToggle = ()=>{
    setOpen(!open);
  }
  return (
    <div>
     
     <div><Navbar profileToggle={profileToggle}/></div>
     <div className="w-full md:hidden  ">
      <SubNav/>
     </div>
      <div className="lg:px-2 xl:px-9 px-3">
      
        <div className="flex gap-3 justify-between items-baseline">
          <div className="w-1/4 lg:block hidden">
            <SideBar />
          </div>
          <div className=" lg:w-3/4 w-full" >{children}</div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
