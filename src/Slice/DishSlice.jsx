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
            const existingItem = state.dish.some(item => item.id === newItem.id);

            if (existingItem) {
                alert("Already exist!");
                return;
            }

            state.dish.push(newItem);
            localStorage.setItem("cartDish", JSON.stringify(state.dish));

        },

        AddToWishList: (state, action) => {
            const newItem = action.payload;
            const existingWish = state.wish.some(item => item.id === newItem.id);

            if (existingWish) {
                alert("Already exist!");
                return;
            }

            state.wish.push(newItem);
            localStorage.setItem("wishDish", JSON.stringify(state.wish));
        },
    }
})

export const { AddToCart, AddToWishList } = DishSlice.actions;
export default DishSlice.reducer;