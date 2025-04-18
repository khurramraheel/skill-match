import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./createSlice"
// Configure the Redux store
export const store = configureStore({
  reducer: {
    auth: authReducer, 
  },
});
