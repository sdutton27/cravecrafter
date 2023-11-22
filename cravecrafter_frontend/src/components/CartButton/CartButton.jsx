import React from 'react'
import { ReactComponent as Cart } from '../../assets/images/cart.svg'
import { useNavigate } from "react-router-dom";

export default function CartButton({classes}) {
    const navigate = useNavigate(); // to nav with button

    //for testing
    const itemsInCart = 0;
    return (
        <button 
            // className="nav-button" 
            className={classes}
            onClick={() => navigate('/cart')}
                style={{ 
                        // paddingLeft: 24, 
                        // paddingRight: 24, 
                        // paddingTop: 16, 
                        // paddingBottom: 16, 
                        background: '#050312', 
                        borderRadius: 28, 
                        justifyContent: 'center', 
                        alignItems: 'center', gap: 10, display: 'inline-flex',
                        border: 0}}>
            <Cart />
            <div style={{ textAlign: 'center', color: '#FCFBFA', fontSize: 16, 
                        fontFamily: 'Kanit', fontWeight: '500', 
                        wordWrap: 'break-word' }}>
                {itemsInCart}
            </div>
        </button>
    )
}
