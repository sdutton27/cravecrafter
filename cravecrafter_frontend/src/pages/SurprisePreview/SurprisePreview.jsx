import React from 'react'
import { IoIosStar } from "react-icons/io";
import { ReactComponent as Random } from '../../assets/images/random.svg'
import { useNavigate } from "react-router-dom";

export default function SurprisePreview() {
  const navigate = useNavigate(); // to nav with button
  return (
    <div className="bg-[#7a7a7a] min-h-screen flex items-center justify-center">
      <div className="max-w-xs mx-auto mt-10 flex justify-center items-center">
      {/* Card Container */}
      {/* <div className="bg-white shadow-2xl p-6 rounded-lg w-600 h-649"> */}
      <div className="bg-white shadow-2xl px-6 pt-8 pb-6 rounded-xl flex flex-col w-80 h-[550px] md:w-[600px]">
        <h3>McDonald's</h3>
        <h2 className="epilogue text-xl font-bold pt-1 pb-4">Tikka Masala</h2>
        <p className="epilogue text-sm pb-1 h-20" style={{ overflow: "hidden",textOverflow: "ellipsis"}}>
          Your choice of chicken or steak, grilled with onions, mushrooms and 
          red peppers topped with our seven cheese blend, served on a hoagie bun.
        </p>
        <div className="flex flex-row p-2 items-center justify-center">
          <div className="flex flex-row items-center" style={{marginRight: "auto", whiteSpace: "nowrap", overflow: "hidden"}}>
          <IoIosStar className="text-xl mr-1" />
          <h3 style={{width: "270px" }}>4.3</h3>
          </div>
        
        <h3 style={{ marginLeft: "auto" }}>$4.00</h3>
        </div>
        {/* Image */}
        <img src={'https://eltracom.gr/wp-content/uploads/2019/12/web_1186170895.jpg'} 
        alt="image for surprise food item"
                className="h-48 w-80 md:w-[500px] md:mb-12"
                style={{ borderRadius: "12px", objectFit: "cover" }} />

        <hr className="h-[8px]" />
        {/* Stacked Buttons at the bottom */}
        <div className="flex flex-col md:flex-row mt-0 items-center justify-center mb-2 md:gap-2">
          <button className="bg-black text-white py-2 rounded-full w-60 border-black
                            self-center border-2 hover:bg-white  hover:text-black hover:border-black
                             hover:scale-105 transform transition duration-300"
          onClick={()=>navigate('/surprise-order/loading')}
          > 
          <div className="flex flex-row justify-center items-center gap-2 md:gap-4
          w-60
          ">
            New Order
            <Random stroke="#000000"/>
            </div>
            </button>
          <button className="bg-[#FE5100] border-[#FE5100] border-2 text-white px-4 
                            py-2 rounded-full w-60 self-center hover:bg-white hover:text-[#FE5100]
                             hover:scale-105 hover:border-[#FE5100] transform transition duration-300
                            "
          onClick={()=>navigate('/checkout')}
                            >
            Add To Cart
            </button>
        </div>
      </div>
      </div>
    </div>
  )
}
