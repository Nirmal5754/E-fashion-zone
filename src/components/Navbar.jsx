import React from 'react' ;
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import LogoutButton from './LogoutButton';
// Link useSelector LogoutButton 


const Navbar = () => {
    const {isAuthenticated , user} = useSelector((state)=>state.auth);
    const {cartItems} = useSelector((state)=>state.cart);
    const totqan = cartItems.reduce((sum,p)=>sum+p.quantity , 0 );
  return (
    <nav className='bg-white shadow-md px-6 py-4 flex justify-between items-center'>
        <Link to='/' className=' text-2xl font-bold text-purple-600'>
        E-Shopping Zone </Link>
      
<div className='ms-auto me-auto text-purple-500 flex items-center font-semibold justify-center gap-4'>
    <Link to='/'>Home</Link>
    <Link to='/products'>Products</Link>
</div>

<div className="flex items-center gap-4">
{!isAuthenticated ? (
    <>
    <Link to='/login' className='text-gray-700 hover:text-purple-600 font-medium'>Login</Link>
        <Link to='/register' className='bg-purple-500 px-4 py-2 text-white rounded-lg hover:bg-purple-700 font-medium transition'>Register</Link>
    
    </>
): (
<>
<span className='text-gray-600 text-sm  '>{user?.email}</span>
<LogoutButton/>
  <Link to='/cart' className='relative'>🛒{ 
  totqan > 0 && <sup className='bg-red-500 -top-2 rounded-full px-1 text-white font-bold'>{totqan}</sup> }</Link>
</>
)
}

</div>


    </nav>
  )
}

export default Navbar
