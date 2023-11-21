import React from 'react'


export default function FavoriteRestaurant({name, imgLink, numFavorites, isOpen}) {
  return (
    <div style={{flexShrink:"0"}}>
        <img src={imgLink} alt="image for restaurant" 
        className="h-48"
        style={{borderRadius:"12px", objectFit:"contain", opacity: isOpen ? 1 : .5 }}/>
        <h3>{name}</h3>
        <h4 className="text-xs">{numFavorites} Favorited entrees</h4>
        <h4 className="text-xs"
            style={{fontWeight:"600", color: isOpen ? "green": "red"}}
        >{isOpen ? "Open Now" : "Closed"}</h4>
    </div>
  )
}
