import React, { useEffect } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from '../pages/Home'
import Products from '../pages/Products'
import ProductDetails from '../pages/ProductDetails'
import Cart from '../pages/Cart'
import Login from '../pages/Login'
import Register from '../pages/Register'
import Checkout from '../pages/Checkout'
import Orders from '../pages/Orders'
import ProtectedRoute from './ProtectedRoute'
// import Navbar from '../components/Navbar'
import MainLayout from '../Layouts/MainLayout'
import { useDispatch } from 'react-redux'
import { onAuthStateChanged } from 'firebase/auth'
import { auth } from '../services/firebase'
import { setUser } from '../Features/auth/authSlice'
import Success from '../pages/Success'



const AppRoutes = () => {
const dispatch = useDispatch();
useEffect(() => {
  
 const unsubscribe = onAuthStateChanged(auth,(user)=>{
  if(user){
    dispatch(setUser({
      uid : user.uid, 

      email : user.email , 


    }))
  }
 });
 return ()=> unsubscribe();

}, [dispatch]);



  return (
    <div>
      <BrowserRouter>

      <Routes>
       
        <Route element={<MainLayout/>}>
         <Route path='/'  element={<Home/>}/>
      <Route path='/products' element={ <ProtectedRoute>
    <Products/>
</ProtectedRoute>}/>
      <Route path='/product/:id' element={ <ProtectedRoute>
    <ProductDetails/>
</ProtectedRoute>}/>
        <Route path='/cart' element={ <ProtectedRoute>
    <Cart/>
</ProtectedRoute>}/>
<Route path='/checkout' element={ <ProtectedRoute>
    <Checkout/>
</ProtectedRoute>}/>



      <Route path='/orders' element={ <ProtectedRoute>
    <Orders/>
</ProtectedRoute>}/>
      <Route path='/success' element={<Success/>}/>
        </Route>

         <Route path='/login'  element={<Login/>}/>
        <Route path='/register'  element={<Register/>}/>
{/* {Protected routes} */}









      </Routes>
      </BrowserRouter>
    </div>
  )
}

export default AppRoutes;

