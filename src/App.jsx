import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";

import Documents from "./Pages/Documents";
import Profile from "./Pages/Profile/Profile";
import Changepassword from "./Pages/Changepassword";
import SellerAccount from "./Pages/SellerAccount/SellerAccount";
import Payment from "./Pages/Payment/Payment";
import Buyer from "./Pages/BuyerAccount/Buyer";

import AddPost from "./Pages/Add Post/AddPost";
import Notification from "./Pages/Notification/Notification";

import BusinessProfile from "./Pages/BusinessProfile/BusinessProfile";

import Signin from "./Pages/LogIn & Registration/Signin";
import ForgetPassword from "./Pages/LogIn & Registration/ForgetPassword";
import Registration from "./Pages/LogIn & Registration/Registration";
import ResetPassword from "./Pages/LogIn & Registration/ResetPassword";
import MainDashboard from "./Pages/MainDashboard/LandingPage";
import InnerPage from "./Pages/FiltersPage/InnerPage";
import SingleProduct from "./Pages/SingleProduct/SingleProduct";
import ProductCard from "./Component/Shared/ProductCard";
import ProductCart from "./Pages/Cart/ProductCart";
import CheckOut from "./Pages/Checkout/CheckOut";
import GNotification from "./Pages/GrahamNotification/GNotification";
import Error_404 from "./Pages/Error Pages/Error_404";
import Error_505 from "./Pages/Error Pages/Error_505";
import About from "./Pages/AboutUs/About";
import Help from "./Pages/Help/Help";
import Help_2 from "./Pages/Help/Help_2";
import Help_3 from "./Pages/Help/Help_3";
import SaftyTip from "./Pages/SaftyTip/SaftyTip";
import DataProtection from "./Pages/DataProtection/DataProtection";
import CurrentNotice from "./Pages/CurrentNotice/CurrentNotice";
import Protected from "./Pages/Protected/Protected";
import { Provider } from "react-redux";
import store from "./Store/store";
import { persistStore } from "redux-persist";
import { PersistGate } from "redux-persist/integration/react";

let persist = persistStore(store);
function App() {
  return (
    <>
      <Provider store={store}>
        <PersistGate persistor={persist}>
          <BrowserRouter>
            <Routes>
              <Route element={<Protected />}>
                {/* <Route path="/" element={<Dashboard />} /> */}

                <Route path="/notice" element={<CurrentNotice />} />
                <Route path="/dataprotection" element={<DataProtection />} />
                <Route path="/saftytips" element={<SaftyTip />} />
                <Route path="/help3" element={<Help_3 />} />
                <Route path="/help2" element={<Help_2 />} />
                <Route path="/help" element={<Help />} />
                <Route path="/about" element={<About />} />
                <Route path="/notification" element={<GNotification />} />
                <Route path="/checkout" element={<CheckOut />} />

                <Route path="/profile" element={<Profile />} />
                <Route path="/changepassword" element={<Changepassword />} />
                <Route path="/documents" element={<Documents />} />
                <Route path="/selleraccount" element={<SellerAccount />} />
                <Route path="/buyeraccount" element={<Buyer />} />
                <Route path="/payments" element={<Payment />} />
                <Route path="/addpost" element={<AddPost />} />
                <Route path="/notification" element={<Notification />} />

                <Route path="/BusinessProfile" element={<BusinessProfile />} />
              </Route>
              <Route path="/cart" element={<ProductCart />} />
              <Route path="/filter/:category" element={<InnerPage />} />
              <Route path="/singleproduct/:id" element={<SingleProduct />} />
              <Route path="/Login" element={<Signin />} />
              <Route path="/ForgetPassword" element={<ForgetPassword />} />
              <Route path="/Registration" element={<Registration />} />
              <Route path="/resetpassword/:id" element={<ResetPassword />} />
              <Route path="/505" element={<Error_505 />} />
              <Route path="*" element={<Error_404 />} />
              <Route path="/" element={<MainDashboard />} />
            </Routes>
          </BrowserRouter>
        </PersistGate>
      </Provider>
    </>
  );
}

export default App;
