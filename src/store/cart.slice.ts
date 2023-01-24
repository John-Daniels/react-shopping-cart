import { createSlice } from "@reduxjs/toolkit";

export const sliceName = "cart";

const initialState: {
  items: Array<ICartItem>
} = {
  items: [],
};

// const cartItem = {
//   id: 1,
//   name: "iPhone 12 Pro",
//   desc: "Apple iPhone 12th generation",
//   price: 999,
//   color: "#33505a",
//   image:
//     "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-12-pro-blue-hero?wid=940&hei=1112&fmt=png-alpha&qlt=80&.v=1604021661000",
//   companyName: "Apple",

//   itemCount: 1,
// };

export interface ICartItem {
  id: number,
  name: string,
  desc: string,
  price: number,
  color: string,
  image: string,
  companyName: string,
  itemCount: number,
}

export const cartSlice = createSlice({
  name: sliceName,
  initialState,
  reducers: {
    //     decrement: (state) => {
    //       state.value -= 1;
    //     },
    //     incrementByAmount: (state, action) => {
    //       state.value += action.payload;
    //     },

    add: (state, action) => {
      const newCart = {
        ...action.payload,
        itemCount: 1,
      };

      const cartItem = state.items.find((item) => item.id == newCart.id);
      if (!cartItem) {
        state.items.unshift(newCart);
      } else {
        state.items = state.items.filter((items) => items.id !== newCart.id);
      }

      return state;
    },

    remove: (state, action) => {
      const id = action.payload;
      const cartItem = state.items.find((item) => item.id == id);
      if (cartItem) {
        state.items = state.items.filter((items) => items.id !== id);
      }

      return state;
    },

    incrementCartItemById: (state, action) => {
      const id = action.payload;
      const cartItemIndex = state.items.findIndex((item) => item.id == id);
      state.items[cartItemIndex].itemCount += 1;
    },

    decrementCartItemById: (state, action) => {
      const id = action.payload;
      const cartItemIndex = state.items.findIndex((item) => item.id == id);
      state.items[cartItemIndex].itemCount -= 1;
    },
  },
});

// Action creators are generated for each case reducer function
export const { add, remove, incrementCartItemById, decrementCartItemById } =
  cartSlice.actions;

export default cartSlice.reducer;
