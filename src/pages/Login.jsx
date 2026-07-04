import React, {useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { loginUser , googleLogin } from '../Features/auth/authThunks'
import { clearAuthError } from '../Features/auth/authSlice'
import { setCartOwner } from '../Features/Cart/cartSlice'
import { Link, useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'


// useState useDispatch useSelector registerUser clearAuthError Link
const Login = () => {
const dispatch = useDispatch();
const navigate = useNavigate();
const {loading,error} = useSelector((state)=> state.auth);
const [formData , setFormData] = useState({
  email : "" , 
  password: "", 
});


const handleChange = (e) =>{
  dispatch(clearAuthError());
  setFormData({
    ...formData , 
  [ e.target.name] : e.target.value ,
  });
}
  const handleSubmit =async (e) =>{
    e.preventDefault();

try {
 const user = await dispatch(loginUser(formData)).unwrap();
 dispatch(setCartOwner(user.uid));
 toast.success("Logged in Successfully !");
  setFormData({
        email :'' , password : '',
      });
      navigate('/');
} catch (error) {
  toast.error(error || "Login failed. Please try again.");
}

  }


const handleGoogleLogin = async() =>{
  try {
    await dispatch(googleLogin()).unwrap();

  } catch (error) {
    toast.error(error || "Google login failed. Please try again.");
  }

}

  return (
      <div className='min-h-screen w-full h-full flex items-center justify-center bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-600 '>

    <div className=" w-full max-w-md bg-white/20 backdrop-blur-lg rounded-2x1 shadow-xl p-8">
      <h2 className="text-3x1 font-bold text-white text-center mb-6">
        Login 
      </h2> 
      {error && (
        <p className="bg-red-500/80 text-white text-sm p-2 rounded mb-4">
          {error}
        </p>
      )}  
 <form onSubmit={handleSubmit} className="space-y-4">

<div>
<label className='block text-white mb-1'>Email

<input type="email"
 name='email' 
 required
 value={formData.email}
 onChange={handleChange}
 placeholder='example@test.com'
className="w-full px-4 py-2 rounded-lg outline-none focus:ring-2 focus:ring-white"  
/>

</label>

</div>
<div>
<label className='block text-white mb-1'>Password
<input type="password"
 name='password' 
 required
 value={formData.password}
 onChange={handleChange}
 placeholder='........'
className="w-full px-4 py-2 rounded-lg outline-none focus:ring-2 focus:ring-white" 

/>
</label>

</div>

<button className="w-full bg-white text-purple-700 font-semibold py-2 rounded-lg hover:bg-gray-200 transition" type='submit' disabled={loading}>
  {loading ? 'Signing Up....': 'Login'}
</button>
<br />

    </form>
    <p className='text-white font-semibold'>OR</p>
<br />

<button className="w-full flex items-center justify-center gap-2 bg-white text-gray-800 font-semibold py-2 rounded-lg hover:bg-gray-200 transition" type='button' onClick={handleGoogleLogin}  disabled={loading}><img src="https://www.svgrepo.com/show/475656/google-color.svg" className='w-5 h-5' alt="Google" />Continue with Google</button>
<p className="text-white text-sm text-center mt-6">
  Dont have an account ? {" "}
  <Link className='underline font-semibold ' to='/register'>Create Account</Link>
</p>
<br />

    </div>


    </div>
  )
}

export default Login;
