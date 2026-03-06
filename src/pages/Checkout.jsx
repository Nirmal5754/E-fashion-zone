import React from 'react'

import { useDispatch, useSelector } from 'react-redux'
import { clearCart } from '../Features/Cart/cartSlice';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { loadStripe } from '@stripe/stripe-js';





const STRIPE_LINK = "https://buy.stripe.com/test_8x2cMY18z4Hv1Zag849oc00";





const Checkout=()=>{
  
const cartProducts =  useSelector((state)=>state.cart.cartItems);
const totalAmount  =  cartProducts.reduce((sum,item)=>sum + item.price*item.quantity , 0 );


const handleCheckout =()=>{
if(cartProducts.length === 0){
  toast.error("Your cart is empty !");
  return;
}

// toast.info("Redirect")






//   const stripe = await STRIPE_LINK;


toast.info("Redirecting to secure payment...");

window.location.href = STRIPE_LINK;
// await stripe.redirectToCheckout({
//   lineItems : cartProducts.map((item)=>(
//     {
//       price_data : {
//         currency : "inr" ,
//          product_data :{
//           name : item.title , 


//          },
//          unit_amount :   item.price * 100 ,  //INR to Paise
       

//       },
//       quantity : item.quantity ,
//     }
//   )) , 
//   mode : 'payment' , 
//   successUrl : window.location.origin + "/success"  ,
//   cancelUrl : window.location.origin + '/cart' , 

// })





}


  return (

       <div className='container mt-4'>
  <h2>Checkout</h2>
{cartProducts.map((i)=>(
<div className="border rounded p-3 mb-2 rounded" key={i.id}>
<strong>{i.title}</strong>
<p>Qty: {i.quantity}</p>
<p>₹ {i.price}</p>

</div>



)

)}
<h4 className='mt-3'>Total : ₹ {totalAmount}</h4>
<button className="btn btn-success w-100 mt-3" onClick={handleCheckout} disabled={cartProducts.length === 0}> Pay with Stripe </button>
    </div>
  )
}

export default Checkout
