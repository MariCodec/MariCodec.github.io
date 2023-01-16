import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  totalPrice: 0,
  items: [],
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItem: (state, action) => {
      const findItem = state.items.find(
        (obj) =>
          obj.id === action.payload.id && obj.price === action.payload.price
      );

      if (findItem) {
        findItem.count++;
      } else {
        state.items.push({
          ...action.payload,
          count: 1,
        });
      }

      state.totalPrice = state.items.reduce((sum, obj) => {
        return obj.price * obj.count + sum;
      }, 0);
    },
    plusItem: (state, action) => {
      const findItem = state.items.find(
        (obj) =>
          obj.id === action.payload.id && obj.price === action.payload.price
      );
      if (findItem) {
        findItem.count++;
      }
      state.totalPrice = state.items.reduce((sum, obj) => {
        return obj.price * obj.count + sum;
      }, 0);
    },
    minusItem: (state, action) => {
      const findItem = state.items.find(
        (obj) =>
          obj.id === action.payload.id && obj.price === action.payload.price
      );
      if (findItem && findItem.count > 0) {
        findItem.count--;
        state.totalPrice = state.totalPrice - findItem.price;
      }
    },
    // ??? перевірити
    removeItem: (state, action) => {
      state.items = state.items.filter(
        (obj) =>
          obj.id !== action.payload.id || obj.price !== action.payload.price
      );
      state.totalPrice = state.items.reduce((sum, obj) => {
        return obj.price * obj.count + sum;
      }, 0);
    },
    clearItems: (state) => {
      state.items = [];
      state.totalPrice = 0;
    },
  },
});

// Action creators are generated for each case reducer function
export const { addItem, removeItem, clearItems, minusItem, plusItem } =
  cartSlice.actions;

export default cartSlice.reducer;
