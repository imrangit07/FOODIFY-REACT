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
            const existingItem = state.dish.some(item => item.id === newItem.id);

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



        },
        addRemoveQuantity: (state, action) => {
            const { itemId, quantityValue } = action.payload;

            console.log(itemId, quantityValue);

            const existingItem = state.dish.find(item => item.id === itemId);

            if (existingItem) {
                existingItem.quantity += quantityValue;

                if (existingItem.quantity < 1) {
                    state.dish = state.dish.filter(item => item.id !== itemId);
                }

                localStorage.setItem("cartDish", JSON.stringify(state.dish));
            }
        },
        RemoveToCart: (state, action) => {
            const itemId = action.payload;

            state.dish = state.dish.filter(item => item.id !== itemId);

            localStorage.setItem("cartDish", JSON.stringify(state.dish));

            toast.warn("Removed From Cart! 🍔", {
                style: {
                    fontSize: '16px',
                },
            });

        },

        AddToWishList: (state, action) => {
            const newItem = action.payload;
            const existingWish = state.wish.some(item => item.id === newItem.id);

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


        },
        RemoveToWishItem: (state, action) => {
            const itemId = action.payload;

            state.wish = state.wish.filter(item => item.id !== itemId);

            localStorage.setItem("wishDish", JSON.stringify(state.wish));

            toast.warn("emoved From Cart! 🍔", {
                style: {
                    fontSize: '16px',
                },
            });

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