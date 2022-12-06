import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  signedIn: null,
};

export const navSlice = createSlice({
  name: "nav",
  initialState,
  reducers: {
    setSignedIn: (state, action) => {
      state.signedIn = action.payload;
    },
  },
});

export const { setSignedIn } = navSlice.actions;

//Selectors
export const selectSignedIn = (state) => state.nav.signedIn;

export default navSlice.reducer;
