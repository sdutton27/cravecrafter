import React from 'react'


import { GiOakLeaf } from "react-icons/gi";


export const OrderOption = () => {
  return (
    <div className="bg-gray-300 min-h-screen flex items-center justify-center">
      {/* Card Container */}
      <div className="relative bg-white shadow-2xl p-4 rounded-lg max-w-xs h-506">
        {/* Letter "X" at the Top Right Corner */}
        <div className="absolute top-0 right-0 text-sm mr-2 mt-1 text-gray-400">
          X
        </div>

        {/* Some Words */}
        <p className="text-[#050312] text-xs font-semibold my-6">Please specify any allergies or dietary restrictions.</p>
        <p className="text-[#050312] text-xs mb-6 mt-[-20px] font-light">While we strive to adhere to your set guideline, it's important to note that CraveCrafter cannot provide a guarantee that your meal will be free of allergens or fully align with your dietary preferences. We will make every effort to accommodate your requirements</p>

        {/* Icon, Name, and Dropdown */}
        <div className="flex justify-center">
          {/* Icon */}
          <div className="h-8 w-8 text-xs rotate-90 mt-1"><GiOakLeaf /></div>
          {/* Name */}
          <span className="text-[#050312] text-xs ml-2 font-semibold">Dietary Restrictions</span>
          {/* Dropdown Icon */}
          <div className="ml-16 text-[#050312] text-xs">
            {/* Insert dropdown list here */}
            &#9660;
          </div>
        </div>

        <div>
          {/* Name */}
          <span className="text-[#050312] text-xs font-semibold">Allergies</span>
        </div>

        {/* Input Area */}
        <input
          type="text"
          className="w-full border px-2 border-gray-100 rounded my-4 text-sm"
        />

        {/* Button */}
      <div className="mt-4">
        <button className="bg-[#ff4700] flex items-center gap-2 text-white text-xs px-4 py-2 rounded-full m-auto mt-3 mb-6">Continue</button>
      </div>
      </div>
    </div>
  )
}
