import React, { useState, useEffect } from 'react'

import { FaPiggyBank } from "react-icons/fa6";
import { IoFastFoodSharp } from "react-icons/io5";
// import { GiPestleMortar } from "react-icons/gi";
import { GiChickenLeg } from "react-icons/gi";
import { FaUserFriends } from "react-icons/fa";
import { GiKnifeFork } from "react-icons/gi";

import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import OutlinedInput from '@mui/material/OutlinedInput';

import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button'
import PropTypes from 'prop-types';
import { Input } from '@mui/base/Input';
import Checkbox from '@mui/material/Checkbox';
import { Unstable_Popup as BasePopup } from '@mui/base/Unstable_Popup';

import { ClickAwayListener } from '@mui/base/ClickAwayListener';
import AllergyPopup from '../../components/AllergyPopup/AllergyPopup';

export const OrderDetails = () => {

  const [budget, setBudget] = useState('');
  const [cuisine, setCuisine] = useState('');
  const [protein, setProtein] = useState('');
  const [numEntrees, setNumEntrees] = useState('');

  // Vegetarian, Vegan, Halal, Kosher, Gluten, Dairy, Eggs, Shellfish, Fish, Peanuts, Tree nuts, Soy, Other
  // Note: we will want this to be stored in the context of the Order
  const [vegetarian, setVegetarian] = useState(false);
  const [vegan, setVegan] = useState(false);
  const [halal, setHalal] = useState(false);
  const [kosher, setKosher] = useState(false);
  const [gluten, setGluten] = useState(false);
  const [dairy, setDairy] = useState(false);
  const [eggs, setEggs] = useState(false);
  const [shellfish, setShellfish] = useState(false);
  const [fish, setFish] = useState(false);
  const [peanuts, setPeanuts] = useState(false);
  const [treeNuts, setTreeNuts] = useState(false);
  const [soy, setSoy] = useState(false);
  const [dietaryRestrictions, setDietaryRestrictions] = useState('');

  // useEffect(()=>{
  //   console.log(vegetarian)
  // },[vegetarian])

  return (
    <div className="bg-[#7a7a7a] min-h-screen flex items-center justify-center">
      <div className="max-w-xs mx-auto mt-10">
        {/* Card Container */}
        <div className="bg-white shadow-2xl px-6 pt-8 pb-6 rounded-xl">
          {/* Title */}
          <h3 className="text-xl text-[#050312] text-1.5rem font-semibold mb-2">Order Details</h3>

          {/* Subtitle */}
          <h4 className="text-[#050312] epilogue text-xs font-light mb-6">Please specify a few details, and we’ll place a surprise order from one of your favorite restaurants.</h4>

          {/* Budget */}
          <div className="flex flex-row justify-center items-center">
            <FormControl className="flex justify-center gap-4 w-72">
              <TextField
                value={budget}
                onChange={(e) => setBudget(e.target.value)}
                select
                required
                label=<div style={{ display: "flex", flexDirection: "row", alignItems: "center", color: '#050312' }}><FaPiggyBank className="mr-4 h-7 w-7" style={{ position: "relative", }} />
                  <span style={{ position: "relative", color: '#050312', fontFamily: 'Epilogue', fontWeight: '500', }} className="">Budget</span></div>
                style={{
                  color: '#050312', fontFamily: 'Epilogue', fontWeight: '400',
                }}
              >
                <MenuItem value={1}>$</MenuItem>
                <MenuItem value={2}>$$</MenuItem>
                <MenuItem value={3}>$$$</MenuItem>
                <MenuItem value={4}>$$$$</MenuItem>
              </TextField>


              {/* Cuisine */}
              <TextField
                value={cuisine}
                onChange={(e) => setCuisine(e.target.value)}
                select
                label=<div style={{ display: "flex", flexDirection: "row", alignItems: "center", color: '#050312' }}>
                  <IoFastFoodSharp className="mr-4 h-7 w-7" style={{ position: "relative", }} />
                  <span style={{ position: "relative", color: '#050312', fontFamily: 'Epilogue', fontWeight: '500', }} className="mr-2">Cuisine</span>
                  <span style={{ position: "relative", color: '#aaaaaa', fontFamily: 'Epilogue', fontWeight: '300', }}>(Optional)</span></div>
                style={{
                  color: '#050312', fontFamily: 'Epilogue', fontWeight: '400',
                }}
              >
                {/* We should be retrieving this information from the favorites that this user has */}
                <MenuItem value={"american"}>American</MenuItem>
                <MenuItem value={"breakfast"}>Breakfast</MenuItem>
                <MenuItem value={"chinese"}>Chinese</MenuItem>
                <MenuItem value={"desserts"}>Desserts</MenuItem>
                <MenuItem value={"ethiopian"}>Ethiopian</MenuItem>
                <MenuItem value={"indian"}>Indian</MenuItem>
                <MenuItem value={"italian"}>Italian</MenuItem>
                <MenuItem value={"japanese"}>Japanese</MenuItem>
                <MenuItem value={"mexican"}>Mexican</MenuItem>
                <MenuItem value={"pastries"}>Pastries</MenuItem>
                <MenuItem value={"sandwiches"}>Sandwiches</MenuItem>
                <MenuItem value={"sushi"}>Sushi</MenuItem>
                <MenuItem value={"vietnamese"}>Vietnamese</MenuItem>
                <MenuItem value={""}>N/A</MenuItem>
              </TextField>

              {/* Protein */}
              <TextField
                value={protein}
                onChange={(e) => setProtein(e.target.value)}
                select
                label=<div style={{ display: "flex", flexDirection: "row", alignItems: "center", color: '#050312' }}>
                  <GiChickenLeg className="mr-4 h-7 w-7" style={{ position: "relative", }} />
                  <span style={{ position: "relative", color: '#050312', fontFamily: 'Epilogue', fontWeight: '500', }} className="mr-2">Protein</span>
                  <span style={{ position: "relative", color: '#aaaaaa', fontFamily: 'Epilogue', fontWeight: '300', }}>(Optional)</span>
                </div>
                style={{
                  color: '#050312', fontFamily: 'Epilogue', fontWeight: '400',
                }}
              >
                {/* We should be retrieving this information from the favorites that this user has */}
                <MenuItem value={"beef"}>Beef</MenuItem>
                <MenuItem value={"chicken"}>Chicken</MenuItem>
                <MenuItem value={"lamb"}>Lamb</MenuItem>
                <MenuItem value={"pork"}>Pork</MenuItem>
                <MenuItem value={"shrimp"}>Shrimp</MenuItem>
                <MenuItem value={"tofu"}>Tofu</MenuItem>
                <MenuItem value={"turkey"}>Turkey</MenuItem>
                <MenuItem value={""}>N/A</MenuItem>
              </TextField>

              {/* Number of Entrees */}
              <TextField
                value={numEntrees}
                onChange={(e) => setNumEntrees(e.target.value)}
                select
                required
                label=<div style={{ display: "flex", flexDirection: "row", alignItems: "center", color: '#050312' }}>
                  <FaUserFriends className="mr-4 h-7 w-7" style={{ position: "relative", }} />
                  <span style={{ position: "relative", color: '#050312', fontFamily: 'Epilogue', fontWeight: '500', }} className="mr-2">Number of Entrees</span>
                </div>
                style={{
                  color: '#050312', fontFamily: 'Epilogue', fontWeight: '400',
                }}
              >
                {/* We should be retrieving this information from the favorites that this user has */}
                <MenuItem value={1}>1</MenuItem>
                <MenuItem value={2}>2</MenuItem>
                <MenuItem value={3}>3</MenuItem>
                <MenuItem value={4}>4</MenuItem>
                <MenuItem value={5}>5</MenuItem>
                <MenuItem value={6}>6</MenuItem>
                <MenuItem value={7}>7</MenuItem>
                <MenuItem value={8}>8</MenuItem>
                <MenuItem value={9}>9</MenuItem>
                <MenuItem value={10}>10</MenuItem>
              </TextField>

            </FormControl>
          </div>


          {/* Write-up */}
          <div className="mt-4">
            {/* <PopupWithTrigger id="popup-with-portal" buttonLabel="Allergies or dietary restrictions?" /> */}
                <AllergyPopup id="popup-with-portal" buttonLabel="Allergies or dietary restrictions?"
                setVegetarian={setVegetarian} setVegan={setVegan} setHalal={setHalal}
                setKosher={setKosher} setGluten={setGluten} setDairy={setDairy} setEggs={setEggs}
                setShellfish={setShellfish} setFish={setFish} setPeanuts={setPeanuts} setTreeNuts={setTreeNuts}
                setSoy={setSoy} setDietaryRestrictions={setDietaryRestrictions}

                vegetarian={vegetarian} vegan={vegan} halal={halal} kosher={kosher}
                gluten={gluten} dairy={dairy} eggs={eggs} shellfish={shellfish} 
                fish={fish} peanuts={peanuts} treeNuts={treeNuts} soy={soy} 
                dietaryRestrictions={dietaryRestrictions}
                />
          </div>
          {/* Button */}
          <div className="mt-4">
            <button className="bg-[#ff4700] flex items-center gap-2 text-white px-4 py-2 rounded-full m-auto my-3">Surprise Order<GiKnifeFork /></button>
          </div>
        </div>
      </div>
    </div>
  )
}
