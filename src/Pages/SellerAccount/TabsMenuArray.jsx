import React, { useRef, useState } from "react";
import Dashboard from "../../Dashboard";
import Seller_tab from "./Seller_tab";
import Order_Tab from "./Order_Tab";
import Message_tab from "./Message_tab";
import Invetory_Tab from "./Invetory_Tab";
import Analytics_tabs from "./Analytics_tabs";
import Seller_Tab_SVG from "./Tabs SVG/Seller_Tab_SVG";
import Order_Tab_SVG from "./Tabs SVG/Order_Tab_SVG";
import Message_Tab_SVG from "./Tabs SVG/Message_Tab_SVG";
import Inventory_Tab_SVG from "./Tabs SVG/Inventory_Tab_SVG";
import Analytic_Tab_SVG from "./Tabs SVG/Analytic_Tab_SVG";

const tabs = [
  {
    id: 1,
    label: "Seller Profile",
    icon: Seller_Tab_SVG,
    content: Seller_tab,
  },
  {
    id: 2,
    label: "Orders",
    icon: Order_Tab_SVG,
    content: Order_Tab,
  },
  {
    id: 3,
    label: "Messages",
    icon:Message_Tab_SVG,
    content: Message_tab,
  },
  {
    id: 4,
    label: "Invetory",
    icon:Inventory_Tab_SVG,
    content: Invetory_Tab,
  },
  {
    id: 5,
    label: "Analytics",
    icon:Analytic_Tab_SVG,
    content: Analytics_tabs  ,
  },
];

const TabsMenuArray = () => {
  const [activeTab, setActiveTab] = useState(tabs[0].id);

  const tabsContainerRef = useRef(null);

  const handleClick = (tabId) => {
    setActiveTab(tabId);
    //this is for when user click on tab it display other tab and clicked tab as a first tab
    const tabButton = document.getElementById(`tab-${tabId}`);
    if (tabButton && tabsContainerRef.current) {
      tabsContainerRef.current.scrollLeft = tabButton.offsetLeft - 10;
    }
  };

  return (
    <div>
      <div >
        <div  ref={tabsContainerRef} className="md:flex flex-wrap  inline-block  w-full  gap-3 pt-7 border-gray-200 whitespace-nowrap  overflow-x-scroll md:overflow-hidden  ">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              id={`tab-${tab.id}`}
              onClick={() => handleClick(tab.id)}
              className={`${
                tab.id === activeTab
                  ? "bg-black text-white"
                  : "bg-white text-black"
              } md:py-2 py-3 transition-all duration-500   text-sm xl:w-44 lg:w-[8.4rem] 2xl:w-[18.8%] rounded-lg  w-36 mr-3 md:mr-0 font-semibold `}
            >
              <span className="flex items-center  gap-2 justify-start pl-4">
              {React.cloneElement(<tab.icon/>, {
                  fill: tab.id === activeTab ? 'white' : 'black', 
                  width: 20, // You can adjust the width and height as needed
                  height: 20,
                })}
                {tab.label}
              </span>
            </button>
          ))}
        </div>
        <div>
          {tabs.map((tab) => (
            <div
              key={tab.id}
              className={`${
                tab.id === activeTab ? "block" : "hidden"
              } border-1 border-black ${tab.id === activeTab ? "fade-in-slide-up" : ""}`}
            
            >
              {<tab.content/>}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TabsMenuArray;
