import React from 'react'
import { useSelector } from 'react-redux'
import LogoutButton from '../components/LogoutButton';



const Home = () => {
  const user = useSelector((state)=>state.auth.user);

  return (
    <div className='p-6'>
      <h1 className='text-xl font-bold'>Home Page</h1>

      <p className='mt-2'>user : {user ? user.email : "Not logged in"}</p>
  
    </div> 

  )
}

export default Home;
