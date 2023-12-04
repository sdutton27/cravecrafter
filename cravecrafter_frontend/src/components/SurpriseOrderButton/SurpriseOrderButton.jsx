import React from 'react'
import { ReactComponent as Random } from '../../assets/images/random.svg'
import { useNavigate } from "react-router-dom";

export default function SurpriseOrderButton({classes}) {
    const navigate = useNavigate(); // to nav with button
    return (
        <button onClick={() => navigate('/surprise-order/details')}
                className={classes}
                style={{ 
                        // paddingLeft: 24, 
                        // paddingRight: 24, 
                        // paddingTop: 16, 
                        // paddingBottom: 16, 
                        background: '#FE5100', 
                        borderRadius: 28, justifyContent: 'center', 
                        alignItems: 'center', gap: 10, display: 'inline-flex',
                        border: 0, 
                        // margin: "5px 0px"
                        }}>
            <div style={{ textAlign: 'center', color: '#FCFBFA', fontSize: 16, 
                        fontFamily: 'Kanit', fontWeight: '500'}}>
                Surprise Order
            </div>
            <Random />
        </button>
    )
}
