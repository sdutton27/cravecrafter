import React from 'react'

import logo from '../assets/ICON-logo-black.png'
import linkedin from '../assets/ICON-linkedin.png'

export const Footer = () => {
  return (
    <footer className="bg-[#050312] text-white p-8 flex flex-col static mt-[560px]">
      {/* First Row: Columns */}
      <div className="flex mb-4 gap-8">
        <div className="w-2/5">
          <img src={logo} alt="" className="h-[40px] w-[200px] pt-[1px] ml-[16px]" />

        </div>
        <div className="w-1/5">
          <h3 className="text-sm font-bold mb-4">Product Management</h3>
          <ul className="flex gap-1 items-center">
            <li className="text-sm mt-[-8px]">Danny Tran</li>
            <img src={linkedin} alt="" className="h-[14px] w-[14px] mb-1" />
          </ul>
        </div>
        <div className="w-1/5">
          <h3 className="text-sm font-bold mb-4">Software Development</h3>
          <ul className="flex column gap-1 items-center">
            <li className="text-sm mt-[-8px]">Simon Dutton</li>
            <img src={linkedin} alt="" className="h-[14px] w-[14px] mb-1" />
          </ul>
          <ul className="flex column gap-1 items-center">
            <li className="text-sm mt-[-8px]">Idong Wilson</li>
            <img src={linkedin} alt="" className="h-[14px] w-[14px] mb-1" />
          </ul>
        </div>
        <div className="w-1/5">
          <h3 className="text-sm font-bold mb-4">Project Design</h3>
          <ul className="flex gap-1 items-center">
            <li className="text-sm mt-[-8px]">Bailee Davis</li>
            <img src={linkedin} alt="" className="h-[14px] w-[14px] mb-1" />
          </ul>
        </div>
      </div>
      {/* Second Row: Copyright */}
      <div className="flex items-center mt-2 justify-center text-sm">
        Acknowledgements
      </div>
    </footer>
    
  )
}

