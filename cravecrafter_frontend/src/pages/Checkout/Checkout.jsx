import React, { useState } from 'react'
import logo from '../../assets/images/ICON-logo.png'
import logo1 from '../../assets/images/logo-black.png'
import gift from '../../assets/gifticon-bg.png'
import linkedin from '../../assets/images/linkedin.png'
import { ReactComponent as FastCart } from '../../assets/images/fast-cart.svg'

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

import OrderTypeSwitch from '../../components/OrderTypeSwitch/OrderTypeSwitch'

import Navbar from '../../components/Navbar/Navbar';

export const Checkout = () => {

  const [deliveryOrder, setDeliveryOrder] = useState(true);
  const [address, setAddress] = useState("");
  const [deliveryInstructions, setDeliveryInstructions] = useState("");

  const [payment, setPayment] = useState(false);

  const priorityBtn = document.getElementById('priority');
  const standardBtn = document.getElementById('standard');
  const calendarBtn = document.getElementById('calendar');

  const clickPriority = () => {
    if (priorityBtn.checked) {
      priorityBtn.checked = false;
    } else {
      priorityBtn.checked = true;
    }
  }

  const clickStandard = () => {
    if (standardBtn.checked) {
      standardBtn.checked = false;
    } else {
      standardBtn.checked = true;
    }
  }

  const clickCalendar = () => {
    if (calendarBtn.checked) {
      calendarBtn.checked = false;
    } else {
      calendarBtn.checked = true;
    }
  }

  return (
    <div className="min-h-screen flex flex-col ">
      {/* Navbar */}
      <Navbar />

      {/* Main Content */}
      <div className="flex flex-row gap-2 mt-16 justify-center">
        {/* Left Column */}
        <div className="flex flex-col p-4 mt-2">
          {/* Logo and Name */}
          <div className="flex items-center ml-5">
            <img src={gift} alt="Logo Left" className="h-12 w-12 ml-9" />
            <span className="text-xl font-bold ml-2">Surprise Restaurant</span>
          </div>
          <div className="flex flex-col w-[400px] h-[850px] p-6 ml-9 bg-[#fdfcfb] shadow-2xl rounded-2xl">

            {/* Section 1 */}
            <div className="flex items-center mb-4 kanit">
              <span className="ml-2 text-xl font-bold">Delivery Details</span>
              {/* Edit Button */}
              <OrderTypeSwitch deliveryOrder={deliveryOrder} setDeliveryOrder={setDeliveryOrder} />
            </div>
            <div className="flex items-center mb-4 epilogue">
              {/* Icon and Name */}
              <div className="bg-white text-black p-2 rounded-full mr-1 text-xl"><IoMdPin /></div>
              {address ?
                <>
                  <span className="ml-1 text-sm"><pre>2972 Westheimer Rd.,{"\n"} Apt H4,{"\n"} Des Moines, IA 50047</pre></span>
                  {/* Edit Button */}
                  <button className="ml-auto bg-[#f2f0ef] text-black text-[14px] px-3 py-1 rounded-full font-semibold">Edit</button>
                </>
                :
                <>
                  <span className="text-sm font-semibold">Address</span>
                  <button className="ml-auto bg-[#f2f0ef] text-black text-[14px] px-3 py-1 rounded-full font-semibold">Add</button>
                </>
              }
            </div>
              {/* Line break */}
            <div style={{width: '100%', height: '1px', background: 'rgba(0, 0, 0, 0.10)'}} />

            <div className="flex items-center my-4 epilogue">
              {/* Icon and Name */}
              <div className="bg-white text-black p-2 rounded-full mr-1 text-xl"><HiUser /></div>

              {deliveryInstructions ?
                <>
                  <span className="ml-1 text-sm"><pre>2972 Westheimer Rd.,{"\n"} Apt H4,{"\n"} Des Moines, IA 50047</pre></span>
                  {/* Edit Button */}
                  <button className="ml-auto bg-[#f2f0ef] text-black text-[14px] px-3 py-1 rounded-full font-semibold">Edit</button>
                </>
                :
                <>
                  <span className="text-sm font-semibold">Delivery Instructions</span>
                  <button className="ml-auto bg-[#f2f0ef] text-black text-[14px] px-3 py-1 rounded-full font-semibold">Add</button>
                </>
              }

            </div>

            {/* Line break */}
            <div style={{width: '100%', height: '1px', background: 'rgba(0, 0, 0, 0.10)'}} />

            <div className="flex items-center my-4">
              <span className="ml-2 text-xl font-bold kanit">Delivery Estimate</span>
            </div>

            {/* Delivery Estimates - right now this is a form */}
            
            <form id="delivery-estimates">
                <input 
                  type="radio" id="priority" name="shipping" value="Priority Shipping" />
                {/* Icon and Name */}
                <label for="priority" className="flex items-center mb-4 epilogue"
                  onClick={clickPriority}
                >
                  <div className="bg-white text-black pr-2 rounded-full mr-1 text-xl"><FaBolt /></div>
                  <span className="ml-1 text-xs"><p className="text-xs font-bold">Priority {"\n"}</p>30-40 min | Delivered directly to you</span>
                  {/* Edit Button */}
                  <p className="ml-auto text-black text-xs px-2 py-1 rounded">$2.99</p>
                </label>
              <input 
                  type="radio" id="standard" name="shipping" value="Standard Shipping" />
                {/* Icon and Name */}
                <label for="standard" className="flex items-center mb-4 epilogue"
                  onClick={clickStandard}
                >
                  <FastCart className="pr-2 mr-2" stroke="#FE5100"/>
                  {/* <div className="bg-white text-black pr-2 rounded-full mr-1 text-xl"><HiShoppingCart /></div> */}
                  <span className="ml-1 text-xs"><p className="text-xs font-bold">Standard {"\n"}</p>45-60 min</span>
                  {/* Edit Button */}
                  {/* <p className="ml-auto text-black text-xs px-2 py-1 rounded">$2.99</p> */}
                </label>
              <input 
                  type="radio" id="calendar" name="shipping" value="Future Shipping" />
                {/* Icon and Name */}
                <label for="calendar" className="flex items-center mb-4 epilogue"
                  onClick={clickCalendar}
                >
                  <div className="bg-white text-black pr-2 rounded-full mr-1 text-xl"><IoMdCalendar /></div>
                  <span className="ml-1 text-xs"><p className="text-xs font-bold">Schedule {"\n"}</p>Select a date/time</span>
                </label>
            </form>

              {/* Line break */}
            <div style={{width: '100%', height: '1px', background: 'rgba(0, 0, 0, 0.10)'}} />

            {/* Payment Method */}
            <div className="flex items-center my-4">
              <span className="ml-2 text-xl font-bold kanit">Payment Method</span>
            </div>
            <div className="flex items-center mb-4">
              {/* Icon and Name */}
              <div className="bg-white text-black p-2 rounded-full mr-1 text-xl"><BsCreditCardFill /></div>

              {payment ? 
              <>
              <span className="ml-1 text-xs">Visa ...0238</span>
              {/* Edit Button */}
              <button className="ml-auto bg-[#f2f0ef] text-black text-[14px] px-3 py-1 rounded-full font-semibold">Edit</button>
              </>
              : 
              <>
              <span className="ml-1 epilogue font-semibold text-sm">Add payment</span>
              <button className="ml-auto bg-[#f2f0ef] text-black text-[14px] px-3 py-1 rounded-full font-semibold">Add</button>
              </>
              }
              </div>

            {/* Line break */}
            <div style={{width: '100%', height: '1px', background: 'rgba(0, 0, 0, 0.10)'}} />
              {/* Order Summary  */}
            <div className="flex items-center my-4">
              <span className="ml-2 text-xl font-bold kanit">Order Summary</span>
            </div>

            <div className="flex items-center mb-4">
              <span className="ml-2 text-xs epilogue">1 Item</span>
              {/* Edit Button - right now we can't edit */}
              {/* <button className="ml-auto bg-[#f2f0ef] text-black text-[14px] px-3 py-1 rounded-full font-semibold">Add items</button> */}
            </div>
            <div className="flex items-center mb-4">
              {/* Icon and Name */}
              <div className="bg-white text-black p-2 rounded-full mr-1 text-[35px]"><GiKnifeFork /></div>
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
          <button className="bg-black text-white px-4 py-2 w-[250px] rounded-full">Continue to Payment</button>

          <div className="flex flex-col p-4">
            {/* Order Summary */}
            <div className="bg-white shadow-2xl ml-[-35px] p-4 rounded-xl w-[300px] h-[366px] mb-4">
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
    </div>
  )
}