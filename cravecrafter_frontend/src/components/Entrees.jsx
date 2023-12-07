import React from 'react'

import { FaPiggyBank } from "react-icons/fa6";
import { IoFastFoodSharp } from "react-icons/io5";
import { FaUserFriends } from "react-icons/fa";
import { GiKnifeFork } from "react-icons/gi";

export const Entrees = () => {
  return (
    <div className="bg-[#7a7a7a] min-h-screen flex items-center justify-center">
      <div className="max-w-xs mx-auto mt-10">
      {/* Card Container */}
      <div className="bg-white shadow-2xl p-4 rounded-xl">
        {/* Title */}
        <h2 className="text-lg text-[#050312] font-semibold mb-2">Order Details</h2>

        {/* Subtitle */}
        <p className="text-[#050312] text-sm mb-6">Please specify a few details, and we’ll place a surprise order from one of your favorite restaurants.</p>

        {/* Icon, Name, and Dropdown */}
        <div className="flex justify-center">
          {/* Icon */}
          <div className="h-8 w-8 text-sm mt-1"><FaPiggyBank /></div>
          {/* Name */}
          <span className="text-[#050312] text-sm">Budget - $$</span>
          {/* Dropdown Icon */}
          <div className="ml-auto text-[#050312] text-xs">
            {/* Insert dropdown list here */}
            &#9660;
          </div>
        </div>

        <div className="flex justify-center">
          {/* Icon */}
          <div className="h-8 w-8 text-sm mt-1"><IoFastFoodSharp /></div>
          {/* Name */}
          <span className="text-[#050312] text-sm">Cuisine<span className="text-gray-400 text-[10px] ml-1">(Optional)</span></span>
          {/* Dropdown Icon */}
          <div className="ml-auto text-[#050312] text-xs">
            {/* Insert your dropdown icon here */}
            &#9650;
          </div>
        </div>

        <div className="flex mb-2">
          <span className="text-[#050312] text-sm text-semibold">Mexican</span>
        </div>
        <div className="flex mb-2">
          <span className="text-[#050312] text-sm text-semibold">Italian</span>
        </div>
        <div className="flex mb-2">
          <span className="text-[#050312] text-sm text-bold">Sandwiches</span>
        </div>
        <div className="flex mb-2">
          <span className="text-[#050312] text-sm text-bold">Barbecue</span>
        </div>
        <div className="flex mb-2">
          <span className="text-[#050312] text-sm text-bold">Chicken</span>
        </div>
        <div className="flex mb-4">
          <span className="text-[#050312] text-sm text-bold">Steak</span>
        </div>

        <div className="flex justify-center mb-4">
          {/* Icon */}
          <div className="h-8 w-8 text-sm mt-1"><FaUserFriends /></div>
          {/* Name */}
          <span className="text-[#050312] text-sm">Number of Entrees</span>
          {/* Dropdown Icon */}
          <div className="ml-auto text-[#050312] text-xs">
            {/* Insert your dropdown icon here */}
            &#9660;
          </div>
        </div>
        {/* Write-up */}
      
      {/* Button */}
      <div className="mt-4">
        <button className="bg-[#ff4700] flex items-center gap-2 text-white text-sm px-4 py-2 rounded-full m-auto my-3">Surprise Order<GiKnifeFork /></button>
      </div>
      </div>
    </div>
    </div>
  )
}
