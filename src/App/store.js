import { configureStore } from "@reduxjs/toolkit";

import authReducer from '../Features/auth/authSlice'
import productReducer from '../Features/products/productSlice'
import cartReducer from '../Features/Cart/cartSlice'

 const store = configureStore({
    reducer : {
        auth : authReducer ,
         products : productReducer, 
         cart : cartReducer, 
    },
    
});

export default store;