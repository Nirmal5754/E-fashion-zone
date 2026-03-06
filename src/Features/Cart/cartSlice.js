import { createSlice } from "@reduxjs/toolkit";
import { act } from "react";

const storedCart = localStorage.getItem('cart');
const initialState = {
cartItems : storedCart ? JSON.parse(storedCart) :  [] , 
}

const saveToStorage = (items) =>{
    localStorage.setItem('cart', JSON.stringify(items));
}


const cartSlice = createSlice (
    {
name :'cart', initialState, reducers : {
addToCart(state,action){
 const fitem = state.cartItems.find((i)=>i.id === action.payload.id);
 if(fitem) fitem.quantity += 1;
 
 else{
 state.cartItems.push({...action.payload,quantity : 1});
 
 }
 saveToStorage(state.cartItems);
} ,

removeFromCart(state,action){
state.cartItems =  state.cartItems.filter((r)=>r.id !== action.payload.id);
 saveToStorage(state.cartItems);
},

increaseQty(state,action){
    state.cartItems.map((i)=>{

        if(i.id === action.payload.id){
            i.quantity+=1;
        } 
    }

    )
     saveToStorage(state.cartItems);
} ,

decreaseQty(state,action){
if(action.payload.quantity > 1)  action.payload.quantity--;
else if(action.payload.quantity === 1){
state.cartItems =  state.cartItems.filter((r)=>r.id !== action.payload.id);
 saveToStorage(state.cartItems);
}


}
,
clearCart(state){
 state.cartItems = [];
 localStorage.removeItem('cart');
}





} ,

}




    


);


export const {addToCart,removeFromCart,increaseQty, decreaseQty, clearCart} = cartSlice.actions;
export default cartSlice.reducer; 