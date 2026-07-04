import React from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { logoutUser } from '../Features/auth/authThunks'
import { setCartOwner } from '../Features/Cart/cartSlice'
import { toast } from 'react-toastify'



const LogoutButton = () => {
    const dispatch = useDispatch();
   const navigate  = useNavigate();

   const handleLogout = async() =>{
try {
    await dispatch(logoutUser()).unwrap();
    dispatch(setCartOwner("guest"));
    toast.success("Logged Out Successfully !");
    navigate('/');
} catch (error) {
    toast.error('Logout failed !');
}
   };


  return  <button onClick={handleLogout} className='bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600 transition'>
        Logout
    </button>
  
}

export default LogoutButton;
