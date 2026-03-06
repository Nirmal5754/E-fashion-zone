import React ,{useEffect} from 'react'
import { useDispatch } from 'react-redux'
import { clearCart } from '../Features/Cart/cartSlice'


const Success = () => {
    const dispatch = useDispatch();

    useEffect(() => {
dispatch(clearCart());



    }, []);
  return (
    <div className='container text-center mt-5'>
      <h2 className='text-success'>Payment Successful !</h2>

<p><strong>Your order is placed.</strong></p>



    </div>
  )
}

export default Success
