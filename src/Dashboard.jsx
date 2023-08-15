import React from "react";
import Navbar from "./Component/NavBar/Navbar";
import SideBar from "./Component/Sidebar/SideBar";
import SubNav from "./Component/SubNav";

const Dashboard = ({ children }) => {
  return (
    <div>
      <div className="w-full md:hidde  ">
      <SubNav/>
     </div>
      <div className="lg:px-2 xl:px-9 px-3">
      
        <div className="flex gap-3 justify-between items-baseline">
          <div className="w-1/4 lg:block hidden">
            <SideBar />
          </div>
          <div className=" lg:w-3/4 w-full">{children}</div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
