import { combineReducers, configureStore  } from "@reduxjs/toolkit";
import CartReducer from "./CartSlice";
import storage from 'redux-persist/lib/storage'
import { persistReducer } from 'redux-persist'; // Add import for persistReducer

const persistConfig = {
    key: 'root',
    storage,
  };
  let rootReducer = combineReducers({cart:CartReducer})

   let persistedReducer = persistReducer(persistConfig ,rootReducer)
  
const store  = configureStore({
    reducer:persistedReducer,
    middleware: (getDefaultMiddleware) => {
        return getDefaultMiddleware({
            serializableCheck: false,
        });
      },
    
})
export default store;