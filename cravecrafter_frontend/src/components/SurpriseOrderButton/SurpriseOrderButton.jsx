import React from 'react'
import { ReactComponent as Random } from '../../assets/images/random.svg'
import { useNavigate } from "react-router-dom";

export default function SurpriseOrderButton({classes, navTo, instructions=""}) {
    const navigate = useNavigate(); // to nav with button
    
    return (
        <button 
        onClick={(instructions ?  instructions : () => navigate(navTo))}
                className={`${classes} text-[#FCFBFA] border-2 border-[#FE5100] bg-[#FE5100] hover:bg-white
                hover:scale-105 transform transition duration-300 hover:text-[#FE5100]
                
                `}
                style={{  
                        borderRadius: 28, justifyContent: 'center', 
                        alignItems: 'center', gap: 10, display: 'inline-flex',
                        // border: 0, 
                        // margin: "5px 0px"
                        }}>
            <div style={{ textAlign: 'center', fontSize: 16, 
                        fontFamily: 'Kanit', fontWeight: '500'}}>
                Surprise Order
            </div>
            <Random fill='green' stroke='#FE5100'/>
        </button>
    )
}
