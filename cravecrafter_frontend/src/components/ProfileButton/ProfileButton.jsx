import React, { useState } from 'react'
import { ReactComponent as User } from '../../assets/images/user.svg'
import { useNavigate } from "react-router-dom";
import { Popper } from '@mui/material';
import { logout } from '../../utils/auth';

export default function ProfileButton({ classes }) {
    const navigate = useNavigate(); // to nav with button
    // For MUI popover
    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);
    const id = open ? 'simple-popper' : undefined;

    const handleClick = (e) => {
        if (open) {
            setAnchorEl(null)
        } else {
            setAnchorEl(e.currentTarget);
        }

    };

    return (
        <div>
            <button
                aria-describedby={id}
                type="button"
                className={classes}
                onClick={handleClick}
                style={{
                    background: '#050312',
                    borderRadius: '100%', justifyContent: 'center',
                    alignItems: 'center', gap: 10, display: 'inline-flex',
                    border: 0,
                }}>
                <User />
            </button>
            <Popper id={id} open={open} anchorEl={anchorEl}>
                <h4
                    onClick={() => { logout(); navigate('/signup'); }}
                    className="shadow-md px-2 m-2 rounded"
                    style={{cursor:"pointer"}}
                >
                    Logout
                </h4>
            </Popper>
        </div>
    )
}
