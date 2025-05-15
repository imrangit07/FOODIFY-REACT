import { configureStore } from "@reduxjs/toolkit";
import DishSlice from '../src/Slice/DishSlice';
import AuthSlice from '../src/Slice/AuthSlice'

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


const loadAuthFromLS = () => {
  try {
    const authData = localStorage.getItem('authState');
    return authData ? JSON.parse(authData) : {
      user: null,
      isAuthenticated: false,
    };
  } catch (error) {
    console.error('Error loading auth data:', error);
    return {
      user: null,
      isAuthenticated: false,
    };
  }
};



const preloadedState = {
  allDish: {
    dish: loadCartDishFromLS(),
    wish: loadWishDishFromLS(),
  },
  authUser: loadAuthFromLS(),
};

const store = configureStore({
  reducer: {
    allDish: DishSlice,
    authUser: AuthSlice,
  },
  preloadedState,
})

store.subscribe(() => {
  const { authUser } = store.getState();
  try {
    localStorage.setItem('authState', JSON.stringify(authUser));
  } catch (error) {
    console.error("Error saving auth state:", error);
  }
});
export default store;