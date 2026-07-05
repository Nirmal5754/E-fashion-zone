import { createAsyncThunk } from "@reduxjs/toolkit";
import { createUserWithEmailAndPassword,GoogleAuthProvider, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";

import {auth} from '../../services/firebase'; 

// register 

export const registerUser = createAsyncThunk("auth/registerUser" , 

    async({email, password}, thunkAPI)=>{
        try {
            const userCredential = await createUserWithEmailAndPassword(auth,email,password);
            const user = userCredential.user;
            return{
                uid: user.uid , email : user.email ,displayName : user.displayName , photoUrl : user.photoURL
            };
        } catch (error) {
          return  thunkAPI.rejectWithValue(error.message);
        }
    }
);

// login 

export const loginUser = createAsyncThunk("auth/loginUser" , async({email,password}, thunkAPI)=>{
    try {
      const userCredential = await signInWithEmailAndPassword(auth,email,password);
  const user = userCredential.user;
            return{
                uid: user.uid , email : user.email ,displayName : user.displayName , photoUrl : user.photoURL
            };
    } 
    catch (error) {
   return thunkAPI.rejectWithValue(error.message);
    }

}      );


export const googleLogin = createAsyncThunk(
"auth/googleLogin" , async ( _ ,thunkAPI  )=>{
try {
const provider = new GoogleAuthProvider();
provider.setCustomParameters({
    prompt: "select_account",
});
const result = await signInWithPopup(auth, provider);
const user = result.user;
return {
    uid : user.uid, 
    email:user.email , 
    displayName : user.displayName , 
    photoURL : user.photoURL ,
};
} catch (error) {
return thunkAPI.rejectWithValue(error.message);    
}


}

);

export const logoutUser = createAsyncThunk(
    "auth/logoutUser"  , async ( _ , thunkAPI) =>{
        try {
            await signOut(auth);
            return null;
        } catch (error) {
            return thunkAPI.rejectWithValue(error.message);
        }
    }
)
