import React from 'react'


export default function FavoriteEntree({name, imgLink, restaurant, price, isOpen}) {
  return (
    <div style={{flexShrink:"0"}}>
        <img src={imgLink} alt="image for restaurant" 
        className="h-48"
        style={{borderRadius:"12px", objectFit:"contain", opacity: isOpen ? 1 : .5 }}/>
        <div className="flex flex-row">
        <h3 style={{marginRight:"auto"}}>{name}</h3>
        <h3 style={{marginLeft:"auto"}}>{price}</h3>
        </div>
        <h4 className="text-xs">{restaurant}</h4>
        <h4 className="text-xs"
            style={{fontWeight:"600", color: isOpen ? "green": "red"}}
        >{isOpen ? "Open Now" : "Closed"}</h4>
    </div>
  )
}
