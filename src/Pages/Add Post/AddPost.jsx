import React, { useEffect, useRef, useState } from "react";
import BlackButton from "../../Component/Shared/BlackButton";
import ShareField from "../../Component/Shared/ShareField";
import SharedSelect from "../../Component/Shared/SharedSelect";
import SecondCol from "./SecondCol";
import Section3 from "./Section3";
import Section4 from "./Section4";
import PaymentPolicy from "./PaymentPolicy";
import ProductDetails from "./ProductDetails";
import CustomDetails from "./CustomDetails";
import ListingLocation from "./ListingLocation";
import CallenderSection from "./CallenderSection";
import PublishSection from "./PublishSection";
import PublishFooter from "./PublishFooter";
import Navbar from "./../../Component/NavBar/Navbar";
import { initialValues } from "./Shared/formikInitialsValues";
import { useFormik } from "formik";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { fileToBase64 } from "../../utils/filtToBase64";
import LoadingBar from 'react-top-loading-bar'

const Stocks = [
  { label: "01", value: "1" },
  { value: "2", label: "02" },
  { value: "3", label: "03" },
];

const AddPost = () => {
  const [check, setCheck] = useState(null);
  const [check2, setCheck2] = useState(null);
  const [lodaingBar,setLoadingbar]= useState(false)
  const loadingRef = useRef(null);
  const formik = useFormik({
    initialValues: initialValues,
    onSubmit: async (values) => {
      // Handle form submission here
      console.warn(values);
    /*   if (!Object.values(values).every(Boolean)) {
        toast.error("Please fill in all the fields", {
          autoClose: 2000, // Set the duration to 3000 milliseconds (2 seconds)
        });
        return;
      } else { */
      try {
        const auth = JSON.parse(localStorage.getItem("user"));
        //Add loadingBar------
        setLoadingbar(true)
        
        const updateImages = [];
        for (let i = 0; i < values.Product_images.images.length; i++) {
          const current = values.Product_images.images[i];
          const base64 = await fileToBase64(current);
          updateImages.push(base64);
          
        }
        // Now formData contains all key-value pairs from the Formik form

        // add images.

        const response = await axios.post("https://backend-two-blush-62.vercel.app/postProducts",{
          ...values,
          Product_images:{
            images:updateImages
          },User_Id:auth._id
        });

        console.warn("Server Response", response.data);
        
      } catch (error) {
        console.warn("Error:", error.response);
      } finally{
        setLoadingbar(false)
        loadingRef.current.complete(); //Complete the loading bar
        toast.success("Product Add Successfully", {
          autoClose: 2000, // Set the duration to 3000 milliseconds (2 seconds)
        });
      }
     /*  } */
    },
  });
  useEffect(() => {
    if (check === true) {
      const type1 = "offer";
      formik.setFieldValue("Post_type", type1);
    } else if (check2 === true) {
      const type2 = "Looking_For";
      formik.setFieldValue("Post_type", type2);
    }
  }, [check, check2]);

  return (
    <div>
      <div>
        <Navbar />
      </div>
      <div>
        <ToastContainer />
        <LoadingBar color='#FFC10E' ref={loadingRef} />
      </div>
      <div>
        <form onSubmit={formik.handleSubmit} enctype="multipart/form-data">
          <div className="  md:px-10 px-3">
            <div>
              <div className="flex items-center gap-6 pt-3">
                <div className="md:w-2/5 w-full">
                  <BlackButton label={"My Acount"} />
                </div>
                <div className="w-full">
                  <h1 className="text-sm font-Robot font-normal">
                    Home / Post Ad
                  </h1>
                </div>
              </div>
              <div>
                <div className=" lg:grid grid-cols-2 ">
                  <div>
                    <div className="py-4">
                      <h1 className="2xl:text-2xl text-xl font-Mont font-medium">
                        Ad Details
                      </h1>
                    </div>
                    <div className="bg-white rounded-lg md:px-5 px-4 py-5 2xl:py-10 xl:py-3">
                      <div>
                        <h4 className="2xl:text-lg text-base font-Mont font-medium text-color-primary-gr">
                          Ad type*
                        </h4>
                      </div>
                      <div className="flex items-center gap-7 py-2">
                        <div className="flex items-center gap-2">
                          <div>
                            {check ? (
                              <svg
                                width="16"
                                height="16"
                                viewBox="0 0 16 16"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                                onClick={() => {
                                  setCheck(!check);
                                  setCheck2(false);
                                }}
                              >
                                <circle
                                  cx="8"
                                  cy="8"
                                  r="7.5"
                                  stroke="#FFC10E"
                                />
                                <circle cx="8" cy="8" r="5" fill="#FFC10E" />
                              </svg>
                            ) : (
                              <svg
                                width="16"
                                height="16"
                                viewBox="0 0 16 16"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                                onClick={() => {
                                  setCheck(!check);
                                  setCheck2(false);
                                }}
                              >
                                <circle cx="8" cy="8" r="7.5" stroke="black" />
                              </svg>
                            )}
                          </div>
                          <div>
                            <h1 className="text-base 2xl:text-lg font-Mont font-medium">
                              I offer
                            </h1>
                          </div>
                        </div>{" "}
                        <div className="flex items-center gap-2">
                          <div>
                            {check2 ? (
                              <svg
                                width="16"
                                height="16"
                                viewBox="0 0 16 16"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                                onClick={() => {
                                  setCheck2(!check2);
                                  setCheck(false);
                                }}
                              >
                                <circle
                                  cx="8"
                                  cy="8"
                                  r="7.5"
                                  stroke="#FFC10E"
                                />
                                <circle cx="8" cy="8" r="5" fill="#FFC10E" />
                              </svg>
                            ) : (
                              <svg
                                width="16"
                                height="16"
                                viewBox="0 0 16 16"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                                onClick={() => {
                                  setCheck2(!check2);
                                  setCheck(false);
                                }}
                              >
                                <circle cx="8" cy="8" r="7.5" stroke="black" />
                              </svg>
                            )}
                          </div>
                          <div>
                            <h1 className="text-base 2xl:text-lg font-Mont font-medium">
                              I’m looking for{" "}
                            </h1>
                          </div>
                        </div>
                      </div>
                      <div className="py-2">
                        <ShareField
                          name="tittle"
                          onChange={formik.handleChange}
                          value={formik.values.tittle}
                          label="Title of the ad*"
                          color={"text-color-primary-gr"}
                          textsize={"text-base"}
                        />
                      </div>
                      <div className="py-2">
                        <ShareField
                          name="description"
                          onChange={formik.handleChange}
                          value={formik.values.description}
                          label="Descriptions "
                          color={"text-color-primary-gr"}
                          textsize={"text-base"}
                        />
                      </div>
                      <div>
                        <SharedSelect
                          Values={Stocks}
                          label="Stocks"
                          name="quantity"
                          onChange={(selectedOption) =>
                            formik.setFieldValue(
                              "quantity",
                              selectedOption.value
                            )
                          }
                        />
                      </div>
                    </div>
                  </div>
                  <div className="md:pl-8">
                    <SecondCol formik={formik} />
                  </div>
                </div>
              </div>
              {/*---------------Section 3 ---------------------------------------------------------- */}
              <div>
                <Section3 formik={formik} />
              </div>
              {/*---------------Section 4 ---------------------------------------------------------- */}
              <div>
                <Section4 formik={formik} />
              </div>
              <div>
                <PaymentPolicy formik={formik} />
              </div>
              {/* -------------Section 5 ------------------------------------------------------------ */}
              <div>
                <ProductDetails
                  formik={formik}
                  name="ProductDetails_Description"
                  name_second="AboutProduct_Description"
                  heading1={"Product Details"}
                  heading2={"About Product"}
                />
              </div>
              <div>
                <ProductDetails
                  formik={formik}
                  name="Things_Description"
                  name_second="Cancel_Description"
                  heading1={"Things to Know"}
                  heading2={"Cancellation Policy"}
                />
              </div>
              {/*-------------------- section 6 ------------------------------------------------------- */}
              <div>
                <CustomDetails formik={formik} />
              </div>
              {/* ----------Section 7 -------------------------------------------------------------------- */}
              <div>
                <ListingLocation formik={formik} />
              </div>
              {/* ----------Section 8 -------------------------------------------------------------------- */}
              <div>
                <CallenderSection formik={formik} />
              </div>
              {/* ----------Section 9 -------------------------------------------------------------------- */}
              <div>
                <PublishSection formik={formik} />
              </div>
              {/* ----------Section 10 -------------------------------------------------------------------- */}
              <div>
                <PublishFooter formik={formik} />
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddPost;
