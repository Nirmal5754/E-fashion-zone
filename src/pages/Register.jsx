import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { registerUser } from '../Features/auth/authThunks'
import { clearAuthError } from '../Features/auth/authSlice'
import { Link, useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'

// useState useDispatch useSelector registerUser clearAuthError Link
const Register = () => {
const dispatch = useDispatch();
const navigate = useNavigate();
const {loading,error} = useSelector((state)=> state.auth);
const [formData , setFormData] = useState({
  email : "" , 
  password: "", 
});

// useEffect(() => {
//   if(isAuthenticated){
//       toast.success('Registration Successfull Please Login !');
//       setFormData({
//         email :'' , password : '',
//       });
//       navigate('/login');
//   }

// }, [isAuthenticated,navigate]);

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
 await dispatch(registerUser(formData)).unwrap();
 toast.success("Registration Successfull! Please Login ");
  setFormData({
        email :'' , password : '',
      });
      navigate('/login');
} catch (error) {
  
}

  }




  return (
      <div className='min-h-screen w-full h-full flex items-center justify-center bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-600 '>

    <div className="w-full max-w-md bg-white/20 backdrop-blur-lg rounded-2x1 shadow-xl p-8">
      <h2 className="text-3x1 font-bold text-white text-center mb-6">
        Create Account 
      </h2> 
      {error && (
        <p className="bg-red-500/80 text-white text-sm p-2 rounded mb-4">
          {error}
        </p>
      )}  
 <form onSubmit={handleSubmit} className="space-y-4">

<div>
<label className='block text-whitQe mb-1'>Email

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
  {loading ? 'Creating Account....': 'Register'}
</button>


    </form>
<p className="text-white text-sm text-center mt-6">
  Already have an account ? {" "}
  <Link className='underline font-semibold ' to='/login'>Login</Link>
</p>

    </div>


    </div>
  )
}

export default Register
