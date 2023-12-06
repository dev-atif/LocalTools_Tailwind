import { createSlice } from "@reduxjs/toolkit";

const initialState = [];
const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    add(state, action) {
      /* state.push(action.payload); */
     const item = state.find((item)=>item._id===action.payload._id);
     if(item){
      item.Quantity+=1;
     }
     else{
      action.payload.Quantity=1;
      state.push(action.payload)
     }
    },
    remove(state, action) {
        /* return state.filter((item) => item.id !== action.payload); */
        const items = state.find((item)=>item._id===action.payload._id)
        if(items){
         if(items.Quantity>1){
          items.Quantity -=1;
         } 
         else{
          return state.filter((item)=>item._id!==action.payload._id)
         }
        }
    },
    removeFromCart(state, action) {
      // Remove the product completely from the array
      return state.filter((item) => item._id !== action.payload._id);
    },
  },
});
export const {add ,remove ,removeFromCart} = cartSlice.actions;
export default cartSlice.reducer;