import React, { useEffect, useState } from 'react'
import { ReactComponent as Search } from '../../assets/images/search.svg'
import FavoriteRestaurant from '../../components/FavoriteRestaurant/FavoriteRestaurant';

import testRestaurant from '../../assets/images/test-restaurant.jpeg'
import FavoriteEntree from '../../components/FavoriteEntree/FavoriteEntree';

import { Link } from 'react-router-dom';

export default function Favorites() {
    const [favoriteRestaurants, setFavoriteRestaurants] = useState([]);

    const getFavoriteRestaurants = async () => {
        // try {
        //     // const res = await fetch('/api/restaurants/');
        //     // const res = await fetch('https://cravecrafter-production.up.railway.app/api/restaurants/');
        //     const restaurantList = await res.json();
        //     // this.setState({
        //     //   todoList
        //     // });
        //     setFavoriteRestaurants(restaurantList)
        //     console.log(restaurantList)
        //   } catch (e) {
        //     console.log(e);
        // }
    }

    const showFavoriteRestaurants = () => {
        console.log("showing favorite restaurants")
        console.log(favoriteRestaurants[0])
        console.log(favoriteRestaurants.length)
        return favoriteRestaurants.map((restaurant, i)=>(
            <FavoriteRestaurant name={restaurant.name} imgLink={restaurant.img_url} numFavorites={1} isOpen={true}/>
        ))
    }

    useEffect(()=>{
        // commented just for now
        // getFavoriteRestaurants();
    },[])

    // useEffect(()=>{
    //     showFavoriteRestaurants();
    // },[favoriteRestaurants])

    //for the time being
    const firstName = "Michael";
    return (
        <></>
    )
}
