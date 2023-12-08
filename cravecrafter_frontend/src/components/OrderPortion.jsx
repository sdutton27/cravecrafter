import React from 'react'

import { FaPiggyBank } from "react-icons/fa6";
import { IoFastFoodSharp } from "react-icons/io5";
import { FaUserFriends } from "react-icons/fa";


export const OrderPortion = () => {
  return (
    <div className="bg-[#7a7a7a] min-h-screen flex items-center justify-center">
      <div className="max-w-xs mx-auto mt-10">
      {/* Card Container */}
      <div className="bg-white shadow-2xl p-4 rounded-xl">
        {/* Title */}
        <h2 className="text-xl text-[#050312] text-1.5rem font-semibold mb-2">Order Details</h2>

        {/* Subtitle */}
        <p className="text-[#050312] text-xs mb-6">Please specify a few details, and we’ll place a surprise order from one of your favorite restaurants.</p>

        {/* Icon, Name, and Dropdown */}
        <div className="flex justify-center mb-4">
          {/* Icon */}
          <div className="h-8 w-8 text-1.5rem mt-1"><FaPiggyBank /></div>
          {/* Name */}
          <span className="text-[#050312]">Budget - $$</span>
          {/* Dropdown Icon */}
          <div className="ml-auto text-[#050312] text-sm">
            {/* Insert dropdown list here */}
            &#9660;
          </div>
        </div>
        <div className="flex justify-center mb-4">
          {/* Icon */}
          <div className="h-8 w-8 text-1.5rem mt-1"><IoFastFoodSharp /></div>
          {/* Name */}
          <span className="text-[#050312]">Cuisine - Sandwiches</span>
          {/* Dropdown Icon */}
          <div className="ml-auto text-[#050312] text-sm">
            {/* Insert your dropdown icon here */}
            &#9660;
          </div>
        </div>
        
        <div className="flex justify-center mb-4">
          {/* Icon */}
          <div className="h-8 w-8 text-1.5rem mt-1"><FaUserFriends /></div>
          {/* Name */}
          <span className="text-[#050312]">Portion</span>
          {/* Dropdown Icon */}
          <div className="ml-auto text-[#050312] text-sm">
            {/* Insert your dropdown icon here */}
            &#9650;
          </div>
        </div>

        <p className="ml-8 mt-[-26px] mb-2 text-xs">Appetizers</p>
        
        <div className="flex justify-center items-center space-x-1 mb-2">
          {/* Circle with "-" */}
          <div className="w-4 h-4 flex items-center justify-center border-2 text-black rounded-full">
            -
          </div>

          {/* Rectangle with Number */}
          <div className="w-14 h-4 bg-gray-200 text-black  flex items-center justify-center rounded text-sm">
            0
          </div>

          {/* Circle with "+" */}
          <div className="w-4 h-4 flex items-center justify-center border-2 text-black rounded-full">
            +
          </div>
        </div>
        <p className="ml-8 mt text-xs mb-2">Entrees</p>
        
        <div className="flex justify-center items-center space-x-1 mb-2">
          {/* Circle with "-" */}
          <div className="w-4 h-4 flex items-center justify-center border-2 text-black rounded-full">
            -
          </div>

          {/* Rectangle with Number */}
          <div className="w-14 h-4 bg-gray-200 text-black  flex items-center justify-center rounded text-sm">
            0
          </div>

          {/* Circle with "+" */}
          <div className="w-4 h-4 flex items-center justify-center border-2 text-black rounded-full">
            +
          </div>
        </div>
        <p className="ml-8 text-xs mb-2">Desserts</p>
        
        <div className="flex justify-center items-center space-x-1">
          {/* Circle with "-" */}
          <div className="w-4 h-4 flex items-center justify-center border-2 text-black rounded-full">
            -
          </div>

          {/* Rectangle with Number */}
          <div className="w-14 h-4 bg-gray-200 text-black  flex items-center justify-center rounded text-sm">
            0
          </div>

          {/* Circle with "+" */}
          <div className="w-4 h-4 flex items-center justify-center border-2 text-black rounded-full">
            +
          </div>
        </div>
        

        {/* Write-up */}
      <div className="my-6">
        <p className="text-xs text-[#ff4700]">
        Allergies or dietary restrictions?
        </p>
      </div>
      </div>
    </div>
    </div>
  )
}
