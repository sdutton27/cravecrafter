import React from 'react'
import giftbox from '../../assets/lottie/present.json'

// import { useLottie } from "lottie-react";
import Lottie from 'lottie-react';


export const SurpriseOption = () => {

  // const options = {
  //   animationData: giftbox,
  //   loop: true
  // };

  // const { Gift } = useLottie(options);

  return (
    <div className="bg-[#7a7a7a] min-h-screen flex items-center justify-center">
      <div className="max-w-xs mx-auto mt-10 flex justify-center items-center">
      {/* Card Container */}
      {/* <div className="bg-white shadow-2xl p-6 rounded-lg w-600 h-649"> */}
      <div className="bg-white shadow-2xl px-6 pt-8 pb-6 rounded-xl flex flex-col w-80 h-[550px]">
        {/* Some Words */}
        <p className=" mb-6 text-center kanit text-xl">Your surprise order has been selected!</p>
        <p className="mt-[-16px] text-gray-700 text-1rem text-center kanit">Would you like to preview our selection?</p>

        {/* Image at the center */}
        <div className="flex items-center justify-center mb-4">
          {/* <img src={giftbox} alt="" className="w-40 h-40" /> */}
          <Lottie animationData={giftbox} loop={true} />
          {/* {Gift} */}
        </div>

        {/* Stacked Buttons at the bottom */}
        <div className="flex flex-col mt-0">
          <button className="bg-black text-white px-4 py-2 mb-2 rounded-full w-60 border-black
                            self-center border-2 hover:bg-[#FE5100]  hover:text-black hover:border-[#FE5100]
                             hover:scale-105 transform transition duration-300">
            Continue with Surprise
            </button>
          <button className="bg-transparent border-black border-2 text-black px-4 
                            py-2 rounded-full w-60 self-center hover:bg-[#FE5100] hover:text-white 
                             hover:scale-105 hover:border-[#FE5100] transform transition duration-300
                            ">
            Preview Entree
            </button>
        </div>
      </div>
      </div>
    </div>
  )
}

export default SurpriseOption;