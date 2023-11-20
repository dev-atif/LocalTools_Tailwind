import React from "react";
import SharedSelect from "../../Component/Shared/SharedSelect";
import ShareField from "../../Component/Shared/ShareField";
const Currency = [
  { value: "Euro", label: "Euro" },
  { value: "Dollar", label: "Dollar" },
  { value: "Rupees", label: "Rupees" },
];
const Time = [
  { value: "Hourly", label: "Hourly" },
  { value: "Daily", label: "Daily" },
  { value: "Weekly", label: "Weekly" },
  { value: "Monthly", label: "Monthly" },
];
const Cat = [
  { value: "Heavy Machine", label: "Heavy Machine" },
  { value: "Light Machine", label: "Light Machine" },
];

const SubCat = [
  { value: "Drill", label: "Drill" },
  { value: "Crawler Excavators", label: "Crawler Excavators" },
];
const Brand = [
  { value: "Caterpillar", label: "Caterpillar" },
  { value: "Komatsu", label: "Komatsu" },
  { value: "Volvo", label: "Volvo" },
];

const Section3 = ({ formik }) => {
  return (
    <div>
      <div className="py-3">
        <h1 className="text-xl 2xl:text-2xl font-Mont font-semibold text-black">
          Price
        </h1>
      </div>
      <div className="bg-white px-4 rounded-lg py-3">
        <div className="md:grid grid-cols-5 items-center gap-4">
          <div>
            <SharedSelect
              name="Currency"
              label="Currency"
              onChange={(selectedOption) =>
                formik.setFieldValue("Currency", selectedOption.value)
              }
              Values={Currency}
              textsize="text-sm"
            />
          </div>
          <div>
            <SharedSelect
              name="Rented_as"
              onChange={(selectedOption) =>
                formik.setFieldValue("Rented_as", selectedOption.value)
              }
              label="Rented As a"
              Values={Time}
              textsize="text-sm"
            />
          </div>
          <div>
            <ShareField
              name="Rented_Price"
              value={formik.values.Rented_Price}
              onChange={formik.handleChange}
              label="Rent Price"
              color={"text-black"}
              textsize={"text-sm"}
              fontweight={"font-semibold"}
            />
          </div>
          <div>
            <ShareField
              name="Taxes"
              onChange={formik.handleChange}
              value={formik.values.Taxes}
              label="Taxes"
              color={"text-black"}
              textsize={"text-sm"}
              fontweight={"font-semibold"}
            />
          </div>
          <div>
            <ShareField
              name="Service_fee"
              onChange={formik.handleChange}
              value={formik.values.Service_fee}
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
              <SharedSelect
                onChange={(selectedOption) =>
                  formik.setFieldValue("Category", selectedOption.value)
                }
                Values={Cat}
                placeholder={"Select Categories"}
              />
            </div>
          </div>
          <div>
            <h1 className="font-Mont font-semibold text-xl 2xl:text-2xl text-black py-2">
              Sub - Category
            </h1>
            <div className="px-4 bg-white rounded-lg py-2">
              <SharedSelect
              onChange={(selectedOption) =>
                formik.setFieldValue("Sub_Category", selectedOption.value)
              }
                Values={SubCat}
                placeholder={"Select Sub - Categories"}
              />
            </div>
          </div>
          <div>
            <h1 className="font-Mont font-semibold text-xl 2xl:text-2xl text-black py-2">
              Brand
            </h1>
            <div className="px-4 bg-white rounded-lg py-2">
              <SharedSelect
              onChange={(selectedOption) =>
                formik.setFieldValue("Brand", selectedOption.value)
              } 
              Values={Brand} placeholder={"Select Brand"} />
              {/*  */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section3;
