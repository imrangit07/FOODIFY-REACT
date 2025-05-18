import { createSlice } from "@reduxjs/toolkit";

const CheckOutSlice = createSlice({
    name: "checkout",
    initialState: {
        orderData: {}
    },
    reducers: {
    CheckOutSuccess: (state, action) => {
      state.orderData = action.payload;
      try {
        localStorage.setItem("Orders", JSON.stringify(action.payload));
      } catch (error) {
        console.error("Error saving to localStorage:", error);
      }
    }
  }
});
export const { CheckOutSuccess } = CheckOutSlice.actions
export default CheckOutSlice.reducer