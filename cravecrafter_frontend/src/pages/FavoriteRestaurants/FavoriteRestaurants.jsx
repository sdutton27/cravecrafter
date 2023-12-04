import React from 'react'

import { ReactComponent as Search } from '../../assets/images/search.svg'
import FavoriteRestaurant from '../../components/FavoriteRestaurant/FavoriteRestaurant';

import testRestaurant from '../../assets/images/test-restaurant.jpeg'
import FavoriteEntree from '../../components/FavoriteMenuItem/FavoriteMenuItem';

import { Link } from 'react-router-dom';
import SurpriseOrderButton from '../../components/SurpriseOrderButton/SurpriseOrderButton';

import Navbar from '../../components/Navbar/Navbar';

export default function FavoriteRestaurants() {
  return (
    <>
    <Navbar />
    <div style={{
        position: "relative", width: '100%', minHeight: "100vh", display: "flex",
        flexDirection: "column"
    }} className="">
        <div style={{backgroundColor: "#FE5100", alignItems:"center", textAlign:"center"}} className="flex flex-col h-[600px] pt-[300px]">
            <h3 style={{color: '#FCFBFA'}} className="text-3xl">Let us do the decision making for you.</h3>
            <h4 style={{color: '#FCFBFA'}} className="text-sm p-5 sm:p-1 mb-6">Place a surprise order from your list of favorite restaurants.</h4>
            <SurpriseOrderButton/>
        </div>
        <div className="mt-12 px-4 sm:px-8 md:px-14" style={{ overflow: "hidden" }}>
            <div style={{ display: "flex", flexDirection: "row", width: "100%", alignItems: "center", marginRight: "auto" }}>
                <h3 className="text-2xl">Favorite Restaurants</h3>
                {/* This will be a drop-down menu to sort things */}
                <a
                style={{
                    marginLeft: "auto", color: 'black', fontFamily: 'Epilogue',
                    fontWeight: '500', textDecoration: 'underline'
                }}>Sort</a>
            </div>
            <div style={{ overflowX: "auto", width: "100%" }} className="flex flex-column gap-6 mt-3">
                <FavoriteRestaurant name={"Applebee's"} imgLink={testRestaurant} numFavorites={2} isOpen={true}/>
                <FavoriteRestaurant name={"Papa John's"} imgLink={testRestaurant} numFavorites={2} isOpen={false}/>
                <FavoriteRestaurant name={"Pollo Tropical"} imgLink={testRestaurant} numFavorites={2} isOpen={true}/>
                <FavoriteRestaurant name={"McDonald's"} imgLink={testRestaurant} numFavorites={2} isOpen={false}/>
            </div>
        </div>
    </div>
    </>
  )
}
