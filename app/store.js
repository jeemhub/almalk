import { configureStore } from "@reduxjs/toolkit"
import cartSlice from "../slice/cartSlice"
import userSlice from "../slice/userSlice"
import authReducer from '../slice/authSlice';

export const store = configureStore({
    reducer:{
        auth: authReducer,
        cart: cartSlice,
        user: userSlice,

    },
})