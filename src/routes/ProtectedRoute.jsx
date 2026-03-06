import React from 'react'
import { Navigate } from 'react-router-dom'
import { auth } from '../services/firebase'
import { useSelector } from 'react-redux'


const ProtectedRoute = ({children}) => {
    const{user,authChecked} = useSelector((state)=>state.auth);
    // const user = auth.currentUser;

      if(!authChecked) return <div>Loading...</div>

    if(!user){
 return <Navigate to='/login'/>;
    }
       
    

return children;

  
  
}

export default ProtectedRoute; 
