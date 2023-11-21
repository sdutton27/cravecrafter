import React from 'react'
import { ReactComponent as User } from '../../assets/images/user.svg'
import { useNavigate } from "react-router-dom";

export default function ProfileButton({classes}) {
    const navigate = useNavigate(); // to nav with button

    return (
        <button onClick={() => navigate('/profile')} 
                // className="nav-button"
                // id={id}
                className={classes}
                style={{ 
                        // padding: '16px 10px', 
                        background: '#050312', 
                        borderRadius: '100%', justifyContent: 'center', 
                        alignItems: 'center', gap: 10, display: 'inline-flex',
                        border: 0, 
                        // margin: "5px 0px"
                        }}>
            <User />
        </button>
    )
}
