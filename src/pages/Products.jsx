import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { fetchProducts } from '../Features/products/productThunk';
import { Link } from 'react-router-dom';


const Products = () => {
  const dispatch = useDispatch();
  const {items,loading, error} = useSelector((state)=>state.products);
  useEffect(() => {
    dispatch(fetchProducts())
  }, [dispatch]);


// console.log(items);
if(loading){
  return(
    <div className="min-h-screen flex justify-center items-center text-xl">
    <div className="w-12 h-12 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
    </div>
  )
}

if(error){
  return(
     <div className="min-h-screen flex justify-center items-center text-red-600">
   {error}
    </div>
  )
}

  return (
    <div className="min-h-screen bg-gray-100 py-10 px-4">
      <h1 className='text-3x1 font-bold text-center mb-10 text-gray-800'>Our Products</h1>
<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 max-w-7x1 mx-auto">

{items.map((p)=>(

<div key={p.id} className="bg-white rounded-xl shadow-md hover:shadow-xl transition overflow-hidden group">
<div className="h-52 bg-white flex items-center justify-center overflow-hidden">
  <img src={p.image}
   alt={p.title}
className="h-full object-contain group-hover:scale-110 transition duration-300" />

</div>
<div className="p-4 space-y-2">
  <span className="text-xs bg-purple-100 text-purple-600 px-2 py-1 rounded">
    {p.category}
  </span>
  <h2 className='text-sm font-semibold text-gray-800 pt-4 line-clamp-1'>{p.title}</h2>
<p className="text-lg font-bold text-purple-600">
  ₹{p.price}
</p>

<Link  to={`/product/${p.id}`}
className='block text-center bg-purple-800 text-white py-2 rounded-lg hover:bg-purple-400 transition'>

View Details
</Link>
</div>



</div>


))

}

</div>




    </div>
  )
}

export default Products;
