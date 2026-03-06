import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { fetchProductById } from '../Features/products/productThunk'
import { clearSelectedProduct } from '../Features/products/productSlice'

import { toast } from 'react-toastify'
import { addToCart } from '../Features/Cart/cartSlice'



const ProductDetails = () => {
const {id} = useParams();
const  dispatch = useDispatch();
const {selectedProduct , loading , error} = useSelector((state)=>state.products,) ;
const {cartItems} = useSelector((state)=>state.cart,);

useEffect(() => {
   
  dispatch(fetchProductById(id));
return ()=>{
  dispatch(clearSelectedProduct());
}
}, [dispatch,id]);



const iscartitem = cartItems.some((ci) => ci.id === selectedProduct?.id);

if(loading || !selectedProduct){

return  <div className="min-h-screen flex justify-center items-center">
   <div className="w-12 h-12 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
  </div>
}

if(error){
  return(
     <div className="min-h-screen flex justify-center items-center text-red-600">
   {error}
    </div>
  )
}

  return (
      <div className='min-h-screen bg-gray-100 py-10 px-4'>
<div className="max-w-6x1 mx-auto bg-white rounded-xl shadow-lg p-6 grid grid-cols-1 md:grid-cols-2 gap-8">
  <div className="flex justify-center items-center ">
  <img src={selectedProduct.image}
   alt={selectedProduct.title}
className="h-96 object-contain " />
</div>
<div className="space-y-4">

  <span className="text-sm bg-purple-100 text-purple-600 px-3 py-1 rounded">{selectedProduct.category}</span>

  <h1 className='text-5x1 font-semibold text-purple-800 pt-4 line-clamp-1'>{selectedProduct.title}</h1>
  <p className="text-xl font-semibold text-purple-600">
  ₹{selectedProduct.price}
</p>
<p className='text-gray-600'>{selectedProduct.description}</p>
<div className="flex items-center gap-2">

<span className="text-yellow-500 font-bold">
⭐{selectedProduct.rating.rate}</span>
<span className="text-sm text-gray-500">
( {selectedProduct.rating.count} reviews)</span>


</div>

<button className={`w-full  ${iscartitem ?'bg-green-500 hover:bg-green-700':'bg-purple-500 hover:bg-purple-700'} text-white py-3 rounded-lg  transition`} onClick={()=>{
  
  
dispatch(addToCart(selectedProduct));
toast.success('Added to cart successfully !');

  
}}>{
  iscartitem ? 'Added to Cart' : 'Add to cart'
  }  </button>
</div>

</div>
    </div>
  )
}

export default ProductDetails;      



                             