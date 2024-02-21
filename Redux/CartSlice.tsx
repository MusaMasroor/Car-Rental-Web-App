import { createSlice } from "@reduxjs/toolkit";
import { produce } from "immer";

interface CartItem {
  id: number;
  title: string;
  price: number;
  imageUrl: string;
  quantity: number;
}

interface YourItemType {
  productCategory: string;
  details: CartItem[];
}

const CartSlice = createSlice({
  name: "Cart",
  initialState: [] as YourItemType[],
  reducers: {
    add: (state, action) => {
      const existingItem = state.find(
        (item) => item.details[0].id === action.payload.id
      );

      if (existingItem) {
        // If item already exists, increment quantity
        existingItem.details[0].quantity += 1;
      } else {
        // If it's a new item, add it with quantity 1
        state.push({
          productCategory: "all",
          details: [{ ...action.payload, quantity: 1 }],
        });
      }
    },
    remove: (state, action) => {
      return produce(state, (draftState) => {
        const existingItemIndex = draftState.findIndex(
          (item) => item.details[0].id === action.payload.id
        );

        if (existingItemIndex !== -1) {
          const existingItem = draftState[existingItemIndex];

          // Decrease quantity
          existingItem.details[0].quantity -= 1;

          // Remove item if quantity becomes zero
          if (existingItem.details[0].quantity <= 0) {
            draftState.splice(existingItemIndex, 1);
          }
        }
      });
    },
  },
});

export const { add, remove } = CartSlice.actions;
export default CartSlice.reducer;

// const CartSlice = createSlice({
//   name: "Cart",
//   initialState: [] as YourItemType[],
//   reducers: {
//     add: (state, action) => {
//       state.push(action.payload);
//     },
//     remove: (state, action) => {
//       return state.filter((item) => item.details[0].title !== action.payload);
//     },
//   },
// });
// "use client";
// import { createSlice, PayloadAction } from "@reduxjs/toolkit";

// interface CartItem {
//   id: number; // Change the type to match your actual data structure
//   // Add other properties as needed
// }

// const cartSlice = createSlice({
//   name: "Cart",
//   initialState: [] as CartItem[], // Provide type for initialState
//   reducers: {
//     add(state, action: PayloadAction<CartItem>) {
//       state.push(action.payload);
//     },
//     remove(state, action: PayloadAction<number>) {
//       return state.filter((item) => item.id !== action.payload);
//     },
//   },
// });

// export const { add, remove } = cartSlice.actions;
// export default cartSlice.reducer;
