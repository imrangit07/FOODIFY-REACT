import { createSlice } from "@reduxjs/toolkit";
import { toast } from 'react-toastify';


const DishSlice = createSlice({
    name: 'allDish',
    initialState: {
        dish: [],
        wish: []
    },
    reducers: {
        AddToCart: (state, action) => {
            const newItem = action.payload;
            const authState = localStorage.getItem("authState");
            const isAuthUser = authState ? JSON.parse(authState) : { isAuthenticated: false };

            const existingItem = state.dish.some(item => item.id === newItem.id);

            if (isAuthUser.isAuthenticated) {

                if (existingItem) {
                    // existingItem.quantity += 1;
                    toast.info("Already in cart! 🛒", {
                        style: {
                            fontSize: '16px',
                        },
                    });

                } else {
                    state.dish.push({ ...newItem, quantity: 1 });

                    toast.success("Added to Crt! 🍕", {
                        style: {
                            fontSize: '16px',
                        },
                    });
                }
                localStorage.setItem("cartDish", JSON.stringify(state.dish));
            } else {
                toast.warn("Please Login or Signup First!", {
                    style: { fontSize: '16px' },
                    position: "top-center"
                });
            }

        },
        addRemoveQuantity: (state, action) => {
            const { itemId, stock, quantityValue } = action.payload;

            console.log(itemId, quantityValue);

            const existingItem = state.dish.find(item => item.id === itemId);

            if (existingItem.quantity <= 1 && quantityValue === -1) {
                toast.info("Quantity cannot be less than 1.", {
                    style: {
                        fontSize: '16px',
                    },
                });
                return;
            }

            if (quantityValue === 1 && existingItem.quantity >= stock) {
                toast.info("Maximum available quantity reached!", {
                    style: {
                        fontSize: '16px',
                    },
                });
                return;
            }


            existingItem.quantity += quantityValue;
            localStorage.setItem("cartDish", JSON.stringify(state.dish));

        },
        RemoveToCart: (state, action) => {

            const authState = localStorage.getItem("authState");
            const isAuthUser = authState ? JSON.parse(authState) : { isAuthenticated: false };

            if (isAuthUser.isAuthenticated) {
                const itemId = action.payload;

                state.dish = state.dish.filter(item => item.id !== itemId);

                localStorage.setItem("cartDish", JSON.stringify(state.dish));

                toast.info("Removed From Cart! 🍔", {
                    style: {
                        fontSize: '16px',
                    },
                });
            } else {
                toast.warn("Please Login or Signup First!", {
                    style: { fontSize: '16px' },
                    position: "top-center"
                });
            }



        },

        AddToWishList: (state, action) => {
            const newItem = action.payload;

            const authState = localStorage.getItem("authState");
            const isAuthUser = authState ? JSON.parse(authState) : { isAuthenticated: false };

            const existingWish = state.wish.some(item => item.id === newItem.id);


            if (isAuthUser.isAuthenticated) {

                if (existingWish) {
                    toast.info("Already in Cart! 🛒", {
                        style: {
                            fontSize: '16px',
                        },
                    });
                } else {
                    state.wish.push({ ...newItem, quantity: 1 });

                    toast.success("Added to Wishlist! 😋", {
                        style: {
                            fontSize: '16px',
                        },
                    });
                }
                localStorage.setItem("wishDish", JSON.stringify(state.wish));
            } else {
                toast.warn("Please Login or Signup First!", {
                    style: { fontSize: '16px' },
                    position: "top-center"
                });
            }

        },
        RemoveToWishItem: (state, action) => {
            const itemId = action.payload;

            const authState = localStorage.getItem("authState");
            const isAuthUser = authState ? JSON.parse(authState) : { isAuthenticated: false };

            if (isAuthUser.isAuthenticated) {

                state.wish = state.wish.filter(item => item.id !== itemId);

                localStorage.setItem("wishDish", JSON.stringify(state.wish));

                toast.warn("emoved From Cart! 🍔", {
                    style: {
                        fontSize: '16px',
                    },
                });
            } else {
                toast.warn("Please Login or Signup First!", {
                    style: { fontSize: '16px' },
                    position: "top-center"
                });
            }
        },

    }
})

export const {
    AddToCart,
    AddToWishList,
    RemoveToCart,
    RemoveToWishItem,
    addRemoveQuantity,
} = DishSlice.actions;
export default DishSlice.reducer;