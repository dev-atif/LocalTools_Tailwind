import React, { useEffect } from "react";
import logo from "../../assets/Logo-16.png";
import display from "../../assets/signin.png";
import ShareField from "../../Component/Shared/ShareField";
import { BiLogoGoogle } from "react-icons/bi";
import { AiFillFacebook } from "react-icons/ai";
import BlackButton from "../../Component/Shared/BlackButton";
import { Link, useNavigate } from "react-router-dom";
import SharedSelect from "../../Component/Shared/SharedSelect";
import FormInput from "./FormInput";
import { useState } from "react";
import { useFormik } from "formik";
import { signUpSchema } from "../../Schemas";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Loading from 'react-loading';
const Country = [
  {
    value: 1,
    label: "Pakistan",
  },
  {
    value: 2,
    label: "USA",
  },
  {
    value: 3,
    label: "China",
  },
];

const initialValues = {
  name: "",
  lastname: "",
  country_code: "",
  number: "",
  email: "",
  pasword: "",
  confirm_pasword: "",
};

const Registration = () => {
  const [business, setBusiness] = useState(true);
  const [customer, setCustomer] = useState(false);
  const [password, showPassword] = useState(false);
  const [cPassword, showCpassword] = useState(false);
  const [isChecked, setIsChecked] = useState(true);
  const [country, setCountry] = useState("");
  const [isloading,setLoading]= useState(false);
  const navigate = useNavigate();

  //Form Validation
  const Formik = useFormik({
    initialValues: initialValues,
    validationSchema: signUpSchema,
    onSubmit: (values) => {
      console.warn(values);
    },
  });
  console.warn(Formik.values);
  /* --------------------Api Function --------------------------------------------- */

  const submitHandle = async () => {
    if (
      !Formik.values.name ||
      !Formik.values.lastname ||
      !Formik.values.number ||
      !Formik.values.country_code ||
      !Formik.values.email ||
      !Formik.values.pasword ||
      !Formik.values.confirm_pasword ||
      !isChecked ||
      Formik.values.pasword !== Formik.values.confirm_pasword
    ) {
      toast.error("Please fill in all the fields", {
        autoClose: 2000, // Set the duration to 3000 milliseconds (2 seconds)
      });
      return false;
    }
        //start Loader 
        setLoading(true);
    try {
      const response = await axios.post(
        "https://backend-two-blush-62.vercel.app/register",
        {
          name: Formik.values.name,
          lastname: Formik.values.lastname,
          number: Formik.values.country_code + Formik.values.number,
          country: country,
          email: Formik.values.email,
          pasword: Formik.values.pasword,
          confirmpasword: Formik.values.confirm_pasword,
          isBusiness: business,
          isCustomer: customer,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      const result = response.data;

      if (result) {
        /* localStorage.setItem("user", JSON.stringify(result.result));
        localStorage.setItem("token", JSON.stringify(result.auth)); */
        Formik.resetForm();
        navigate("/Login");
      }
    } catch (error) {
      console.error("Error:", error);
      // Handle error here, e.g., display an error message to the user
      if(error.response.status === 500){
        toast.error('Internal Server Error try again ',{autoClose : 2000})
      }
      else if(error.response.status===400){
        toast.error('Email already exist',{autoClose : 2000})
      }
      else if(error.response.status===105){
        toast.error('Email ServerFails Try again',{autoClose : 2000})
      }
      else{
        toast.error(
          "An error occurred while processing your request. Please try again later.",
          {
            autoClose: 2000,
          }
        );
      }
     
    }
    //hide loader button
    finally{
      setLoading(false)
    }
  };
 
  /* ------------------------------------------------------------------------------ */
  return (
    <>
      <div className="bg-color-primary-yel  flex items-center  h-full justify-center pb-32">
        <div>
          <div>
            <ToastContainer />
          </div>
          <div className="md:px-12 px-2 ">
            <div className="md:p-8 p-4">
              <Link to={"/"}>
                <img src={logo} />
              </Link>
            </div>
            <div>
              <div className="lg:grid grid-cols-2 ">
                <div className="flex items-center">
                  <img src={display} />
                </div>
                <div>
                  <div>
                    <div>
                      <div>
                        <h1 className="font-Mont font-bold text-[56px] text-center">
                          Register
                        </h1>
                      </div>
                      <div>
                        <p className="text-base font-Robot md:px-0 px-2 font-normal text-center pt-4 pb-14">
                          Let’s Sign up first for enter into Square Website. Uh
                          She Up!
                        </p>
                      </div>
                      <div className="md:px-10 px-2  ">
                        <div className="bg-white p-5 md:p-10 rounded-2xl">
                          <form onSubmit={Formik.handleSubmit}>
                            {/* Name Fields ----------------------------------------------------------- */}
                            <div className="flex gap-3 relative">
                              <div className="w-1/2">
                                <FormInput
                                  name="name"
                                  value={Formik.values.name}
                                  onChange={Formik.handleChange}
                                  placeholder={"First Name"}
                                  type={"text"}
                                  onBlur={Formik.handleBlur}
                                />
                                {Formik.errors.name && Formik.touched.name ? (
                                  <p className="text-red-800 font-Mont text-xs mt-1 absolute -top-6">
                                    {Formik.errors.name}
                                  </p>
                                ) : null}
                              </div>
                              <div className="w-1/2">
                                <FormInput
                                  name={"lastname"}
                                  value={Formik.values.lastname}
                                  onChange={Formik.handleChange}
                                  type={"text"}
                                  placeholder={"Last Name"}
                                  onBlur={Formik.handleBlur}
                                />
                                {Formik.errors.lastname &&
                                Formik.touched.lastname ? (
                                  <p className="text-red-800 font-Mont text-xs mt-1 absolute -top-6">
                                    {Formik.errors.lastname}
                                  </p>
                                ) : null}
                              </div>
                            </div>
                            {/* -----------------------Number fields */}
                            <div className="relative">
                              <div className=" md:flex items-center gap-3 mt-4">
                                <div className="flex gap-2 items-center md:w-1/2">
                                  <div className="w-[30%]">
                                    <FormInput
                                      name={"country_code"}
                                      value={Formik.values.country_code}
                                      onChange={Formik.handleChange}
                                      type={"text"}
                                      placeholder={"+92"}
                                      onBlur={Formik.handleBlur}
                                    />
                                    {Formik.errors.country_code &&
                                    Formik.touched.country_code ? (
                                      <p className="text-red-900 font-Mont text-xs mt-1 absolute -top-4">
                                        {Formik.errors.country_code}
                                      </p>
                                    ) : null}
                                  </div>
                                  <div className="w-full">
                                    <FormInput
                                      name={"number"}
                                      value={Formik.values.number}
                                      onChange={Formik.handleChange}
                                      type={"text"}
                                      placeholder={"Phone Number"}
                                      onBlur={Formik.handleBlur}
                                    />
                                    {Formik.errors.number &&
                                    Formik.touched.number ? (
                                      <p className="text-red-900 font-Mont text-xs mt-1 absolute -bottom-3">
                                        {Formik.errors.number}
                                      </p>
                                    ) : null}
                                  </div>
                                </div>
                                <div className="md:w-1/2 ">
                                  <SharedSelect
                                    placeholder={"Your Country"}
                                    Values={Country}
                                    bordercolor={"lightgray"}
                                    onChange={(selectedOption) => {
                                      setCountry(selectedOption.label);
                                    }}
                                  />
                                </div>
                              </div>
                              <div clas></div>
                            </div>

                            {/* ---------gamil Fields-------------------------------------------- */}
                            <div className="relative mt-4">
                              <FormInput
                                name={"email"}
                                value={Formik.values.email}
                                onChange={Formik.handleChange}
                                type={"text"}
                                placeholder={"Mail Address "}
                                pr={"pr-24"}
                                onBlur={Formik.handleBlur}
                              />
                              {Formik.errors.email && Formik.touched.email ? (
                                <p className="text-red-900 font-Mont text-xs mt-1 absolute -bottom-4">
                                  {Formik.errors.email}
                                </p>
                              ) : null}
                            </div>
                            {/* ----------------PAssword Filed----------------------------------- */}
                            <div className=" md:flex gap-3 my-5">
                              <div className="relative">
                                <FormInput
                                  name={"pasword"}
                                  value={Formik.values.pasword}
                                  onChange={Formik.handleChange}
                                  type={password ? "text" : "password"}
                                  placeholder={"Password "}
                                  pr={"pr-12"}
                                  onBlur={Formik.handleBlur}
                                />
                                {Formik.errors.pasword &&
                                Formik.touched.pasword ? (
                                  <p className="text-red-900 font-Mont text-xs mt-1 absolute -bottom-4">
                                    {Formik.errors.pasword}
                                  </p>
                                ) : null}
                                <div
                                  onClick={() => {
                                    showPassword(!password);
                                  }}
                                  className=" cursor-pointer absolute top-3 right-2"
                                >
                                  {password ? (
                                    <svg
                                      width="16"
                                      height="16"
                                      viewBox="0 0 16 16"
                                      fill="none"
                                      xmlns="http://www.w3.org/2000/svg"
                                    >
                                      <path
                                        fill-rule="evenodd"
                                        clip-rule="evenodd"
                                        d="M14.4835 1.50821C14.2433 1.27325 13.8575 1.27537 13.62 1.51299L11.177 3.95726C10.2042 3.43638 9.12329 3.15156 7.99967 3.15156C5.1826 3.15156 2.63372 4.9419 1.38515 7.75411C1.31563 7.91069 1.31563 8.08939 1.38515 8.24597C1.94912 9.51622 2.77838 10.578 3.77783 11.3604L1.51104 13.6285C1.27178 13.8678 1.27396 14.2552 1.51588 14.4919C1.756 14.7268 2.14187 14.7247 2.37936 14.4871L4.82232 12.0428C5.79511 12.5637 6.87606 12.8485 7.99967 12.8485C10.8167 12.8485 13.3656 11.0582 14.6142 8.24597C14.6837 8.08939 14.6837 7.91069 14.6142 7.75411C14.0502 6.48386 13.221 5.42209 12.2215 4.63963L14.4883 2.37163C14.7276 2.13224 14.7254 1.74493 14.4835 1.50821ZM10.2729 4.86192C9.56109 4.53779 8.79188 4.36368 7.99967 4.36368C5.75808 4.36368 3.70065 5.75766 2.60748 8.00004C3.10835 9.02745 3.81164 9.87676 4.64232 10.4955L5.90904 9.22808C5.69703 8.86794 5.57543 8.44819 5.57543 8.00004C5.57543 6.66117 6.6608 5.5758 7.99967 5.5758C8.44736 5.5758 8.8667 5.69715 9.22659 5.90875L10.2729 4.86192ZM10.0903 6.772L11.357 5.50459C12.1877 6.12332 12.891 6.97263 13.3919 8.00004C12.2987 10.2424 10.2413 11.6364 7.99967 11.6364C7.20747 11.6364 6.43826 11.4623 5.72649 11.1382L6.77276 10.0913C7.13265 10.3029 7.55199 10.4243 7.99967 10.4243C9.33855 10.4243 10.4239 9.33891 10.4239 8.00004C10.4239 7.55189 10.3023 7.13215 10.0903 6.772ZM8.30828 6.82756C8.20975 6.80169 8.10632 6.78792 7.99967 6.78792C7.33024 6.78792 6.78755 7.3306 6.78755 8.00004C6.78755 8.10691 6.80138 8.21056 6.82736 8.30928L8.30828 6.82756ZM7.69107 9.17253L9.17199 7.6908C9.19796 7.78952 9.2118 7.89317 9.2118 8.00004C9.2118 8.66948 8.66911 9.21216 7.99967 9.21216C7.89303 9.21216 7.7896 9.19839 7.69107 9.17253Z"
                                        fill="#B5B5BE"
                                      />
                                    </svg>
                                  ) : (
                                    <span>
                                      <svg
                                        width="16"
                                        height="16"
                                        viewBox="0 0 16 16"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                      >
                                        <path
                                          fill-rule="evenodd"
                                          clip-rule="evenodd"
                                          d="M1.40633 7.62495C2.63583 4.60541 5.17249 2.66663 7.99967 2.66663C10.8269 2.66663 13.3635 4.60541 14.593 7.62495C14.6908 7.86506 14.6908 8.13486 14.593 8.37496C13.3635 11.3945 10.8269 13.3333 7.99967 13.3333C5.17249 13.3333 2.63583 11.3945 1.40633 8.37496C1.30857 8.13486 1.30857 7.86506 1.40633 7.62495ZM7.99967 12.0997C10.279 12.0997 12.3688 10.5245 13.4329 7.99996C12.3688 5.47546 10.279 3.90019 7.99967 3.90019C5.72031 3.90019 3.63051 5.47546 2.5664 7.99996C3.63051 10.5245 5.72031 12.0997 7.99967 12.0997ZM7.99967 10.4308C6.68049 10.4308 5.61108 9.34247 5.61108 7.99996C5.61108 6.65744 6.68049 5.56912 7.99967 5.56912C9.31886 5.56912 10.3883 6.65744 10.3883 7.99996C10.3883 9.34247 9.31886 10.4308 7.99967 10.4308ZM7.99967 9.19724C8.64942 9.19724 9.17615 8.6612 9.17615 7.99996C9.17615 7.33872 8.64942 6.80268 7.99967 6.80268C7.34993 6.80268 6.8232 7.33872 6.8232 7.99996C6.8232 8.6612 7.34993 9.19724 7.99967 9.19724Z"
                                          fill="#92929D"
                                        />
                                      </svg>
                                    </span>
                                  )}
                                </div>
                                <div></div>
                              </div>{" "}
                              <div className="relative md:mt-0 mt-2">
                                <FormInput
                                  name={"confirm_pasword"}
                                  value={Formik.values.confirm_pasword}
                                  onChange={Formik.handleChange}
                                  type={cPassword ? "text" : "password"}
                                  placeholder={"Confirm Password "}
                                  pr={"pr-12"}
                                  onBlur={Formik.handleBlur}
                                />
                                {Formik.errors.confirm_pasword &&
                                Formik.touched.confirm_pasword &&
                                Formik.values.pasword !==
                                  Formik.values.confirm_pasword ? (
                                  <p className="text-red-900 font-Mont text-xs mt-1 absolute -bottom-4">
                                    {Formik.errors.confirm_pasword}
                                  </p>
                                ) : null}
                                <div
                                  onClick={() => {
                                    showCpassword(!cPassword);
                                  }}
                                  className=" cursor-pointer absolute top-3 right-2"
                                >
                                  {cPassword ? (
                                    <svg
                                      width="16"
                                      height="16"
                                      viewBox="0 0 16 16"
                                      fill="none"
                                      xmlns="http://www.w3.org/2000/svg"
                                    >
                                      <path
                                        fill-rule="evenodd"
                                        clip-rule="evenodd"
                                        d="M14.4835 1.50821C14.2433 1.27325 13.8575 1.27537 13.62 1.51299L11.177 3.95726C10.2042 3.43638 9.12329 3.15156 7.99967 3.15156C5.1826 3.15156 2.63372 4.9419 1.38515 7.75411C1.31563 7.91069 1.31563 8.08939 1.38515 8.24597C1.94912 9.51622 2.77838 10.578 3.77783 11.3604L1.51104 13.6285C1.27178 13.8678 1.27396 14.2552 1.51588 14.4919C1.756 14.7268 2.14187 14.7247 2.37936 14.4871L4.82232 12.0428C5.79511 12.5637 6.87606 12.8485 7.99967 12.8485C10.8167 12.8485 13.3656 11.0582 14.6142 8.24597C14.6837 8.08939 14.6837 7.91069 14.6142 7.75411C14.0502 6.48386 13.221 5.42209 12.2215 4.63963L14.4883 2.37163C14.7276 2.13224 14.7254 1.74493 14.4835 1.50821ZM10.2729 4.86192C9.56109 4.53779 8.79188 4.36368 7.99967 4.36368C5.75808 4.36368 3.70065 5.75766 2.60748 8.00004C3.10835 9.02745 3.81164 9.87676 4.64232 10.4955L5.90904 9.22808C5.69703 8.86794 5.57543 8.44819 5.57543 8.00004C5.57543 6.66117 6.6608 5.5758 7.99967 5.5758C8.44736 5.5758 8.8667 5.69715 9.22659 5.90875L10.2729 4.86192ZM10.0903 6.772L11.357 5.50459C12.1877 6.12332 12.891 6.97263 13.3919 8.00004C12.2987 10.2424 10.2413 11.6364 7.99967 11.6364C7.20747 11.6364 6.43826 11.4623 5.72649 11.1382L6.77276 10.0913C7.13265 10.3029 7.55199 10.4243 7.99967 10.4243C9.33855 10.4243 10.4239 9.33891 10.4239 8.00004C10.4239 7.55189 10.3023 7.13215 10.0903 6.772ZM8.30828 6.82756C8.20975 6.80169 8.10632 6.78792 7.99967 6.78792C7.33024 6.78792 6.78755 7.3306 6.78755 8.00004C6.78755 8.10691 6.80138 8.21056 6.82736 8.30928L8.30828 6.82756ZM7.69107 9.17253L9.17199 7.6908C9.19796 7.78952 9.2118 7.89317 9.2118 8.00004C9.2118 8.66948 8.66911 9.21216 7.99967 9.21216C7.89303 9.21216 7.7896 9.19839 7.69107 9.17253Z"
                                        fill="#B5B5BE"
                                      />
                                    </svg>
                                  ) : (
                                    <span>
                                      <svg
                                        width="16"
                                        height="16"
                                        viewBox="0 0 16 16"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                      >
                                        <path
                                          fill-rule="evenodd"
                                          clip-rule="evenodd"
                                          d="M1.40633 7.62495C2.63583 4.60541 5.17249 2.66663 7.99967 2.66663C10.8269 2.66663 13.3635 4.60541 14.593 7.62495C14.6908 7.86506 14.6908 8.13486 14.593 8.37496C13.3635 11.3945 10.8269 13.3333 7.99967 13.3333C5.17249 13.3333 2.63583 11.3945 1.40633 8.37496C1.30857 8.13486 1.30857 7.86506 1.40633 7.62495ZM7.99967 12.0997C10.279 12.0997 12.3688 10.5245 13.4329 7.99996C12.3688 5.47546 10.279 3.90019 7.99967 3.90019C5.72031 3.90019 3.63051 5.47546 2.5664 7.99996C3.63051 10.5245 5.72031 12.0997 7.99967 12.0997ZM7.99967 10.4308C6.68049 10.4308 5.61108 9.34247 5.61108 7.99996C5.61108 6.65744 6.68049 5.56912 7.99967 5.56912C9.31886 5.56912 10.3883 6.65744 10.3883 7.99996C10.3883 9.34247 9.31886 10.4308 7.99967 10.4308ZM7.99967 9.19724C8.64942 9.19724 9.17615 8.6612 9.17615 7.99996C9.17615 7.33872 8.64942 6.80268 7.99967 6.80268C7.34993 6.80268 6.8232 7.33872 6.8232 7.99996C6.8232 8.6612 7.34993 9.19724 7.99967 9.19724Z"
                                          fill="#92929D"
                                        />
                                      </svg>
                                    </span>
                                  )}
                                </div>
                                <div></div>
                              </div>{" "}
                            </div>
                            {/* ----------------------Custom----Radio--Buttons---------------------------------------------------------------- */}

                            <div className="flex gap-3 items-center">
                              <div
                                onClick={() => {
                                  setBusiness(true);
                                  setCustomer(false);
                                  console.warn("Business:", !business);
                                }}
                                className={`w-1/2 flex items-center md:gap-4 gap-1 md:pl-6 pl-3 py-3 rounded-xl cursor-pointer border ${
                                  business ? "bg-[#3DD598]" : "bg-[#CDCDD41A]"
                                }`}
                              >
                                <span>
                                  {business ? (
                                    <svg
                                      width="24"
                                      height="24"
                                      viewBox="0 0 24 24"
                                      fill="none"
                                      xmlns="http://www.w3.org/2000/svg"
                                    >
                                      <path
                                        d="M12 5C8.141 5 5 8.141 5 12C5 15.859 8.141 19 12 19C15.859 19 19 15.859 19 12C19 8.141 15.859 5 12 5ZM12 17C9.243 17 7 14.757 7 12C7 9.243 9.243 7 12 7C14.757 7 17 9.243 17 12C17 14.757 14.757 17 12 17Z"
                                        fill="white"
                                      />
                                      <path
                                        d="M12 9C10.373 9 9 10.373 9 12C9 13.627 10.373 15 12 15C13.627 15 15 13.627 15 12C15 10.373 13.627 9 12 9Z"
                                        fill="white"
                                      />
                                    </svg>
                                  ) : (
                                    <svg
                                      width="24"
                                      height="24"
                                      viewBox="0 0 24 24"
                                      fill="none"
                                      xmlns="http://www.w3.org/2000/svg"
                                    >
                                      <path
                                        d="M5 12C5 15.859 8.14 19 12 19C15.859 19 19 15.859 19 12C19 8.141 15.859 5 12 5C8.14 5 5 8.141 5 12ZM17 12C17 14.757 14.757 17 12 17C9.243 17 7 14.757 7 12C7 9.243 9.243 7 12 7C14.757 7 17 9.243 17 12Z"
                                        fill="black"
                                      />
                                    </svg>
                                  )}
                                </span>
                                <h1
                                  className={` ${
                                    business ? "text-white" : "text-black"
                                  } font-Robot font-normal text-sm`}
                                >
                                  Business User
                                </h1>
                              </div>
                              <div
                                onClick={() => {
                                  setCustomer(true);
                                  setBusiness(false);
                                  console.warn("Business:", !business);
                                }}
                                className={`w-1/2 flex items-center gap-1 md:gap-4 md:pl-6 pl-3 py-3 rounded-xl cursor-pointer border ${
                                  customer ? "bg-[#3DD598]" : "bg-[#CDCDD41A]"
                                }`}
                              >
                                <span>
                                  {customer ? (
                                    <svg
                                      width="24"
                                      height="24"
                                      viewBox="0 0 24 24"
                                      fill="none"
                                      xmlns="http://www.w3.org/2000/svg"
                                    >
                                      <path
                                        d="M12 5C8.141 5 5 8.141 5 12C5 15.859 8.141 19 12 19C15.859 19 19 15.859 19 12C19 8.141 15.859 5 12 5ZM12 17C9.243 17 7 14.757 7 12C7 9.243 9.243 7 12 7C14.757 7 17 9.243 17 12C17 14.757 14.757 17 12 17Z"
                                        fill="white"
                                      />
                                      <path
                                        d="M12 9C10.373 9 9 10.373 9 12C9 13.627 10.373 15 12 15C13.627 15 15 13.627 15 12C15 10.373 13.627 9 12 9Z"
                                        fill="white"
                                      />
                                    </svg>
                                  ) : (
                                    <svg
                                      width="24"
                                      height="24"
                                      viewBox="0 0 24 24"
                                      fill="none"
                                      xmlns="http://www.w3.org/2000/svg"
                                    >
                                      <path
                                        d="M5 12C5 15.859 8.14 19 12 19C15.859 19 19 15.859 19 12C19 8.141 15.859 5 12 5C8.14 5 5 8.141 5 12ZM17 12C17 14.757 14.757 17 12 17C9.243 17 7 14.757 7 12C7 9.243 9.243 7 12 7C14.757 7 17 9.243 17 12Z"
                                        fill="black"
                                      />
                                    </svg>
                                  )}
                                </span>
                                <h1
                                  className={` ${
                                    customer ? "text-white" : "text-black"
                                  } font-Robot font-normal text-sm`}
                                >
                                  Customer User
                                </h1>
                              </div>
                            </div>

                            {/* -------------------------Check Box------------------------------------------------------------ */}
                            <div className="md:my-8 my-6">
                              <div class="inline-flex items-start gap-4 mt-1">
                                <label
                                  class="relative flex  cursor-pointer items-center rounded-full "
                                  for="checkbox-3"
                                  data-ripple-dark="true"
                                >
                                  <input
                                    type="checkbox"
                                    class="before:content[''] peer relative h-4 w-4 cursor-pointer appearance-none rounded-md border border-blue-gray-200 transition-all before:absolute before:top-2/4 before:left-2/4 before:block before:h-12 before:w-12 before:-translate-y-2/4 before:-translate-x-2/4 before:rounded-full  before:opacity-0 before:transition-opacity checked:border-[#3DD598] checked:bg-[#3DD598] checked:before:bg-[#3DD598] hover:before:opacity-10 bg-slate-200"
                                    id="checkbox-3"
                                    checked={isChecked}
                                    onChange={() => setIsChecked(!isChecked)}
                                  />
                                  <div class="pointer-events-none absolute top-2/4 left-2/4 -translate-y-2/4 -translate-x-2/4 text-white opacity-0 transition-opacity peer-checked:opacity-100">
                                    <svg
                                      xmlns="http://www.w3.org/2000/svg"
                                      class="h-3.5 w-3.5"
                                      viewBox="0 0 20 20"
                                      fill="currentColor"
                                      stroke="currentColor"
                                      stroke-width="1"
                                    >
                                      <path
                                        fill-rule="evenodd"
                                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                        clip-rule="evenodd"
                                      ></path>
                                    </svg>
                                  </div>
                                </label>
                                <label className="font-Robot font-normal text-sm text-[#696974]">
                                  I agree to Square’s{" "}
                                  <span className="text-[#50B5FF]">
                                    Cookie{" "}
                                  </span>{" "}
                                  and{" "}
                                  <span className="text-[#50B5FF]">
                                    Privacy Policy
                                  </span>
                                  .
                                </label>
                              </div>
                            </div>
                            {/* --------------------------------------------------------------------------------------------- */}
                            <div className="flex gap-3 items-center">
                              <div className="w-1/3">
                                <Link to={"/Login"}>
                                  <button className="w-full bg-[#F1F1F5] rounded-lg font-Mont text-xs font-semibold text-center py-[14px]">
                                    Login
                                  </button>
                                </Link>
                              </div>
                              <div className="w-2/3">
                                <BlackButton
                                  label={
                                    isloading ? (
                                      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                        <Loading type="spin" color="#ffffff" width={25} height={25} />
                                      </div>
                                    ) : (
                                      'Get Started'
                                    )
                                  }
                                  type={"submit"}
                                  Onclick={() => {
                                    submitHandle();
                                  }}
                                />
                              </div>
                            </div>
                          </form>
                          {/* ----------------------------------------------------------------------------------------------- */}
                          <div className="xl:flex gap-4 mt-8 pt-8 border-t relative">
                            <div className="xl:w-1/2">
                              <button className="bg-[#FC5A5A] flex items-center justify-center w-full gap-2 py-3 px-5 rounded-lg text-white text-xs font-semibold">
                                <span className="text-white text-xl">
                                  <BiLogoGoogle />
                                </span>
                                Continue with Google
                              </button>
                            </div>
                            <div className="xl:w-1/2 mt-2 xl:mt-0">
                              <button className="bg-[#0062FF]  w-full flex items-center justify-center gap-2 py-3 px-5 rounded-lg text-white text-xs font-semibold">
                                <span className="text-white text-xl">
                                  <AiFillFacebook />
                                </span>
                                Continue with Facebook
                              </button>
                            </div>
                            <div className="absolute bg-white px-4 py-2 rounded-lg -top-5 xl:left-[40%] lg:left-[30%] md:left-[38%] left-[30%]">
                              <p className="text-[#B5B5BE] font-normal font-Robot text-sm ">
                                Instant Signup
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Registration;
