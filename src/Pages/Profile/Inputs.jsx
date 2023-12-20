import React, { useEffect, useRef, useState } from "react";
import axios from "axios"; // Import Axios
import { useFormik } from "formik";
import updateSchema from "../../Schemas/updateProfile";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const inputs = [
  {
    label: "Username",
    FormikName: "username",
    placeholder: "Enter Username",
  },
  {
    label: "Name",
    FormikName: "name",
    placeholder: "Enter Name",
  },
  {
    label: "Email",
    FormikName: "email",
    placeholder: "Enter Email",
  },
  {
    label: "Number",
    FormikName: "number",
    placeholder: "Enter Mobile No.",
  },
  {
    label: "City",
    FormikName: "city",
    placeholder: "Enter City",
  },
  {
    label: "Zi Code",
    FormikName: "zip_code",
    placeholder: "Enter Zip Code",
  },
  {
    label: "State",
    FormikName: "state",
    placeholder: "Enter State",
  },

  {
    label: "Country",
    FormikName: "country",
    placeholder: "Enter Country",
  },
];

/*  let auth = JSON.parse(localStorage.getItem("user"));
// if auth have value then its use otherwise initial value is empty
  const initialValues = {
    username: auth?.username || "",
    name: auth?.name || "",
    email: auth?.email || "",
    number: auth?.number || "",
    city: auth?.city || "",
    zip_code: auth?.zip_code || "",
    state: auth?.state || "",
    country: auth?.country || "",
  }; */

const Inputs = ({ handleSubmit }) => {
  const [auth, setAuth] = useState(
    JSON.parse(localStorage.getItem("user")) || {}
  );

  const formik = useFormik({
    initialValues: auth,
    validationSchema: updateSchema,
    onSubmit: async (Values) => {
      try {
        const userId = auth._id;
        const result = await axios.put(
          "https://backend-two-blush-62.vercel.app/updateProfile",
          Values,
          {
            headers: {
              _id: userId,
            },
          }
        );
        if (result.status === 200) {
          toast.success("Data Update Successfully .. ", {
            autoClose: 2000, // Set the duration to 3000 milliseconds (2 seconds)
          });
          const updatedData = { ...auth, ...Values };
          localStorage.setItem("user", JSON.stringify(updatedData));
        }
      } catch (error) {
        alert(error);
      }
    },
  });

  const updateData = (event) => {
    event.preventDefault();
    handleSubmit();
    if (
      !formik.values.username ||
      !formik.values.name ||
      !formik.values.email ||
      !formik.values.number ||
      !formik.values.city ||
      !formik.values.zip_code ||
      !formik.values.state ||
      !formik.values.country
    ) {
      toast.error("Please fill in all the fields", {
        autoClose: 2000, // Set the duration to 3000 milliseconds (2 seconds)
      });
      return false;
    } else {
      formik.handleSubmit();
      return true;
    }
  };

  return (
    <div>
      <ToastContainer />
      <div>
        <form onSubmit={updateData}>
          <div>
            <div className="lg:flex flex-wrap gap-4">
              {inputs.map((item, index) => (
                <div key={index}>
                  <div className="flex flex-col mt-4 lg:mt-0 lg:w-60 xl:w-72 2xl:w-80 ">
                    <span className="text-color-primary-gr">{item.label}</span>
                    <input
                      type="text"
                      value={formik.values[item.FormikName.toLowerCase()]}
                      name={item.FormikName.toLowerCase()}
                      onBlur={formik.handleBlur}
                      onChange={formik.handleChange}
                      className="border border-[#00005B] rounded-lg focus:outline-none p-2 mt-1 text-black placeholder:text-sm"
                      placeholder={item.placeholder}
                      readOnly={
                        item.FormikName.toLowerCase() === "email" &&
                        formik.values.email.includes("@")
                      }
                    />
                    {formik.errors[item.FormikName.toLowerCase()] &&
                    formik.touched[item.FormikName.toLowerCase()] ? (
                      <div className="relative ">
                        <p className="text-red-700 text-xs font-semibold font-Robot absolute  top-1">
                          {formik.errors[item.FormikName.toLowerCase()] &&
                          formik.touched[item.FormikName.toLowerCase()] ? (
                            <div>
                              {formik.errors[item.FormikName.toLowerCase()]}
                            </div>
                          ) : null}
                        </p>
                      </div>
                    ) : null}
                  </div>
                </div>
              ))}
            </div>
            <div className="xl:w-2/3 xl:ml-20  py-5  ">
              <div className=" flex justify-evenly ">
                <button
                  onClick={() => {
                    updateData();
                    uploadimage();
                  }}
                  className="text-sm font-Mont bg-black font-semibold text-white py-2 rounded-lg w-[150px] hover:bg-color-primary-yel hover:text-white transition-all"
                >
                  Save Changes
                </button>
                <button
                  type="button"
                  className="text-sm py-2 xl:mr-0 lg:mr-5 mr-0 font-Mont bg-transparent border border-black font-semibold text-black w-[150px] rounded-lg  hover:bg-black hover:text-white transition-all"
                >
                  Cancel
                </button>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Inputs;
