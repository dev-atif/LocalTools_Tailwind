import React from "react";
const inputs = [
  {
    label: "Username",
    placeholder: "Enter Username",
  },
  {
    label: "Name",
    placeholder: "Enter Name",
  },
  {
    label: "Email",
    placeholder: "Enter Email",
  },
  {
    label: "Mobile No.",
    placeholder: "Enter Mobile No.",
  },
  {
    label: "City",
    placeholder: "Enter City",
  },
  {
    label: "Zip Code",
    placeholder: "Enter Zip Code",
  },
  {
    label: "State",
    placeholder: "Enter State",
  },

  {
    label: "Country",
    placeholder: "Enter Country",
  },
];
const Inputs = () => {
  return (
    <div>
      <div className="lg:flex flex-wrap gap-4">
        {inputs.map((item, index) => (
          <div key={index}>
            <div className="flex flex-col mt-4 lg:mt-0 lg:w-60 xl:w-72 2xl:w-80  ">
              <span className="text-color-primary-gr">{item.label}</span>
              <input
                type="text"
                className="border border-[#00005B] rounded-lg focus:outline-none p-2 mt-1 text-black placeholder:text-sm"
              placeholder={item.placeholder}/>
            </div>

           
          </div>
        ))}
      </div>
      <div className="xl:w-2/3 xl:ml-20  py-5  " >
       
        <div className=" flex justify-evenly ">
            <button className="text-sm font-Mont bg-black font-semibold text-white py-2 rounded-lg w-[150px] hover:bg-color-primary-yel hover:text-white transition-all">
            Save Changes
            </button>
            <button className="text-sm py-2 xl:mr-0 lg:mr-5 mr-0 font-Mont bg-transparent border border-black font-semibold text-black w-[150px] rounded-lg  hover:bg-black hover:text-white transition-all"> 
            Cancel
            </button>
        </div>
       
      </div>
      </div>
   
  );
};

export default Inputs;
