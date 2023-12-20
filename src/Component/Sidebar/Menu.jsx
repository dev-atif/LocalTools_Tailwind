import buyerAccount from "../NavBar/SVG/buyerAccount";
import document from "../NavBar/SVG/document";
import logout from "../NavBar/SVG/logout";
import notification from "../NavBar/SVG/notification";
import password from "../NavBar/SVG/password";
import payment from "../NavBar/SVG/payment";
import profile from "../NavBar/SVG/profile";
import sellerAccount from "../NavBar/SVG/sellerAcoount";

 export const Menu = [
    {
      id:1,
      name: "Profile Information",
      icon: profile,
      path: "/profile",
      'bread':'Manage Profile'
    },
    {
      id:2,
      name: "Change Password",
      icon:password,
      'bread':'Change password',
       
  
      path: "/changepassword",
    },
    {
      id:3,
      name: "Documents",
      icon: document,
      path: "/documents",
      'bread':'Documents',
    },
    {
      id:4,
      name: "Seller Account",
      icon:sellerAccount,
      path: "/selleraccount",
      'bread':'Manage Seller Account',
    },
    {
      id:5,
      name: "Buyer Account",
      icon: buyerAccount,
  
      path: "/buyeraccount",
      'bread':'Manage Buyer Account',
    },
    {
      id:6,
      name: "Payments",
      icon:payment,
  
      path: "/payments",
      'bread':'Manage Payments',
    },
    {
      id:7,
      name: "Notifications",
      icon:notification,
      path: "/notification",
      'bread':'notifications',
    },
    {
      id:8,
      name: "Log Out",
      icon:logout,
      path: "/logout",
      
    },
  ];