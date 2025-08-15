import React, { useState } from 'react';
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

const LoginForm = ({ setIsLoggedIn }) => {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({ email: "", password: "" });

  function changeHandler(e) {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  }

  function submitHandler(e) {
    e.preventDefault();
    setIsLoggedIn(true);
    toast.success("Logged In");
    navigate("/"); // redirect after login
  }

  return (
    <form onSubmit={submitHandler} className='flex flex-col w-full gap-y-4 mt-4'>
      <label className='w-full'>
        <p className='text-sm text-black mb-1'>Email Address<sup className='text-pink-500'>*</sup></p>
        <input
          required
          type="text"
          name="email"
          value={formData.email}
          placeholder='Enter Email Id'
          onChange={changeHandler}
          className='bg-gray-200 rounded-md text-gray-900 w-full p-3'
        />
      </label>

      <label className='w-full relative'>
        <p className='text-sm text-black mb-1'>Password<sup className='text-pink-500'>*</sup></p>
        <input
          required
          type={showPassword ? "text" : "password"}
          name="password"
          value={formData.password}
          placeholder='Enter Password'
          onChange={changeHandler}
          className='bg-gray-200 rounded-md text-gray-900 w-full p-3'
        />
        <span className='absolute right-3 top-[38px] cursor-pointer' onClick={() => setShowPassword(prev => !prev)}>
          {showPassword ? <AiOutlineEyeInvisible fontSize={20} /> : <AiOutlineEye fontSize={20} />}
        </span>
        <Link to="#">
          <p className='text-sm mt-1 text-blue-900 max-w-max ml-auto hover:underline'>Forgot Password?</p>
        </Link>
      </label>

      <button className='rounded-md font-medium text-white bg-purple-700 px-4 py-3 mt-2 hover:bg-purple-800 transition'>
        Sign In
      </button>
    </form>
  );
};

export default LoginForm;
