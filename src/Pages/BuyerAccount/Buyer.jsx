import React from "react";
import Dashboard from "../../Dashboard";
import Order_Tab from "../SellerAccount/Order_Tab";
import BreadCrums from "../../Component/BreadCrums";

const Buyer = () => {
  return (
    <Dashboard>
      <div className='lg:pl-3'>
        <div>
          <BreadCrums Crums="/ My Profile" Bread="Orders" />
        </div>
        <div className="md:pt-0 pt-3">
        <Order_Tab />
        </div>
      </div>
    </Dashboard>
  );
};

export default Buyer;
