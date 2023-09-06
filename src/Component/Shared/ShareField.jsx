import React from "react";

const ShareField = ({label,color,textsize,fontweight,placeholder,placeholderColor}) => {
  return (
    <div className=" flex flex-col ">
      <label className={`  2xl:text-lg font-Mont font-medium ${color} ${textsize} ${fontweight}`}>
        {label}
      </label>
      <input
        type="text"
        className={`border border-[#00005B] rounded-lg focus:outline-none p-2 ${fontweight}  w-full text-black text-base ${placeholderColor}` }
     placeholder={placeholder} />
    </div>
  );
};

export default ShareField;
