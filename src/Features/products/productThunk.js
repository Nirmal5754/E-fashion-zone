import { createAsyncThunk } from "@reduxjs/toolkit";

// fetch all products 

export const fetchProducts = createAsyncThunk ( 'products/fetchProducts'
    , async (_,thunkAPI)=>{
try {
    const response = await fetch("https://fakestoreapi.com/products");

    if(!response.ok){
        throw new Error("Failed To fetch products");
    }
return await response.json();

} catch (error) {
    return thunkAPI.rejectWithValue(error.message);
}
    }



);

// fetch single product by id 
export const fetchProductById = createAsyncThunk(
    "products/fetchProductById" , async(id, thunkAPI )=>{
        try {
            const response = await fetch(`https://fakestoreapi.com/products/${id}`);
 if(!response.ok){
        throw new Error("Failed To fetch products");
    }

return await response.json();

}
 catch (error) {
    return thunkAPI.rejectWithValue(error.message);
}

    }
    
)