import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  piece: 0,
  favorites: [],
};

export const itemSlice = createSlice({
  name: "item",
  initialState,
  reducers: {
    setItemPiece: (state, action) => {
      state.piece = action.payload;
    },

    setFavorites: (state, action) => {
      const favItem = state.favorites.find(
        (item) => item.id == action.payload.id
      );
      if (favItem) {
        favItem.quantity + 1;
      } else {
        state.favorites.push({ ...action.payload, quantity: 1 });
      }
    },
  },
});

export const { setItemPiece, setFavorites } = itemSlice.actions;

//Selectors
export const selectItemPiece = (state) => state.item.piece;
export const selectFavorites = (state) => state.item.favorites;

export default itemSlice.reducer;
