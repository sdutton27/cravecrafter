import React from 'react'
import giftbox from '../assets/surprise-me.png'



export const SurpriseOption = () => {
  return (
    <div className="bg-[#7a7a7a] min-h-screen flex items-center justify-center">
      {/* Card Container */}
      <div className="bg-white shadow-2xl p-6 rounded-lg w-600 h-649">
        {/* Some Words */}
        <p className="text-gray-700 mb-4">Your surprise order has been selected!</p>
        <p className="mt-[-16px] text-1rem">Would you like to preview our selection?</p>

        {/* Image at the center */}
        <div className="flex items-center justify-center mb-4">
          <img src={giftbox} alt="" className="w-40 h-40" />
        </div>

        {/* Stacked Buttons at the bottom */}
        <div className="flex flex-col space-y-2">
          <button className="bg-black text-white px-4 py-2 rounded-full w-60 self-center">Continue with Surprise</button>
          <button className="bg-transparent border-black border-2 text-black px-4 py-2 rounded-full  w-60 self-center">Preview Entree</button>
        </div>
      </div>
    </div>
  )
}
