import { configureStore } from "@reduxjs/toolkit";
import DishSlice from '../src/Slice/DishSlice';
import AuthSlice from '../src/Slice/AuthSlice';
import CheckoutSlick from "../src/Slice/CheckOutSlice";

// // This is for Persist Test
// import { persistStore, persistReducer } from 'redux-persist';
// import storage from 'redux-persist/lib/storage';
// // This is for Persist Test

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
const loadOrderDataFromLS = () => {
  try {
    const orderItems = JSON.parse(localStorage.getItem("Orders"));
    return {
      orderData: orderItems || {}
    };
  } catch (error) {
    console.error('Error loading order data:', error);
    return {
      orderData: {}
    };
  }
};

// //This is For PersistConfig
// const persistConfig = {
//   key: 'root',
//   storage,
// };
// const persistedReducer = persistReducer(persistConfig, CheckOutSlice);
// //This is For PersistConfig

const preloadedState = {
  allDish: {
    dish: loadCartDishFromLS(),
    wish: loadWishDishFromLS(),
  },
  authUser: loadAuthFromLS(),
  checkout: loadOrderDataFromLS(),
};

const store = configureStore({
  reducer: {
    allDish: DishSlice,
    authUser: AuthSlice,
    checkout: CheckoutSlick,
  },
  preloadedState,
})

store.subscribe(() => {
  const { authUser } = store.getState();
  try {
    localStorage.setItem('authState', JSON.stringify(authUser));
    localStorage.setItem('Orders', JSON.stringify(state.checkout.orderData));
  } catch (error) {
    console.error("Error saving auth state:", error);
  }
});
export default store;
// export const persistor = persistStore(store);