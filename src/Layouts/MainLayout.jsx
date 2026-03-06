import React from 'react'
import { Outlet , useLocation } from 'react-router-dom'
import Navbar from '../components/Navbar'


const MainLayout = () => {
    const location = useLocation();
    const hideNavbarRoutes = ["/login","/register"];
    const hideNavbar = hideNavbarRoutes.includes(location.pathname);
  return (
    <>
      {!hideNavbar && <Navbar/>}
      <Outlet/>
    </>
  )
}

export default MainLayout;
