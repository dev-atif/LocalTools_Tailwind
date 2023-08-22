import React, { useRef, useState } from "react";
import Order_Tab_SVG from "../SellerAccount/Tabs SVG/Order_Tab_SVG";
import Message_Tab_SVG from "../SellerAccount/Tabs SVG/Message_Tab_SVG";
import Inventory_Tab_SVG from "../SellerAccount/Tabs SVG/Inventory_Tab_SVG";
import Analytic_Tab_SVG from "../SellerAccount/Tabs SVG/Analytic_Tab_SVG";
import Seller_tab from "../SellerAccount/Seller_tab";
import Order_Tab from "../SellerAccount/Order_Tab";
import Message_tab from './../SellerAccount/Message_tab';
import OrderTab from "./OrderTab";
import InvoiceTable from "../SellerAccount/Invoice/InvoiceTable";
import Invetory_Tab from "../SellerAccount/Invoice/Invetory_Tab";
import AnalyticsBuyer from "./AnalyticsBuyer";
const Buyertabs = [
  {
    id: 1,
    label: "Orders",
    icon: Order_Tab_SVG,
  },
  {
    id: 2,
    label: "Messages",
    icon: Message_Tab_SVG,
  },
  {
    id: 3,
    label: "Invoice",
    icon: Inventory_Tab_SVG,
  },
  {
    id: 4,
    label: "Analytics",
    icon: Analytic_Tab_SVG,
  },
];
const BuyerTabs = () => {
  const [activeTab, setActiveTab] = useState(Buyertabs[0].id);
  const tabsContainerRef = useRef(null);
  const handleClick = (tabId) => {
    setActiveTab(tabId);
    // Similar logic for scrolling as in your original code
    // ...
  };
  return (
    <div>
      <div>
        <div>
          <div
            ref={tabsContainerRef}
            className="md:flex flex-wrap  inline-block  w-full  gap-3 pt-7 border-gray-200 whitespace-nowrap  overflow-x-scroll md:overflow-hidden  "
          >
            {Buyertabs.map((tab) => (
              <button
                key={tab.id}
                id={`tab-${tab.id}`}
                onClick={() => handleClick(tab.id)}
                className={`${
                  tab.id === activeTab
                    ? "bg-black text-white"
                    : "bg-white text-black"
                } md:py-2 py-3 transition-all duration-150   text-sm xl:w-44 lg:w-[8.4rem] 2xl:w-[18.8%] rounded-lg  w-36 mr-3 md:mr-0 font-semibold `}
              >
                <span className="flex items-center  gap-2 justify-start pl-4">
                  {React.cloneElement(<tab.icon />, {
                    fill: tab.id === activeTab ? "white" : "black",
                    width: 20, // You can adjust the width and height as needed
                    height: 20,
                  })}
                  {tab.label}
                </span>
              </button>
            ))}
          </div>
          {/* The content of each tab will be rendered here */}
          <div
            className={`${
              activeTab === 1 ? "block" : "hidden"
            } border-1 border-black ${
              activeTab === 1 ? "fade-in-slide-up" : ""
            }`}
          >
            
            <OrderTab/>
          </div>
          {/* Second */}
          <div
            className={`${
              activeTab === 2 ? "block" : "hidden"
            } border-1 border-black ${
              activeTab === 2 ? "fade-in-slide-up" : ""
            }`}
          >
            <Message_tab/>
          </div>
          {/* Third */}
          <div
            className={`${
              activeTab === 3 ? "block" : "hidden"
            } border-1 border-black ${
              activeTab === 3 ? "fade-in-slide-up" : ""
            }`}
          >
            <Invetory_Tab/>
          </div>
           {/* Fourth */}
           <div
            className={`${
              activeTab === 4  ? "block" : "hidden"
            } border-1 border-black ${
              activeTab === 4 ? "fade-in-slide-up" : ""
            }`}
          >
           <AnalyticsBuyer/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BuyerTabs;
