import { createSlice } from "@reduxjs/toolkit";
import { toast } from 'react-toastify';



const AuthSlice = createSlice({
    name: "authUser",
    initialState: {
        user: null,
        isAuthenticated: false,
        loading: false,
        error: null
    },
    reducers: {
        signupSuccess: (state, action) => {
            state.user = action.payload;
            state.isAuthenticated = false;
            state.error = null;

            const existingUsers = JSON.parse(localStorage.getItem('users')) || [];
            const userExists = existingUsers.some(user => user.email === action.payload.email);

            if (!userExists) {
                const updatedUsers = [...existingUsers, action.payload];
                localStorage.setItem('users', JSON.stringify(updatedUsers));

                toast.success("SignUp Successfuly!", {
                    style: {
                        fontSize: '16px',
                    },
                });
            } else {
                toast.info("This Email Address  Already Exist!", {
                    style: {
                        fontSize: '16px',
                    },
                });
            }
        },
        loginStart: (state) => {
            state.loading = true;
            state.error = null;
        },
        loginSuccess: (state, action) => {
            state.user = action.payload;
            state.isAuthenticated = true;
            state.loading = false;
            state.error = null;


            toast.success("Login Successfuly!", {
                style: {
                    fontSize: '16px',
                },
            });
            
        },
        loginFailure: (state, action) => {
            state.loading = false;
            state.error = action.payload;
        },
          logout: (state) => {
            state.user = null;
            state.isAuthenticated = false;
            state.loading = false;
            state.error = null;
            
       
            toast.success("Logged out successfully!", {
                style: {
                    fontSize: '16px',
                },
            });
        }
    }
});

export const {
    signupSuccess,
    loginStart,
    loginSuccess,
    loginFailure,
    logout
} = AuthSlice.actions;

export default AuthSlice.reducer;