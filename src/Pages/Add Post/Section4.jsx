import React from "react";
import ShareField from "../../Component/Shared/ShareField";
import SharedSelect from "../../Component/Shared/SharedSelect";
const City = [
  { value: "Islamabad", label: "Islamabad" },
  { value: "Faisalabad", label: "Faisalabad" },
  { value: "Lahore", label: "Lahore" },
];
const Country = [
  { value: "Pakistan", label: "Pakistan" },
  { value: "China", label: "China" },
  { value: "India", label: "India" },
];
const Section4 = ({ formik }) => {
  return (
    <div>
      <div className="py-4">
        <div className="py-2">
          <h1 className="text-xl 2xl:text-2xl font-Mont font-semibold text-black">
            Vendor details
          </h1>
        </div>
        <div className="bg-white md:px-6 px-4 rounded-lg py-5">
          <div className="md:grid grid-cols-2 gap-16">
            <div>
              <ShareField
                name="Vendor_Name"
                onChange={formik.handleChange}
                value={formik.values.Vendor_Name}
                label={"Name"}
                color={"text-[#92929D]"}
                textsize={"text-sm"}
                fontweight={"font-semibold"}
              />
            </div>
            <div className="md:pt-0 pt-3">
              <ShareField
                name="Vendor_street"
                onChange={formik.handleChange}
                value={formik.values.Vendor_street}
                label={"Street, No.*"}
                color={"text-[#92929D]"}
                textsize={"text-sm"}
                fontweight={"font-semibold"}
              />
            </div>
          </div>
          <div className="md:grid grid-cols-2 gap-16 mt-4">
            <div>
              <ShareField
                name="Vendor_Phone"
                onChange={formik.handleChange}
                value={formik.values.Vendor_Phone}
                label={"Phone Number"}
                color={"text-[#92929D]"}
                textsize={"text-sm"}
                fontweight={"font-semibold"}
              />
            </div>
            <div className="mt-5 2xl:mt-7">
              <ShareField />
            </div>
          </div>
          <div className="md:grid grid-cols-2 gap-16 mt-3 items-center">
            <div>
              <ShareField
                name="Vendor_Description"
                onChange={formik.handleChange}
                value={formik.values.Vendor_Description}
                label={"Description"}
                color={"text-[#92929D]"}
                textsize={"text-sm"}
                fontweight={"font-semibold"}
              />
            </div>
            <div>
              <div className="md:grid grid-cols-3 items-center gap-4 ">
                <div className="md:pt-0 pt-3">
                  <ShareField
                    name='Vendor_Postcode'
                    onChange={formik.handleChange}
                    value={formik.values.Vendor_Postcode}
                    
                    label={"Postcode*"}
                    color={"text-[#92929D]"}
                    textsize={"text-sm"}
                    fontweight={"font-semibold"}
                    placeholder="Text Here"
                  />
                </div>
                <div className="md:pt-0 pt-3">
                  <SharedSelect
                    onChange={(selectedOption) =>
                      formik.setFieldValue("Vendor_City", selectedOption.value)
                    }
                    label={"City*"}
                    Values={City}
                    textcolor={"text-[#92929D]"}
                    textsize={"text-sm"}
                  />
                </div>
                <div>
                  <SharedSelect
                    onChange={(selectedOption) => (
                      formik.setFieldValue("Vendor_Country",
                      selectedOption.value)
                    )}
                    label={"Country*"}
                    Values={Country}
                    textcolor={"text-[#92929D]"}
                    textsize={"text-sm"}
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

export default Section4;
