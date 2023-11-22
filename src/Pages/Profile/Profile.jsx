import React, { useEffect, useRef, useState } from "react";
import Dashboard from "./../../Dashboard";
import BreadCrums from "../../Component/BreadCrums";
import profile from "../../../src/assets/ahmad.png";
import Inputs from "./Inputs";
import axios from "axios";

import { useFormik } from "formik";

const initialValues = {
  file: "",
};
const Profile = () => {
  /////////////////////////////States///////////////////////////////////////
  const uploadFile = useRef();
  const [image, setImage] = useState(profile);
  const auth = JSON.parse(localStorage.getItem("user"));

  const loadUserImage = () => {
    const user = JSON.parse(localStorage.getItem("user"));
    if (user && user.image) {
      setImage(user.image); // Set the image to the user's image if it exists in the local storage
    }
  };

  useEffect(() => {
    loadUserImage(); // Load user's image on component mount
  }, []);
  
  const Formik = useFormik({
    initialValues,
    onSubmit: async (values, { setErrors }) => {
      if (!values.file) {
       return;
      }
        
        const formData = new FormData();
        formData.append("file", values.file);
  
        try {
          const response = await axios.put("https://backend-two-blush-62.vercel.app/upload", formData, {
            headers: {
              "Content-Type": "multipart/form-data",
              _id: auth._id, // Replace 'your_user_id_here' with the actual user ID
            },
          });
  
        
          // Update user data in localStorage after successful upload
          const updatedData = { ...auth, image: response.data.secure_url };
          localStorage.setItem("user", JSON.stringify(updatedData));
  
          // Update the image displayed on the page
          setImage(response.data.secure_url);
        } catch (error) {
          console.error("Error uploading image:", error);
          // Handle errors
          setErrors({ file: "Error uploading image. Please try again." });
        }
     
    },
  });
  

  const handleFormSubmit = Formik.handleSubmit;
  return (
    <Dashboard>
      <div className=" py-1 lg:pl-4 lg:py-0">
        <div>
          <BreadCrums Bread="Manage Profiles" />
        </div>
        <div className="py-6">
          <div className="bg-white py-10 lg:flex gap-7 rounded-lg justify-between">
            <div className=" lg:w-[100%]">
              <form onSubmit={Formik.handleSubmit}>
                <div className="flex justify-center relative">
                  <img src={image} className="rounded-full w-[80%] h-52 " />

                  {/* Upload Image  */}
                  <input
                    type="file"
                    name="file"
                    accept="image/*"
                    ref={uploadFile}
                    className="hidden"
                    onChange={(event) => {
                      Formik.setFieldValue("file", event.target.files[0]);
                      setImage(URL.createObjectURL(event.target.files[0]));
                      console.log("Upload images", event.target.files[0]);
                    }}
                  />

                  <div className="absolute  right-[25%] bottom-2 2xl:right-16 xl:right-[19%] md:right-[38%] lg:right-[6%]">
                    <svg
                      onClick={() => {
                        uploadFile.current.click();
                      }}
                      className="cursor-pointer"
                      width="44"
                      height="44"
                      viewBox="0 0 44 44"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <circle cx="21.86" cy="22.37" r="21.63" fill="#FFC10E" />
                      <path
                        d="M14.8066 29.409L20.6615 29.3889L33.4407 16.6561C33.9422 16.1516 34.2182 15.4816 34.2182 14.7688C34.2182 14.0561 33.9422 13.3861 33.4407 12.8816L31.3365 10.7648C30.3335 9.75577 28.5835 9.7611 27.5885 10.7608L14.8066 23.4963V29.409ZM29.4605 12.652L31.5687 14.7648L29.4499 16.8763L27.3457 14.7608L29.4605 12.652ZM17.4601 24.6095L25.4604 16.6374L27.5646 18.7542L19.5657 26.7236L17.4601 26.7303V24.6095Z"
                        fill="white"
                      />
                      <path
                        d="M12.153 34.7299H30.7273C32.1907 34.7299 33.3808 33.5326 33.3808 32.0605V20.4915L30.7273 23.1608V32.0605H16.3428C16.3083 32.0605 16.2725 32.0738 16.238 32.0738C16.1942 32.0738 16.1505 32.0618 16.1053 32.0605H12.153V13.3749H21.2372L23.8907 10.7056H12.153C10.6896 10.7056 9.49951 11.9028 9.49951 13.3749V32.0605C9.49951 33.5326 10.6896 34.7299 12.153 34.7299Z"
                        fill="white"
                      />
                    </svg>
                  </div>
                </div>
              </form>
            </div>

            <div className="px-3 lg:px-0">
              <Inputs handleSubmit={handleFormSubmit} />
            </div>
          </div>
        </div>
      </div>
    </Dashboard>
  );
};

export default Profile;
