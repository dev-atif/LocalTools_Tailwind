import React from "react";
import SharedSelect from "./Shared/SharedSelect";
import ShareField from "./Shared/ShareField";
const Currency = [
  { value: "1", label: "Euro" },
  { value: "2", label: "Dollar" },
  { value: "3", label: "Rupees" },
];
const Time = [
  { value: "1", label: "Hourly" },
  { value: "2", label: "Daily" },
  { value: "3", label: "Weekly" },
  { value: "4", label: "Monthly" },
];
const Cat = [
  { value: "1", label: "Heavy Machine" },
  { value: "2", label: "Light Machine" },
];

const SubCat = [
  { value: "1", label: "Heavy Machine" },
  { value: "2", label: "Light Machine" },
];
const Brand = [
  { value: "1", label: "Heavy Machine" },
  { value: "2", label: "Light Machine" },
];

const Section3 = () => {
  return (
    <div >
      <div className="py-3">
        <h1 className="text-xl 2xl:text-2xl font-Mont font-semibold text-black">
          Price
        </h1>
      </div>
      <div className="bg-white px-4 rounded-lg py-3">
        <div className="md:grid grid-cols-5 items-center gap-4">
          <div>
            <SharedSelect
              label="Currency"
              Value={Currency}
              textsize="text-sm"
            />
          </div>
          <div>
            <SharedSelect label="Rented As a" Value={Time} textsize="text-sm" />
          </div>
          <div>
            <ShareField
              label="Rent Price"
              color={"text-black"}
              textsize={"text-sm"}
              fontweight={"font-semibold"}
            />
          </div>
          <div>
            <ShareField
              label="Taxes"
              color={"text-black"}
              textsize={"text-sm"}
              fontweight={"font-semibold"}
            />
          </div>
          <div>
            <ShareField
              label="Service Fee"
              color={"text-black"}
              textsize={"text-sm"}
              fontweight={"font-semibold"}
            />
          </div>
        </div>
      </div>
      <div className="">
        <div className="md:grid grid-cols-3 gap-4">
          <div>
            <h1 className="font-Mont font-semibold text-xl 2xl:text-2xl text-black py-2">
              Category
            </h1>
           <div className="px-4 bg-white rounded-lg py-2">
           <SharedSelect Value={Cat} placeholder={"Select Categories"} />
           </div>
          </div>
          <div>
            <h1 className="font-Mont font-semibold text-xl 2xl:text-2xl text-black py-2">
            Sub - Category
            </h1>
           <div className="px-4 bg-white rounded-lg py-2">
           <SharedSelect Value={Cat} placeholder={"Select Sub - Categories"} />
           </div>
          </div>
          <div>
            <h1 className="font-Mont font-semibold text-xl 2xl:text-2xl text-black py-2">
            Brand
            </h1>
           <div className="px-4 bg-white rounded-lg py-2">
           <SharedSelect Value={Cat} placeholder={"Select Brand"} />{/*  */}
           </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section3;
