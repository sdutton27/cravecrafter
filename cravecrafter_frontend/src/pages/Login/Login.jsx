import React from 'react'

import food from '../../assets/images/food.jpg'

export const Login = () => {
  return (
    <div className='grid grid-cols-1 sm:grid-cols-2 h-screen w-full'>
      <div className='hidden sm:block'>
        <img src={food} alt="" className='w-full h-full object-cover'/>
      </div>

      <div className='flex flex-col-200 justify-center bg-gray-100'>
        <form className='w-full max-w-[400px] mx-auto bg-white p-8 m4 my-20 rounded-xl shadow-2xl'>
          <h2 className='text-2xl font-bold text-center py-6 text-[#d76c01]'>CraveCrafter</h2>
          <div className='flex flex-col py-2'>
            <label>Username</label>
            <input className='border p-2 rounded-full' type="text" />
          </div>
          <div className='flex flex-col py-2'>
            <label>password</label>
            <input className='border p-2 rounded-full' type="password" />
          </div>
          <button className='w-full my-5 py-2 border rounded-full bg-sky-700 hover:bg-sky-500 text-white'>Login</button>
          <div className='text-xs text-gray-400 text-center pb-2'>Lost or forgot password? <span>Click here!</span></div>
          <div className='flex justify-between'>
            <p className='flex text-xs'><input className='mr-2 self-center' type="checkbox" />Remember me</p>
            <p className='text-xs'>Create account</p>
          </div>
        </form>

      </div>
    </div>
  )
}
