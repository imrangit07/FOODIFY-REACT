import { configureStore } from "@reduxjs/toolkit";
import DishSlice from '../src/Slice/DishSlice'

const loadCartDishFromLS = () => {
  try {
    const cartData = localStorage.getItem('cartDish');
    return cartData ? JSON.parse(cartData) : [];
  } catch (error) {
    console.error('Not Found Any Data in LocalStorage', error);
    return [];
  }
};
const loadWishDishFromLS = () => {
  try {
    const cartData = localStorage.getItem('wishDish');
    return cartData ? JSON.parse(cartData) : [];
  } catch (error) {
    console.error('Not Found Any Data in LocalStorage', error);
    return [];
  }
};


const preloadedState = {
  allDish: {
    dish: loadCartDishFromLS(),
    wish: loadWishDishFromLS(),
  },
};

const store = configureStore({
  reducer: {
    allDish: DishSlice,
  },
  preloadedState,
})

export default store;