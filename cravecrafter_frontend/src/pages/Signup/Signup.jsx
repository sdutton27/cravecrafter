import React from 'react'
import logo from '../../assets/images/ICON-logo.png'
import grub from '../../assets/images/grubhub.png'
import burger from '../../assets/images/Splash-Screen.png'


export const Signup = () => {
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
            <div className="flex flex-col mt-[5rem]">
              <label className="text-xs">Email</label>
            
              <input type="text" className="bg-[#dedede] text-black h-9 text-sm pl-4 mb-2 rounded-full flex" />

              <label className="text-xs">Password</label>
            
              <input type="text" className="bg-[#dedede] text-black h-9 text-[10px] pl-4 mb-2 rounded-full" placeholder="Password must be 6+ characters long" />
            
            <div className="flex gap-1 items-center justify-center">  
              <input type="checkbox" className="h-2 w-2 outline-none bg-[#dedede] mb-2" />
              <p className="text-[8px] mb-2 text-gray-400">
            I agree to CraveCrafter’s  Terms of Service, Privacy Policy, and our default Notification Settings.
            </p>
            </div>
              
              <button className="bg-[#fe5100] text-white py-2 mb-2 rounded-full text-sm">
                Create Account
              </button>

              <p className="text-[8px] text-center text-gray-400">
            Already have an account? Sign In
            </p>
            
            </div>

            {/* Privacy Notice */}
            
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