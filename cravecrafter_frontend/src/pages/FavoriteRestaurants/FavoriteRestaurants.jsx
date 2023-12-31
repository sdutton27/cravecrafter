import React, { useState, useEffect } from 'react'

import { ReactComponent as Search } from '../../assets/images/search.svg'
import FavoriteRestaurant from '../../components/FavoriteRestaurant/FavoriteRestaurant';

import testRestaurant from '../../assets/images/test-restaurant.jpeg'
import FavoriteEntree from '../../components/FavoriteMenuItem/FavoriteMenuItem';

// import FavoritesBackground from '../../assets/images/favorites-background.png'
import FavoritesBackground from '../../assets/images/favorite-restaurants-background.png'



import { Link } from 'react-router-dom';
import SurpriseOrderButton from '../../components/SurpriseOrderButton/SurpriseOrderButton';

import Navbar from '../../components/Navbar/Navbar';

import { useAuthStore } from '../../store/auth';

import useAxios from '../../utils/useAxios';

export default function FavoriteRestaurants() {
    const [favoriteRestaurants, setFavoriteRestaurants] = useState([]);
    const api = useAxios();
    const user = useAuthStore((state) => state.user)()

    // This should be put into context at a later date since it's recycled code
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

    useEffect(() => {
        getFavoriteRestaurants();
    }, [])

    // This should be put into context at a later date since it's recycled code
    const showFavoriteRestaurants = () => {
        // Right now this is showing the numFavorites and isOpen as false information
        return favoriteRestaurants.map((restaurant, i) => (
            <FavoriteRestaurant key={i} name={restaurant.fields.name} imgLink={restaurant.fields.img_url} numFavorites={1} 
            isOpen={restaurant.fields.open_now}
            />
        ))
    }


  return (
    <>
    <Navbar />
    <div style={{
        position: "relative", width: '100%', minHeight: "100vh", display: "flex",
        flexDirection: "column"
    }} className="">
        <div style={{
        width:"100%", 
            background: `linear-gradient( rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5) ), url(${FavoritesBackground})`,
            backgroundSize:"cover", backgroundBlendMode:"darken", 
            backgroundRepeat:"no-repeat", alignItems:"center", 
            textAlign:"center", height:"60vh"}} className="flex flex-col h-60v pt-[300px]">
            <h3 style={{color: '#FCFBFA'}} className="text-3xl">Let us do the decision making for you.</h3>
            <h4 style={{color: '#FCFBFA'}} className="text-sm p-1 mb-6">Place a surprise order from your list of favorite restaurants.</h4>
            {/* Right now I'm not having this button work since this feature is yet to come! */}
            <SurpriseOrderButton classes=" h-10 px-5" />
        </div>
        <div className="mt-12 mb-8 px-4 sm:px-8 md:px-14" style={{ overflow: "hidden" }}>
            <div style={{ display: "flex", flexDirection: "row", width: "100%", alignItems: "center", marginRight: "auto"}}>
                <h3 className="text-2xl">Favorite Restaurants</h3>
                {/* This will be a drop-down menu to sort things */}
                {/* <a
                style={{
                    marginLeft: "auto", color: 'black', fontFamily: 'Epilogue',
                    fontWeight: '500', textDecoration: 'underline'
                }}>Sort</a> */}
            </div>
            <div style={{ width: "100%", justifyContent:"center" }} className="flex flex-column flex-wrap gap-6 mt-3">
            {showFavoriteRestaurants()}
            </div>
        </div>
    </div>
    </>
  )
}
