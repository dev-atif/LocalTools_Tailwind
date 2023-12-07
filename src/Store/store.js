import { configureStore } from "@reduxjs/toolkit";
import CartReducer from "./CartSlice";


const store  = configureStore({
    reducer:{
        cart:CartReducer
    },
    middleware: (getDefaultMiddleware) => {
        return getDefaultMiddleware({
            serializableCheck: false,
        });
      },
    
})
export default store;