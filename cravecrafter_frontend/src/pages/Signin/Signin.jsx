import React from 'react'
import foody from '../../assets/images/foody.jpg'
import grubhub from '../../assets/images/grubhub.png'

import { FcGoogle } from "react-icons/fc";


export const Signin = () => {
  return (
    <div className='relative w-full h-screen bg-zinc-700/95'>
      <img className='absolute h-full w-full object-cover mix-blend-overlay' src={foody} alt="/" />

      <div className="flex h-full justify-center items-center">
        <form className="mx-auto bg-white p-8 w-full max-w-[400px] rounded-lg">
          <h3 className="text-2xl text-center text-[#d76c01] font-bold py-6">CraveCrafter</h3>
          <div className="flex py-4">
            <p className="flex relative bg-gray-900 hover:bg-gray-600 py-1 w-full gap-2 justify-center items-center border rounded-full shadow-xl text-md text-white"><img className="h-3 w-3" src={grubhub} alt="/" />Sign in with Grubhub</p>
          </div>
          <div class="flex items-center">
            <div class="grow border-b border-gray-300"></div>
            <span class="shrink px-1 pb-1 text-gray-200">or</span>
          <div class="grow border-b border-gray-200"></div>
</div>
          <div className="flex py-4">
            <p className="flex relative py-1 w-full gap-2 justify-center items-center border-2 rounded-full shadow-xl text-md "><FcGoogle />Continue with Google account</p>
          </div>
          <p className="text-center text-xs text-gray-400">Already have an account? <span className="text-[#067acc]">Sign in</span></p>
        </form>
        <img src="" alt="/" />
      </div>
    </div>
  )
}
