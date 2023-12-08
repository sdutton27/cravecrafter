import React from 'react'


export default function FavoriteMenuItem({ name, imgLink, restaurant, price, isOpen }) {
    return (
        <div style={{ flexShrink: "0" }} className="my-2 transform transition duration-200 hover:scale-105 mx-2">
            <img src={imgLink} alt="image for menu item"
                className="h-48 w-80"
                style={{ borderRadius: "12px", objectFit: "cover", opacity: isOpen ? 1 : .5 }} />
            <div className="flex flex-row w-80">
                <h3 style={{ marginRight: "auto", whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis", width: "270px" }}>{name}</h3>
                <h3 style={{ marginLeft: "auto" }}>${(parseInt(price, 10) / 100).toFixed(2)}</h3>
            </div>
            <h4 className="text-xs">{restaurant}</h4>
            <h4 className="text-xs"
                style={{ fontWeight: "600", color: isOpen ? "green" : "red" }}
            >{isOpen ? "Available to Order" : "Unavailable"}</h4>
        </div>
    )
}
