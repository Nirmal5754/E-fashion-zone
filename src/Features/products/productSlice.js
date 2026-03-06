import { createSlice } from "@reduxjs/toolkit";
import { fetchProductById, fetchProducts } from "./productThunk";
import { exp } from "firebase/firestore/pipelines";


const initialState = {
items : [] , 
selectedProduct : null ,
loading : false , 
error : null,
}

const productSlice = createSlice({
    name : 'products' , 
    initialState , 
    reducers : { 
        clearSelectedProduct (state){
state.selectedProduct = null;
        }
    } , 
    extraReducers : (builder)=>{
builder

.addCase(fetchProducts.pending , (state)=>{
    state.loading = true;
    state.error = null;
})

.addCase(fetchProducts.fulfilled , (state,action)=>{
    state.loading = false;
    state.items = action.payload;
    state.error = null;
})
.addCase(fetchProducts.rejected , (state,action)=>{
    state.loading = false;
    state.error = action.payload;
})

.addCase(fetchProductById.pending, (state)=>{
     state.loading = true;
    state.error = null;
})
.addCase(fetchProductById.fulfilled, (state,action)=>{
     state.loading = false;
    state.selectedProduct = action.payload;
    state.error = null;
})
.addCase(fetchProductById.rejected, (state,action)=>{
     state.loading = false;
    state.error = action.payload;
})



    },
});

export const {clearSelectedProduct} = productSlice.actions;

export default productSlice.reducer;







  