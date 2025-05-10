import { createSlice } from "@reduxjs/toolkit";

const DishSlice = createSlice({
    name: 'allDish',
    initialState: {
        dish: [],
        wish: []
    },
    reducers: {
        AddToCart: (state, action) => {
            const newItem = action.payload;
            const existingItem = state.dish.find(item => item.id === newItem.id);

            if (existingItem) {
                existingItem.quantity += 1;
            } else {
                state.dish.push({ ...newItem, quantity: 1 });
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

        },

        AddToWishList: (state, action) => {
            const newItem = action.payload;
            const existingWish = state.wish.some(item => item.id === newItem.id);

            if (existingWish) {
                existingWish.quantity += 1;
            } else {
                state.wish.push({ ...newItem, quantity: 1 });
            }
            localStorage.setItem("wishDish", JSON.stringify(state.wish));
        },
        RemoveToWishItem: (state, action) => {
            const itemId = action.payload;

            state.wish = state.wish.filter(item => item.id !== itemId);

            localStorage.setItem("wishDish", JSON.stringify(state.wish));

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