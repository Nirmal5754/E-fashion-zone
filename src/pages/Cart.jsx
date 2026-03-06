import React from 'react'

import { useDispatch, useSelector } from 'react-redux'
import { clearCart, decreaseQty, increaseQty, removeFromCart } from '../Features/Cart/cartSlice';
import { Link } from 'react-router-dom';
// useSelector useDispatch


const Cart = () => {
  const dispatch = useDispatch();

  const {cartItems} = useSelector((state)=>state.cart);

  const totalPrice = cartItems.reduce((sum,item)=>sum + item.price * item.quantity, 0);

if(cartItems.length === 0) return <div className="container mt-5 text-center ">
 <h3>Cart is empty !</h3> <Link to='/products' className='btn btn-primary mt-3'>Continue Shopping</Link>
</div>

  return (
        <div className='min-h-screen bg-blue-200 px-8 py-8'>
    <h2 className='font-bold'>Shopping Cart</h2>
{cartItems.map((c)=>(
  <div className="px-4 mt-8 bg-white border-b flex items-center rounded-lg" key={c.id}>
      <div className="flex justify-center items-center px-8">
         <img src={c.image} alt={c.title} className="h-96 w-96 object-contain" /> 
      </div>
  <div className="space-y-4">
   <span className="text-sm bg-purple-100 text-purple-600 px-3 py-1 rounded">{c.category}</span>

  <h1 className='text-5x1 font-semibold text-purple-800 pt-4'>{c.title}</h1>
  <p className="text-xl font-semibold text-purple-600">
  ₹{c.price}
</p>
<div className="flex item-center px-4">
  <button className="px-2 bg-gray-200 rounded border-b" onClick={()=>dispatch(decreaseQty(c))}>-</button>
  <span className='bg-gray-200 border-b'>{c.quantity}</span>
  <button className="px-2 bg-gray-200 rounded border-b" onClick={()=>dispatch(increaseQty(c))}>+</button>
</div>

<button className="text-red-500 font-semibold" onClick={()=>dispatch(removeFromCart(c))}>Remove</button>



    </div>
    </div>
))
}
<div className="text-right mt-6">
  <p className="text-xl font-bold">
    Total : ₹ {totalPrice}
  </p>

  <button className="text-red-500 font-semibold" onClick={()=>dispatch(clearCart())}>Clear Cart</button> <div className="mt-3">
    <Link to='/checkout' className='btn btn-success'>Proceed to Checkout</Link>
  </div>
</div>

    </div>
  )
}

export default Cart;
