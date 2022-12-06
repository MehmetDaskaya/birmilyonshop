import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  signedIn: null,
};

export const itemSlice = createSlice({
  name: "item",
  initialState,
  reducers: {
    setFilteredItem: (state, action) => {
      state.signedIn = action.payload;
    },
  },
});

export const { setFilteredItem } = itemSlice.actions;

//Selectors
export const selectFilteredItem = (state) => state.item.filteredItem;

export default itemSlice.reducer;
