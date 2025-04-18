import { createSlice } from "@reduxjs/toolkit";


let initialState={
  user:null,
};


const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setUser: (state, action) => {
      state.user = action.payload;
      
    },
 
  },
});


export const { setUser } = authSlice.actions;
export default authSlice.reducer;
