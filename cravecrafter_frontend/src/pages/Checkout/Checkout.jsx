import React from 'react'
import logo from '../../assets/images/ICON-logo.png'
import logo1 from '../../assets/images/logo-black.png'
import gift from '../../assets/gifticon-bg.png'
import linkedin from '../../assets/images/linkedin.png'

import { FaUserCircle } from "react-icons/fa";
import { GiKnifeFork } from "react-icons/gi";
import { HiShoppingCart } from "react-icons/hi";
import { IoMdPin } from "react-icons/io";
import { HiUser } from "react-icons/hi";
import { FaBolt } from "react-icons/fa";
import { IoMdCalendar } from "react-icons/io";
import { BsCreditCardFill } from "react-icons/bs";
import { FaTags } from "react-icons/fa";
import { CiGlobe } from "react-icons/ci";
import { IoLogoLinkedin } from "react-icons/io";


export const Checkout = () => {
  return (
    <div className="max-w-screen-lg mx-auto p-4 h-[1125px] bg-[#f2f0ef]">
      {/* Navbar */}
      <nav className="flex justify-between items-center bg-[#f2f0ef] p-4">
        <div className="flex items-center">
          {/* Logo */}
          <img src={logo} alt="Logo" className="h-6 w-[180px] ml-6" />
        </div>
        <div className="flex items-center space-x-4">
          <a href="#">About</a>
          <a href="#">Favorite</a>
          <button className="flex gap-2 bg-[#FF4700] text-white text-sm px-4 py-2 rounded-full">Surprise Order<GiKnifeFork className="self-center" /></button>
          <button className="flex gap-2 h-9 bg-black text-white items-center px-4 py-2 rounded-full"><HiShoppingCart className="self-center" />1</button>
          <div className="text-black px-4 py-2 rounded-full"><FaUserCircle className="h-[36px] w-[36px]" /></div>
        </div>
      </nav>

      {/* Main Content */}
      <div className="flex space-x-8 mt-8 justify-center">
        {/* Left Column */}
        <div className="flex flex-col p-4">
          {/* Logo and Name */}
          <div className="flex items-center mb-4 ml-5">
            <img src={gift} alt="Logo Left" className="h-12 w-12 ml-9" />
            <span className="text-xl font-bold ml-2">Surprise Favorite Restaurant</span>
          </div>
        <div className="flex flex-col w-[500px] h-[850px] p-6 ml-9 bg-[#fdfcfb] shadow-2xl rounded-2xl">

          {/* Section 1 */}
          <div className="flex items-center mb-4">
            <span className="ml-4 text-sm font-bold">Delivery Details</span>
            {/* Edit Button */}
            <button className="ml-[190px] border-[#f2f0ef] border-2 bg- text-black text-sm px-2 py-1 rounded-full">Delivery</button>
            <button className="ml-auto bg-[#f2f0ef] text-black text-sm px-2 py-1 rounded-full">Pickup</button>
          </div>
          <div className="flex items-center mb-4">
            {/* Icon and Name */}
            <div className="bg-white text-black p-2 rounded-full"><IoMdPin /></div>
            <span className="ml-1 text-sm"><pre>2972 Westheimer Rd.,{"\n"} Apt H4,{"\n"} Des Moines, IA 50047</pre></span>
            {/* Edit Button */}
            <button className="ml-auto bg-[#f2f0ef] text-black text-xs px-2 py-1 rounded-full">Edit</button>
          </div>
          <div className="flex items-center mb-4">
            {/* Icon and Name */}
            <div className="bg-white text-black p-2 rounded-full"><HiUser /></div>
            <span className="ml-1 text-sm"><pre>Leave at my door{"\n"}<p className="text-xs font-bold">Add delivery instructions</p> </pre></span>
            
            {/* Edit Button */}
            <button className="ml-auto bg-[#f2f0ef] text-black text-xs px-2 py-1 rounded-full">Edit</button>
          </div>
          <div className="flex items-center mb-4">
            <span className="ml-4 text-sm font-bold">Delivery Estimate</span>
          </div>

          {/* Section 2 */}
          <div className="flex items-center mb-4">
            {/* Icon and Name */}
            <div className="bg-white text-black p-2 rounded-full"><FaBolt /></div>
            <span className="ml-1 text-xs"><pre><p className="text-xs font-bold">Priority {"\n"}</p>30-40 min | 5:30-6:00 Delivery estimate</pre></span>
            {/* Edit Button */}
            <p className="ml-auto text-black text-xs px-2 py-1 rounded">$2.99</p>
          </div>
          <div className="flex items-center mb-4">
            {/* Icon and Name */}
            <div className="bg-white text-black p-2 rounded-full"><HiShoppingCart /></div>
            <span className="ml-1 text-xs"><pre><p className="text-xs font-bold">Standard {"\n"}</p>45-60 min | 5:45-6:30 Delivery estimate</pre></span>
          </div>
          <div className="flex items-center mb-4">
            {/* Icon and Name */}
            <div className="bg-white text-black p-2 rounded-full"><IoMdCalendar /></div>
            <span className="ml-1 text-sm"><pre><p className="text-xs font-bold">Schedule {"\n"}</p>select a time</pre></span>
          </div>
          <div className="flex items-center mb-4">
            <span className="ml-4 text-sm font-bold">Payment Method</span>
          </div>
          <div className="flex items-center mb-4">
            {/* Icon and Name */}
            <div className="bg-white text-black p-2 rounded-full"><BsCreditCardFill /></div>
            <span className="ml-1 text-xs">Visa ...0238</span>
            {/* Edit Button */}
            <button className="ml-auto bg-[#f2f0ef] text-black text-xs px-2 py-1 rounded-full">Edit</button>
          </div>
          <div className="flex items-center mb-4">
            {/* Icon and Name */}
            <div className="bg-white text-black p-2 rounded-full"><FaTags /></div>
            <span className="ml-1 text-xs">2 Promotions available</span>
            {/* Edit Button */}
            <button className="ml-auto bg-[#f2f0ef] text-black text-xs px-2 py-1 rounded-full">Add</button>
          </div>
          
          <div className="flex items-center mb-4">
            <span className="ml-4 text-sm font-bold">Order Summary</span>
          </div>
          <div className="flex items-center mb-4">
            <span className="ml-4 text-xs">1 Item</span>
            {/* Edit Button */}
            <button className="ml-auto bg-[#f2f0ef] text-black text-xs px-2 py-1 rounded-full">Add items</button>
          </div>
          <div className="flex items-center mb-4">
            {/* Icon and Name */}
            <div className="bg-white text-black p-2 rounded-full"><GiKnifeFork /></div>
            <span className="ml-1 text-xs">Surprise Dish</span>
            {/* Edit Button */}
            <p className="ml-auto text-black text-xs px-2 py-1 rounded">$14.99</p>
          </div>

          {/* Small Box */}
          <div className="bg-[#f2f0ef] rounded-lg p-4 h-[136px] text-sm">
            <p>Special instructions</p>
            <p>No plastic utensils, extra napkins, etc.</p>
          </div>
        </div>
        </div>

        {/* Right Column */}
        <div className="flex flex-col mt-[70px] p-2">
          {/* Button above the right column */}
          <button className="bg-black text-white px-4 py-2 w-[310px] rounded-full">Continue to Payment</button>

        <div className="flex flex-col p-4">
          {/* Order Summary */}
          <div className="bg-white shadow-2xl ml-[-35px] p-4 rounded-xl w-[346px] h-[366px] mb-4">
            <p className="text-sm font-bold mb-2">Order Total</p>
            <div className="bg-[#FFECE4] p-2 rounded w-80 text-xs text-center">Saving $7.40 with promotions</div>
            <div className="flex justify-between mt-2 text-xs">
              <p>Subtotal</p>
              <p>$19.65</p>
            </div>
            <div className="flex justify-between mt-2 text-xs">
              <p>Delivery fee</p>
              <p>$9.49</p>
            </div>
            <div className="flex justify-between mt-2 text-xs">
              <p>Discounts</p>
              <p className="text-[#e38f6b]">-$7.40</p>
            </div>
            <div className="flex justify-between mt-2 text-xs">
              <p>Taxes & Other Fees</p>
              <p>$4.74</p>
            </div>
            <div className="flex justify-between mt-2 text-xs">
              <p>Add a Tip</p>
              <p>$3.38</p>
            </div>
            <p className='mt-2 text-xs my-4'>100% of your tip goes to your courier. Tips are based on your order total of $33.88 before any discounts or promotions.</p>
            {/* Tip Options */}
            <div className="flex space-x-4 mb-2 pl-4">
              <button className="bg-[#FF4700] text-xs text-white px-4 py-2 rounded-full">10%</button>
              <button className="bg-[#f2f0ef] text-black text-xs px-4 py-2 rounded-full">15%</button>
              <button className="bg-[#f2f0ef] text-black text-xs px-4 py-2 rounded-full">20%</button>
              <button className="bg-[#f2f0ef] text-black text-xs px-4 py-2 rounded-full">Other</button>
            </div>
            <div className="flex justify-between mt-6">
              <p>Total</p>
              <p>$29.86</p>
            </div>
          </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-[#050312] text-white p-8 flex flex-col ml-[-16px] mt-[45px] w-[1025px]">
      {/* First Row: Columns */}
      <div className="flex mb-4 gap-8">
        <div className="w-2/5 flex gap-2">
          <img src={logo1} alt="" className="h-[40px] w-[200px] h-7 pt-[1px] ml-[16px]" />
          <img src={linkedin} alt="" className="h-[14px] w-[14px] mb-2 mt-3" />

        </div>
        <div className="w-1/5">
          <h3 className="text-xs font-bold mb-4">Product Management</h3>
          <ul className="flex gap-1 items-center">
            <li className="text-xs mt-[-8px]">Danny Tran</li>
            <div className="text-white rounded-full"><IoLogoLinkedin className="mb-1" /></div>
            <div className="text-white rounded-full"><CiGlobe className="mb-1" /></div>
          </ul>
        </div>
        <div className="w-1/5">
          <h3 className="text-xs font-bold mb-4">Software Development</h3>
          <ul className="flex column gap-1 items-center">
            <li className="text-xs mt-[-8px]">Simon Dutton</li>
            <div className="text-white rounded-full"><IoLogoLinkedin className="mb-1" /></div>
            <div className="text-white rounded-full"><CiGlobe className="mb-1" /></div>
          </ul>
          <ul className="flex column gap-1 items-center">
            <li className="text-xs mt-[-8px]">Idong Wilson</li>
            <div className="text-white rounded-full"><IoLogoLinkedin className="mb-1" /></div>
            <div className="text-white rounded-full"><CiGlobe className="mb-1" /></div>
          </ul>
        </div>
        <div className="w-1/5">
          <h3 className="text-xs font-bold mb-4">Project Design</h3>
          <ul className="flex gap-1 items-center">
            <li className="text-xs mt-[-8px]">Bailee Davis</li>
            <div className="text-white rounded-full"><IoLogoLinkedin className="mb-1" /></div>
            <div className="text-white rounded-full"><CiGlobe className="mb-1" /></div>
          </ul>
        </div>
      </div>
      {/* Second Row: Copyright */}
      <div className="flex items-center mt-2 justify-center text-xs">
        Acknowledgements
      </div>
    </footer>
    </div>
  )
}