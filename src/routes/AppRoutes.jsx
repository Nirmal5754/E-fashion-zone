import React from 'react'
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
import Success from '../pages/Success'



const AppRoutes = () => {
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

