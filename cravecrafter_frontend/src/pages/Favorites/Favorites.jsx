import React, { useEffect, useState } from 'react'
import { ReactComponent as Search } from '../../assets/images/search.svg'
import FavoriteRestaurant from '../../components/FavoriteRestaurant/FavoriteRestaurant';

import FavoritesBackground from '../../assets/images/favorites-background.png'

import testRestaurant from '../../assets/images/test-restaurant.jpeg'
import FavoriteMenuItem from '../../components/FavoriteMenuItem/FavoriteMenuItem';

import { Link } from 'react-router-dom';

import Navbar from '../../components/Navbar/Navbar'

import { useAuthStore } from '../../store/auth';

import useAxios from '../../utils/useAxios';

export default function Favorites() {
    const [favoriteRestaurants, setFavoriteRestaurants] = useState([]);
    const [favoriteMenuItems, setFavoriteMenuItems] = useState([]);
    const api = useAxios();
    const user = useAuthStore((state) => state.user)()

    const getFavoriteRestaurants = async () => {
        try {
            const response = await api.get('api/favorites/restaurants');
            console.log(response);
            const restaurantList = response.data
            setFavoriteRestaurants(restaurantList)
        } catch (error) {
            console.log(error);// just keeping as an alert for now!
        }

    };

    const getFavoriteMenuItems = async () => {
        try {
            const response = await api.get('api/favorites/menu_items');
            console.log(response)
            const favoritesList = response.data
            setFavoriteMenuItems(favoritesList)
        } catch (error) {
            console.log(error);// just keeping as an alert for now!
        }

    };

const showFavoriteRestaurants = () => {
    // Right now this is showing the numFavorites and isOpen as false information
    return favoriteRestaurants.map((restaurant, i) => (
        <FavoriteRestaurant key={i} name={restaurant.fields.name} imgLink={restaurant.fields.img_url} numFavorites={1} 
        isOpen={restaurant.fields.open_now}
        />
    ))
}

const showFavoriteMenuItems = () => {
    // Right now this is showing the numFavorites and isOpen as false information
    return favoriteMenuItems.map((item, i) => (
        <FavoriteMenuItem key={i} name={item.fields.name} imgLink={item.fields.img_url} restaurant={"RESTAURANT"} price={item.fields.price_in_cents} isOpen={item.fields.available} />
    ))
}


useEffect(() => {
    getFavoriteRestaurants();
    getFavoriteMenuItems();
}, [])


return (
    <>
        <Navbar />
        {/* Hero section */}
        <div style={{
            position: "relative", width: '100%', minHeight: "100vh", display: "flex",
            flexDirection: "column"
        }} 
        // className="pt-60 md:pt-48"
        >
            
            {/* ADDING TO GET HERO PAGE */}
            <div style={{
                    position: "absolute", zIndex: "20", display: "flex",
                    flexDirection: "column", alignItems: "center", alignSelf: "center", marginTop: "44vh"
                }}>
                    <div style={{ height: "", width: '100%', alignItems: 'center', display: "flex", flexDirection: "column" }}>
                <h3 className="text-2xl text-[#FCFBFA]">Your Favorites</h3>
                <Search style={{
                    position: "absolute", zIndex: "100", alignSelf: "left",
                    transform: "translateX(-125px)"
                }}
                    className="mt-14" />
                <input style={{ background: '#D9D9D9', borderRadius: 24, position: "absolute" }}
                    className="w-72 mt-12 p-1 pl-10 text-xl" />
            </div>
                </div>
                <img src={FavoritesBackground} style={{ filter: 'brightness(40%)', position: "relative", objectFit: "cover", height: "60vh" }} alt="food" />


            <div className="mt-10 px-4 sm:px-8 md:px-14" style={{ overflow: "hidden" }}>
                <div style={{ display: "flex", flexDirection: "row", width: "100%", alignItems: "center", marginRight: "auto" }}>
                    <h3 className="text-2xl">Favorite Restaurants</h3>
                    {/* This link will route to the Favorite Restaurants page */}
                    <Link to="/favorites/restaurants"
                        style={{
                            marginLeft: "auto", color: 'black', fontFamily: 'Epilogue',
                            fontWeight: '500', textDecoration: 'underline'
                        }}>View All</Link>
                </div>
                <div style={{ overflowX: "scroll", width: "100%" }} className="flex flex-column mt-3">
                    {showFavoriteRestaurants()}
                </div>
            </div>
            <div className="my-10 px-4 sm:px-8 md:px-14" style={{ overflow: "hidden" }}>
            <div style={{ display: "flex", flexDirection: "row", width: "100%", alignItems: "center", marginRight: "auto" }}>
                    <h3 className="text-2xl">Favorite Menu Items</h3>
                    {/* This link will route to the Favorite Restaurants page */}
                    <Link to="/favorites/menu-items"
                        style={{
                            marginLeft: "auto", color: 'black', fontFamily: 'Epilogue',
                            fontWeight: '500', textDecoration: 'underline'
                        }}>View All</Link>
                </div>
                <div style={{ overflowX: "scroll", width: "100%" }} className="flex flex-column mt-3">
                    {showFavoriteMenuItems()}
                </div>
            </div>
        </div>
    </>
)
}
