import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./Component/NavBar/Navbar";
import Dashboard from "./Dashboard";
import Documents from "./Pages/Documents";
import Profile from "./Pages/Profile/Profile";
import Changepassword from "./Pages/Changepassword";
import SellerAccount from "./Pages/SellerAccount/SellerAccount";
import Payment from "./Pages/Payment/Payment";
import Buyer from "./Pages/BuyerAccount/Buyer";
import SubNav from "./Component/SubNav";
import AddPost from "./Pages/Add Post/AddPost";
import Notification from './Pages/Notification/Notification';
import LogOut from "./Pages/LogOut/LogOut";

function App() {
  return (
    <>
      <BrowserRouter>
     {/*  <div>
        <Navbar />
      </div> */}
     
        <Routes>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/" element={<Profile />} />
          <Route path="/changepassword" element={<Changepassword />} />
          <Route path="/documents" element={<Documents />} />
          <Route path="/selleraccount" element={<SellerAccount />} />
          <Route path="/buyeraccount" element={<Buyer/>} />
          <Route path="/payments" element={<Payment />} />
          <Route path="/addpost" element={<AddPost />} />
          <Route path="/notification" element={<Notification />} />
          <Route path="/logout" element={<LogOut />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
