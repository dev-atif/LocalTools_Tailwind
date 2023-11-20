import React, { useState } from "react";
import ShareField from "../../Component/Shared/ShareField";
import BlackButton from "../../Component/Shared/BlackButton";
import { MdClose } from "react-icons/md";

const CustomDetails = ({ formik }) => {
  const [customDetails, setCustomDetails] = useState([
    { label: "", value: "" }, // Initial field
  ]);

  const addMoreFields = () => {
    setCustomDetails([...customDetails, { label: "", value: "" }]);
  };

  const removeField = (indexToRemove) => {
    if (customDetails.length > 1) {
      // Only remove if there is more than one field
      const updatedDetails = customDetails.filter(
        (_, index) => index !== indexToRemove
      );
      setCustomDetails(updatedDetails);

      // Remove the field from formik array without modifying its values
      const updatedFormikArray = formik.values.customDetails.slice();
      updatedFormikArray.splice(indexToRemove, 1);
      formik.setFieldValue("customDetails", updatedFormikArray);
    }
  };

  const handleRemoveField = (index) => {
    removeField(index);
  };

  return (
    <div>
      <div>
        <div className="py-3">
          <h1 className="text-xl 2xl:text-2xl font-Mont font-semibold text-black">
            Add Custom Details
          </h1>
        </div>
        <div className="bg-white p-4 rounded-lg">
          <div className=" md:grid grid-cols-3 items-center lg:gap-10 md:gap-5">
            <div className="grid col-span-2">
              {customDetails.map((_, index) => (
                <div
                  key={index}
                  className="md:grid grid-cols-2 lg:gap-10 md:gap-5 items-center mt-4 first:mt-0"
                >
                  <div>
                    <ShareField
                      name={`customDetails[${index}].label`}
                      onChange={formik.handleChange}
                      value={formik.values.customDetails[index]?.label || ""}
                      label={"Label"}
                      placeholder={"Text Here"}
                      fontweight={"font-semibold"}
                      textsize={"text-base"}
                      placeholderColor={"placeholder-black"}
                    />
                  </div>
                  <div className="md:pt-0 pt-3 ">
                    <ShareField
                      name={`customDetails[${index}].value`}
                      onChange={formik.handleChange}
                      value={formik.values.customDetails[index]?.value || ""}
                      label={"Value"}
                      placeholder={"Text Here"}
                      fontweight={"font-semibold"}
                      textsize={"text-base"}
                      placeholderColor={"placeholder-black"}
                    />
                  </div>
                  {/*  <button onClick={()=>removeField(index)}>remove</button> */}
                </div>
              ))}
            </div>

            <div>
              <div className="grid grid-cols-2 items-center mt-6 lg:gap-6 gap-3">
                <div>
                  <BlackButton
                    type="button"
                    Onclick={() => handleRemoveField(customDetails.length - 1)}
                    Padding={"None"}
                    label={"Remove"}
                    icon={MdClose}
                  />
                </div>
                <div>
                  <BlackButton
                    type="button"
                    Onclick={() => addMoreFields()}
                    Padding={"None"}
                    bgColor={"yellow"}
                    label={"Add More"}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CustomDetails;
