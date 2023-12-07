import React from 'react'

export const Tracker = () => {
  

  return (
    <div className="bg-gray-200 min-h-screen flex items-center justify-center">
      {/* Card Container */}
      <div className="relative bg-white shadow-md p-6 rounded-lg w-1224 h-976">
        {/* Letter "X" at the Top Right Corner */}
        <div className="absolute top-0 right-0 text-lg mr-3  text-gray-400">
          x
        </div>

        {/* Some Words */}
        <p className="text-gray-700 mt-8 mb-8">Hooray! Your order has been placed successfully, and your food will be delivered soon.</p>

        {/* First Horizontal Line with Points */}
        <div className="relative h-0.5 bg-black w-[90%] mx-auto mb-4">
          <div className="flex justify-between absolute w-full top-1">
            {[1, 2, 3, 4, 5].map((point) => (
              <React.Fragment key={point}>
                {point > 1 && <div className="bg-black rounded-full"></div>}
                <div className="mt-[-7px] w-2 h-2 bg-black rounded-full"></div>
              </React.Fragment>
            ))}
          </div>
        </div>
        <div className="flex justify-between mb-4">
          <span className="text-xs">Order Placed</span>
          <span className="text-xs">Confirmed by Restaurant</span>
          <span className="text-xs">Awaiting Pickup</span>
          <span className="text-xs">Out for Delivery</span>
          <span className="text-xs">Delivered</span>
        </div>

        {/* Second Horizontal Line with Red Points */}
        <div className="relative h-0.5 bg-red-500 w-[24%] ml-7 mb-4 mt-[-50px]">
          <div className="flex justify-between absolute w-full top-1 mt-[-8px]">
            <div className="w-3 h-3 bg-red-500 rounded-full"></div>
            <div className="w-3 h-3 bg-red-500 rounded-full"></div>
          </div>
        </div>
        <div className="flex justify-between mb-4">

        </div>

        {/* Subtitle */}
        <p className="text-sm text-center font-bold mt-12 mb-4">Your estimated delivery time is 6:47</p>

        {/* Google Map */}
        {/* Replace the following line with your Google Map component */}
        <div className="mx-auto my-8 w-[90%] h-64 bg-gray-300 rounded-xl">
          {/* Your Google Map Component Goes Here */}
          {/* <iframe className="rounded-lg" width="563" height="256" frameborder="0" 
            marginheight="0" marginwidth="0" id="gmap_canvas" 
            // src="https://maps.google.com/maps?width=563&amp;height=256&amp;hl=en&amp;q=2200%20212TH%20ST%20OSKALOOSA+(CraveCrafter)&amp;t=&amp;z=12&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"/> 
            src="https://maps.app.goo.gl/a4dwrbC4Azfo8DgRA" 
            /> */}
          <iframe className="rounded-lg" src="https://www.google.com/maps/d/u/0/embed?mid=1uy3RGw_I_TEJAYalE4rdjpLgruxxgiY&ehbc=2E312F&noprof=1"
            width="563" height="256" frameborder="0" marginheight="0" marginwidth="0" id="gmap_canvas"
          />
          <a href='https://www.acadoo.de/'></a>
          <script type='text/javascript'
            src='https://embedmaps.com/google-maps-authorization/script.js?id=5b5ea4aec97b020cbf3b8a39ec1d67ee007fe5b1'>
          </script>
        </div>

        {/* Button at the bottom */}
        <button className=" text-white px-4 py-2 rounded-full"></button>

        {/* Progress Bar */}
        
        
      </div>
    </div>
  )
}
