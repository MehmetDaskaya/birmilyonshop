import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  piece: 0,
  totalSum: 0,
  favorites: [],
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    setCartPiece: (state, action) => {
      state.piece = action.payload;
    },
    setTotalSum: (state, action) => {
      state.totalSum = action.payload;
    },
    setFavorites: (state, action) => {
      state.favorites = action.payload;
    },
  },
});

export const { setCartPiece, setTotalSum, setFavorites } = cartSlice.actions;

//Selectors
export const selectCartPiece = (state) => state.cart.piece;
export const selectTotalSum = (state) => state.cart.totalSum;
export const selectFavorites = (state) => state.cart.favorites;

export default cartSlice.reducer;
