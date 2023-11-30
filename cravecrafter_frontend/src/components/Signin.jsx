import React from 'react'
import logo from '../assets/ICON-logo.png'
import grub from '../assets/grubhub.png'
import burger from '../assets/Splash-Screen.png'

import { FcGoogle } from "react-icons/fc";


export const Signin = () => {
  return (
    <div className="flex h-screen justify-center items-center mt-20">
      {/* Container */}
      <div className="flex bg-[#fbfbf9] w-[732px] h-1024 border-1 shadow-xl">
        {/* Left Column */}
        <div className="flex-1">
          <div className="w-60 mx-auto">
            {/* Logo or Brand Name */}
            <img src={logo} alt="" className="pt-10 w-[12rem]" />

            {/* Slogan */}
            <div className="text-black text-sm mb-8">Create an account</div>

            {/* Buttons */}
            <div className="flex flex-col mt-[8rem]">
              <button className="flex bg-black justify-center text-white text-sm py-2 mb-2 h-10 rounded-full"> <img src={grub} alt="" className="h-3 w-3 mt-1 mr-4" />
                Sign in with Grubhub
              </button>
              <button className="bg-white text-black h-9 text-sm pt-1 mb-2 border-2 border-black rounded-full flex"><FcGoogle className="mx-6 mt-1 h-4 w-4" />
                Sign in with Google
              </button>
              <button className="bg-[#fe5100] text-white py-2 mb-4 rounded-full text-sm">
                Sign in with email
              </button>
            </div>

            {/* Privacy Notice */}
            <p className="text-xs text-center text-gray-400 mt-auto">
            Already have an account? Sign In
            </p>
            <p className="text-[8px] text-center text-gray-400 mt-20 ">
            By creating an account you agree with our Terms of Service, Privacy Policy, and our default Notification Settings.
            </p>
          </div>
        </div>

        {/* Right Column */}
        <div className="flex-1">
          {/* Image */}
          <img
            src={burger}  
            alt="Background"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </div>
  )
}
