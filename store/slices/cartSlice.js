import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  piece: 0,
  totalSum: 0,
  cart: [],
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
    setCart: (state, action) => {
      state.cart.push(action.payload);
    },
  },
});

export const { setCartPiece, setTotalSum, setCart } = cartSlice.actions;

//Selectors
export const selectCartPiece = (state) => state.cart.piece;
export const selectTotalSum = (state) => state.cart.totalSum;
export const selectCart = (state) => state.cart.cart;

export default cartSlice.reducer;
