import { configureStore } from "@reduxjs/toolkit";
import DishSlice from '../src/Slice/DishSlice'

const loadCartDishFromLS = () => {
  try {
    const cartData = localStorage.getItem('cartDish');
      return cartData ? JSON.parse(cartData).map(item => ({
      ...item,
      quantity: item.quantity || 1
    })) : [];
  } catch (error) {
    console.error('Error loading CartItem:', error);
    return [];
  }
};
const loadWishDishFromLS = () => {
  try {
    const cartData = localStorage.getItem('wishDish');
    return cartData ? JSON.parse(cartData) : [];
  } catch (error) {
        console.error('Error loading wishlist:', error);
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