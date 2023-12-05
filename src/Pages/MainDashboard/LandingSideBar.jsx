import React from "react";
import { Link } from "react-router-dom";
import Agriculture_Svg from "./Main Dashboard Svgs/Agriculture_Svg";
import Car_Svg from "./Main Dashboard Svgs/Car_Svg";
import Concret_Svg from "./Main Dashboard Svgs/Concret_Svg";
import Cunstruction_Svg from "./Main Dashboard Svgs/Cunstruction_Svg";
import Drying_Svg from "./Main Dashboard Svgs/Drying_Svg";
import Foresting_Svg from "./Main Dashboard Svgs/Foresting_Svg";
import Garden_Svg from "./Main Dashboard Svgs/Garden_Svg";
import Hand_Svg from "./Main Dashboard Svgs/Hand_Svg";
import Kfz_svg from "./Main Dashboard Svgs/Kfz_svg";
import LiftFrame_Svg from "./Main Dashboard Svgs/LiftFrame_Svg";
import Loader_Svg from "./Main Dashboard Svgs/Loader_Svg";
import Measuring_Svg from "./Main Dashboard Svgs/Measuring_Svg";
import Pump_Svg from "./Main Dashboard Svgs/Pump_Svg";
import Rottel_Svg from "./Main Dashboard Svgs/Rottel_Svg";
import SmallApplication_svg from "./Main Dashboard Svgs/SmallApplication_svg";

const LandingSideBar = () => {
  return (
    <>
      <div>
        <div className="px-2 md:px-0">
          <ul>
            {LandingMenu.map((item, index) => (
              <li
                className="font-Mont font-semibold text-sm border-b group hover:bg-color-primary-yel 
               hover:text-white  first:rounded-t-lg  last:rounded-b-lg"
              >
                <Link className="flex items-center gap-3 px-2 2xl:px-6  py-3">
                  <span>
                    {" "}
                    {React.cloneElement(<item.svg />, {
                      className: `group-hover:fill-white group-hover:stroke-white ${
                        item.id === 7
                          ? "group-hover:stroke-white group-hover:fill-none "
                          : ""
                      } `,
                    })}
                  </span>
                  <span>{item.name}</span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
};

export default LandingSideBar;

const LandingMenu = [
  {
    id: 1,
    name: "Agricultural machinery",
    path: "/Agriculturalmachinery",
    svg: Agriculture_Svg,
  },
  {
    id: 2,
    name: "Car/Truck trailer",
    path: "/Car/Truck trailer",
    svg: Car_Svg,
  },
  {
    id: 3,
    name: "Concrete Drill",
    path: "/ConcreteDrill",
    svg: Concret_Svg,
  },
  {
    id: 4,
    name: "Construction machinery",
    path: "/Constructionmachinery",
    svg: Cunstruction_Svg,
  },
  {
    id: 5,
    name: "Drying and heating devices",
    path: "/Dryingandheatingdevices",
    svg: Drying_Svg,
  },
  {
    id: 6,
    name: "Foresting machines",
    path: "/Forestingmachines",
    svg: Foresting_Svg,
  },
  {
    id: 7,
    name: "Garden tool",
    path: "/Garden tool",
    svg: Garden_Svg,
  },
  {
    id: 8,
    name: "Hand tools",
    path: "/Handtools",
    svg: Hand_Svg,
  },
  {
    id: 9,
    name: "KFZ tool",
    path: "/KFZtool",
    svg: Kfz_svg,
  },
  {
    id: 10,
    name: "Lift frame/hoist",
    path: "/Liftframe/hoist",
    svg: LiftFrame_Svg,
  },
  {
    id: 11,
    name: "Loader & Roller Shutter",
    path: "/Loader&RollerShutter",
    svg: Loader_Svg,
  },
  {
    id: 12,
    name: "Measuring device",
    path: "/Measuringdevice",
    svg: Measuring_Svg,
  },
  {
    id: 13,
    name: "Pump",
    path: "/Pump",
    svg: Pump_Svg,
  },

  {
    id: 14,
    name: "Röttelplatten & Compaction",
    path: "/Röttelplatten&Compaction",
    svg: Rottel_Svg,
  },
  {
    id: 15,
    name: "Small Appliances for Metal Wood",
    path: "/SmallAppliancesforMetalWood",
    svg: SmallApplication_svg,
  },
];
