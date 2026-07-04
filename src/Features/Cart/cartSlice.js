import { createSlice } from "@reduxjs/toolkit";

const getCartKey = (ownerId) => `cart:${ownerId || 'guest'}`;

const loadFromStorage = (ownerId) => {
    try {
        const storedCart = localStorage.getItem(getCartKey(ownerId));
        return storedCart ? JSON.parse(storedCart) : [];
    } catch {
        return [];
    }
}

const initialState = {
ownerId : 'guest',
cartItems : loadFromStorage('guest') , 
}

const saveToStorage = (ownerId, items) =>{
    localStorage.setItem(getCartKey(ownerId), JSON.stringify(items));
}


const cartSlice = createSlice (
    {
name :'cart', initialState, reducers : {
setCartOwner(state, action){
 state.ownerId = action.payload || 'guest';
 state.cartItems = loadFromStorage(state.ownerId);
},

addToCart(state,action){
 const fitem = state.cartItems.find((i)=>i.id === action.payload.id);
 if(fitem) fitem.quantity += 1;
 
 else{
 state.cartItems.push({...action.payload,quantity : 1});
 
 }
 saveToStorage(state.ownerId, state.cartItems);
} ,

removeFromCart(state,action){
state.cartItems =  state.cartItems.filter((r)=>r.id !== action.payload.id);
 saveToStorage(state.ownerId, state.cartItems);
},

increaseQty(state,action){
    state.cartItems.map((i)=>{

        if(i.id === action.payload.id){
            i.quantity+=1;
        } 
    }

    )
     saveToStorage(state.ownerId, state.cartItems);
} ,

decreaseQty(state,action){
if(action.payload.quantity > 1)  action.payload.quantity--;
else if(action.payload.quantity === 1){
state.cartItems =  state.cartItems.filter((r)=>r.id !== action.payload.id);
}
 saveToStorage(state.ownerId, state.cartItems);


}
,
clearCart(state){
 state.cartItems = [];
 localStorage.removeItem(getCartKey(state.ownerId));
}





} ,

}




    


);


export const {setCartOwner, addToCart,removeFromCart,increaseQty, decreaseQty, clearCart} = cartSlice.actions;
export default cartSlice.reducer; 
