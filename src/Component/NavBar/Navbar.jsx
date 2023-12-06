import React, { useEffect, useRef, useState } from "react";
import Logo from "../../assets/Logo-16.png";
import { RxCross2 } from "react-icons/rx";
import { BsSearch } from "react-icons/bs";

import profile from "../../assets/ahmad.png";
import Searbars from "./Searchbars";
import { Link, useNavigate } from "react-router-dom";
import Not_auth_Model from "../Not_auth_Model";
import { useSelector } from "react-redux";

const Navbar = () => {
  const [Open, setOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const auth = localStorage.getItem("user");
  const navigate = useNavigate();
  const [profileimage, setProfileimage] = useState(profile);

  //Auth Check For Model of Post Add
  const [checkauth, setAuth] = useState(false);

  const imageLoad = () => {
    //get data from localStorage
    const userdata = JSON.parse(localStorage.getItem("user"));
    if (userdata && userdata.image) {
      setProfileimage(userdata.image);
    }
  };
  useEffect(() => {
    imageLoad();
  });
  //This ref connect to the dropdown profile below
  let dropdown = useRef();
  //this function is used to hide menue when we click outside the menu or anywhere on the  screen
  useEffect(() => {
    let handle = (e) => {
      if (!dropdown.current.contains(e.target)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handle);
    return () => {
      document.removeEventListener("mousedown", handle);
    };
  });
  //LogOUT FUnction --------------------
  const logOut = () => {
    localStorage.clear();
    navigate("/Login");
  };
  const authCheck = () => {
    if (!auth) {
      setAuth(true);
    } else {
      navigate("/addpost");
    }
  };
  const item = useSelector((state) => state.cart);
  return (
    <div className="border-b py-1 bg-white">
      <div className="flex items-center justify-between  2xl:max-w-full px-5 xs:px-0 mx-auto 2xl:justify-evenly ">
        <div className="hidden md:block">
          <Link to={"/"}>
            {" "}
            <img src={Logo} alt="LocalTools" />
          </Link>
        </div>
        {/* DropDown Section-------------------------------------- */}
        <div className="hidden lg:block ">
          <Searbars />
        </div>
        <div>
          <div className="flex items-center gap-4 ml-3">
            <span>
              <svg
                width="20"
                height="20"
                viewBox="0 0 20 23"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M11.98 4.64094C11.8026 3.15337 10.5367 2 9.0013 2C7.46596 2 6.2 3.15337 6.02257 4.64094C3.5199 5.77546 1.77908 8.29555 1.77908 11.2222V16.2399L0.108582 19.5494C-0.227141 20.2145 0.25626 21 1.0013 21H6.17201C6.58385 22.1652 7.69509 23 9.0013 23C10.3075 23 11.4188 22.1652 11.8306 21H17.0013C17.7463 21 18.2297 20.2145 17.894 19.5494L16.2235 16.2399V11.2222C16.2235 8.29555 14.4827 5.77546 11.98 4.64094ZM14.3308 16.9286L15.3764 19H2.62623L3.6718 16.9286C3.74234 16.7888 3.77908 16.6345 3.77908 16.478V11.2222C3.77908 8.33807 6.11715 6 9.0013 6C11.8855 6 14.2235 8.33807 14.2235 11.2222V16.478C14.2235 16.6345 14.2603 16.7888 14.3308 16.9286Z"
                  fill="#92929D"
                />
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M16 8C18.2091 8 20 6.20914 20 4C20 1.79086 18.2091 0 16 0C13.7909 0 12 1.79086 12 4C12 6.20914 13.7909 8 16 8Z"
                  fill="#FC5A5A"
                />
              </svg>
            </span>
            <span>
              <span className="relative">
                <Link to={"/cart"}>
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 25 22"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M24.2269 5.41567C24.1144 5.2532 23.9643 5.12041 23.7893 5.02866C23.6144 4.93692 23.4198 4.88896 23.2222 4.88889H6.51811L5.10766 1.50334C4.92273 1.0575 4.60957 0.676613 4.20789 0.408974C3.80622 0.141335 3.33411 -0.00100349 2.85144 5.32551e-06H0V2.44445H2.85144L8.64966 16.3594C8.74253 16.5821 8.89921 16.7722 9.09995 16.906C9.3007 17.0398 9.53654 17.1111 9.77777 17.1111H19.5555C20.0652 17.1111 20.5211 16.7945 20.7008 16.3191L24.3674 6.54133C24.4367 6.35631 24.4601 6.15725 24.4356 5.9612C24.4112 5.76516 24.3395 5.57797 24.2269 5.41567ZM18.7085 14.6667H10.593L7.53744 7.33333H21.4585L18.7085 14.6667Z"
                      fill="#92929D"
                    />
                    <path
                      d="M10.3885 22.0002C11.401 22.0002 12.2218 21.1793 12.2218 20.1668C12.2218 19.1543 11.401 18.3335 10.3885 18.3335C9.37599 18.3335 8.55518 19.1543 8.55518 20.1668C8.55518 21.1793 9.37599 22.0002 10.3885 22.0002Z"
                      fill="#92929D"
                    />
                    <path
                      d="M18.9447 22.0002C19.9572 22.0002 20.778 21.1793 20.778 20.1668C20.778 19.1543 19.9572 18.3335 18.9447 18.3335C17.9321 18.3335 17.1113 19.1543 17.1113 20.1668C17.1113 21.1793 17.9321 22.0002 18.9447 22.0002Z"
                      fill="#92929D"
                    />
                  </svg>
                </Link>
                <span className="absolute -top-2 left-2">
                {item.length>0 ? (
                  <>
                  <svg width="8" height="8" className="rounded-full" xmlns="http://www.w3.org/2000/svg">
                  <rect width="50" height="50" fill="#ff4242" />
                </svg></>
                ):(null)}
              </span>
              </span>
              
            </span>
            <div className="flex lg:flex-row flex-row-reverse  items-center gap-4">
              {auth ? (
                <>
                  <img src={profileimage} className=" w-12 h-12 rounded-full" />
                  <div className="relative">
                    <span
                      className="cursor-pointer "
                      onClick={() => {
                        setOpen(!Open);
                      }}
                    >
                      <svg
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M4 9L12 17L20 9"
                          stroke="#92929D"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                      </svg>
                    </span>
                    {Open && (
                      <div
                        ref={dropdown}
                        className="absolute bg-white rounded-lg w-32 2xl:w-40 text-center z-10 -translate-x-14 top-10"
                      >
                        <ul
                          onClick={() => {
                            setOpen(false);
                          }}
                        >
                          <li className=" hover:bg-[#F6F7FB] hover:rounded-t-lg p-2">
                            <Link to={"/profile"}>Profile</Link>
                          </li>
                          <li className="p-2  hover:bg-[#F6F7FB]">
                            <a href="#">Setting</a>
                          </li>
                          <li
                            onClick={() => {
                              logOut();
                            }}
                            className="p-2  hover:bg-[#F6F7FB] hover:rounded-b-lg"
                          >
                            <a href="#">LogOut</a>
                          </li>
                        </ul>
                      </div>
                    )}
                  </div>
                </>
              ) : (
                <>
                  <div>
                    <Link to={"/Login"}>
                      <h1 className="font-Mont font-semibold text-lg">Login</h1>
                    </Link>
                  </div>
                </>
              )}

              <div>
                {checkauth ? (
                  <>
                    <Not_auth_Model check={checkauth} setCheck={setAuth} />
                  </>
                ) : null}

                <button
                  onClick={() => {
                    authCheck();
                  }}
                  className="font-Mont bg-color-primary-yel
            font-[600] text-white px-5 py-2 rounded-lg "
                >
                  {/* <Link to="/addpost">Post Ad</Link> */}
                  Post Ad
                </button>
              </div>
            </div>
          </div>
        </div>

        <div>
          <span
            className="lg:hidden relative text-xl"
            onClick={() => {
              setSearchOpen(!searchOpen);
            }}
          >
            {!searchOpen ? <BsSearch /> : <RxCross2 />}
          </span>
          {searchOpen && (
            <div className="absolute left-0 z-30 bg-white top-[60px] md:top-24 p-4 w-full border rounded-b-lg">
              <Searbars />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
