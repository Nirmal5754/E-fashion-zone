import { createSlice } from "@reduxjs/toolkit";
import { googleLogin, loginUser, logoutUser, registerUser } from "./authThunks";
// import { build } from "vite";
// const savedUser = JSON.parse(localStorage.getItem('user'));

const initialState = {
   //  user : savedUser || null , 
   user: null,
    loading : false ,
     error : null,
     authChecked : false ,
     isAuthenticated : false,
   //  isAuthenticated : !!savedUser, 
}

const authSlice = createSlice({
    name : "auth" , initialState , reducers : 
     {

clearAuthError : (state)=>{
   state.error = null;

} ,

        setUser: (state, action) => {
      state.user = action.payload;
      state.isAuthenticated = true;
      state.authChecked = true; 
    },
    
    clearUser: (state, action) => {
      state.user = null;
      state.isAuthenticated = false;
      state.authChecked = true;
    }
        // logout : (state)=>{
        //     state.user = null;
        // } ,
     } ,
     extraReducers : (builder) =>{
        builder 

      //   register 
      .addCase(registerUser.pending , (state)=> {
         state.loading = true;
         state.error = null;
        
      })
      .addCase(registerUser.fulfilled,(state,action)=>{
      state.loading = false;
      state.user = action.payload;
      // state.isAuthenticated = true;
      // localStorage.setItem('user',JSON.stringify(action.payload));

      })
      .addCase(registerUser.rejected , (state , action)=>{
         state.loading = false ;
         state.error = action.payload ;
      }) 

      //   Login 
      .addCase(loginUser.pending, (state)=>{
         state.loading = true;
         state.error = null;
      })
      .addCase(loginUser.fulfilled,(state,action)=>{
      state.loading = false;
      state.user = action.payload;

      // state.isAuthenticated = true;
      //     localStorage.setItem('user',JSON.stringify(action.payload));
      
      })
          .addCase(loginUser.rejected , (state , action)=>{
         state.loading = false ;
         state.error = action.payload ;
         // state.isAuthenticated = false;
      })


      // Google Login 

  .addCase(googleLogin.pending, (state)=>{
         state.loading = true;
         state.error = null;
      })

      .addCase(googleLogin.fulfilled,(state,action)=>{
      state.loading = false;
      state.user = action.payload;
      // state.isAuthenticated = true;
      //     localStorage.setItem('user',JSON.stringify(action.payload));
      })
          .addCase(googleLogin.rejected , (state , action)=>{
         state.loading = false ;
         state.error = action.payload;
         //   state.isAuthenticated = false;
      })

      // Logout 
.addCase(logoutUser.pending , (state)=>{
   state.loading = true;
})
         .addCase(logoutUser.fulfilled,(state)=>{
    state.loading = false;
      state.user = null;
      // state.isAuthenticated = false;
      //     localStorage.removeItem('user');
      })
      
.addCase(logoutUser.rejected , ( state, action)=>{
   state.loading = false;
   state.error = action.payload; 
   
});




     },

});

// export const {setUser, logout} = authSlice.actions;
export const {clearAuthError,setUser,clearUser} = authSlice.actions;
export default authSlice.reducer;
