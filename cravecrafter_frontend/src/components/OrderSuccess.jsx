import React from 'react'

export const OrderSuccess = () => {
  return (
    <div className="bg-gray-300 min-h-screen flex items-center justify-center">
      {/* Card Container */}
      <div className="relative bg-white shadow-md p-6 rounded-lg w-1224 h-976">
        {/* Letter "X" at the Top Right Corner */}
        <div className="absolute top-0 right-0 text-sm mr-3 mt-1 text-gray-400">
          x
        </div>

        {/* Some Words */}
        <p className="text-gray-700 m-4">Hooray! Your order has been placed successfully, and your food will be delivered soon.</p>

        {/* Horizontal Line with Five Ellipses and Names */}
        <div className="relative h-0.5 bg-white w-60 mx-auto mb-4">
          <div className="flex justify-between absolute w-full top-2">
            
          </div>
        </div>
        <div className="flex justify-between mb-4">
          <span className="text-white">Ellipse 1</span>
          <span ></span>
          <span></span>
          <span></span>
          <span></span>
        </div>

        {/* Subtitle */}
        <h2 className="text-xl text-white font-bold mb-4">Subtitle</h2>

        {/* Google Map */}
        {/* Replace the following line with your Google Map component */}
        <div className="w-full h-64 bg-white mb-4">
          {/* Your Google Map Component Goes Here */}
        </div>

        {/* Button at the bottom */}
        <button ></button>
      </div>
    </div>
  )
}
