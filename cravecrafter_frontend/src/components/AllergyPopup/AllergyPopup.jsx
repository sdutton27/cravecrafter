import React, { useState, useEffect } from 'react'

import { Input } from '@mui/base/Input';
import Checkbox from '@mui/material/Checkbox';
import { Unstable_Popup as BasePopup } from '@mui/base/Unstable_Popup';

import { ClickAwayListener } from '@mui/base/ClickAwayListener';

export default function AllergyPopup(props) {
  
    const [anchor, setAnchor] = useState(null);
    const [open, setOpen] = useState(false);
    // For clicking away
    const handleClick = (event) => {
      setOpen((prev) => !prev);
      setAnchor(anchor ? null : event.currentTarget);
    };
    const handleClickAway = () => {
      setOpen(false);
    };

    // useEffect(()=>{
    //     console.log(props.vegetarian)
    //   },[props.vegetarian]);

      const clickVegetarian = () => {
        props.setVegetarian(prev=>!prev);
        console.log("changing vegetarian to " + props.vegetarian)
      }

    return (
    <div style={{ cursor: "pointer" }}>
        {/* Label for popup */}
        <p aria-describedby={props.id} onClick={handleClick}
          className="text-xs text-[#ff4700]">
          {props.buttonLabel}
        </p>
        <BasePopup open={open}
          anchor={anchor}
          placement="top" style={{ zIndex: "1" }}>
          {/* <Input aria-label="Demo input" placeholder="List any allergies or dietary restrictions here.">
          </Input> */}
          <ClickAwayListener onClickAway={handleClickAway}>
            {/* Popup window */}
            <div className="w-80 h-84 shadow-2xl rounded-xl bg-white flex flex-col justify-content items-center epilogue">
              <span className="kanit mt-2">Allergies/Dietary Restrictions</span>
              {/* List of allergies */}
              <div className="grid grid-cols-2 gap-x-10 mt-2">
                {/* Vegetarian */}
                <div>
                  {/* <input type="checkbox" checked={props.vegetarian} onChange={clickVegetarian} */}
                  <Checkbox aria-label="Demo input" checked={props.vegetarian} onChange={()=>props.setVegetarian(prev=>!prev)} />
                  <span className="text-sm font-light">Vegetarian</span>
                </div>
                {/* Vegan */}
                <div>
                  <Checkbox aria-label="Demo input" checked={props.vegan} onChange={()=>props.setVegan(prev=>!prev)}/>
                  <span className="text-sm font-light">Vegan</span>
                </div>
                {/* Halal */}
                <div >
                  <Checkbox aria-label="Demo input" checked={props.halal} onChange={()=>props.setHalal(prev=>!prev)} />
                  <span className="text-sm font-light">Halal</span>
                </div>
                {/* Kosher */}
                <div>
                  <Checkbox aria-label="Demo input" checked={props.kosher} onChange={()=>props.setKosher(prev=>!prev)}/>
                  <span className="text-sm font-light">Kosher</span>
                </div>
                {/* Gluten */}
                <div>
                  <Checkbox aria-label="Demo input" checked={props.gluten} onChange={()=>props.setGluten(prev=>!prev)}/>
                  <span className="text-sm font-light">Gluten</span>
                </div>
                {/* Dairy */}
                <div>
                  <Checkbox aria-label="Demo input" checked={props.dairy} onChange={()=>props.setDairy(prev=>!prev)}/>
                  <span className="text-sm font-light">Dairy</span>
                </div>
                {/* Eggs */}
                <div>
                  <Checkbox aria-label="Demo input" checked={props.eggs} onChange={()=>props.setEggs(prev=>!prev)}/>
                  <span className="text-sm font-light">Eggs</span>
                </div>
                {/* Shellfish */}
                <div>
                  <Checkbox aria-label="Demo input" checked={props.shellfish} onChange={()=>props.setShellfish(prev=>!prev)}/>
                  <span className="text-sm font-light">Shellfish</span>
                </div>
                {/* Fish */}
                <div>
                  <Checkbox aria-label="Demo input" checked={props.fish} onChange={()=>props.setFish(prev=>!prev)}/>
                  <span className="text-sm font-light">Fish</span>
                </div>
                {/* Peanuts */}
                <div>
                  <Checkbox aria-label="Demo input" checked={props.peanuts} onChange={()=>props.setPeanuts(prev=>!prev)}/>
                  <span className="text-sm font-light">Peanuts</span>
                </div>
                {/* Tree Nuts */}
                <div>
                  <Checkbox aria-label="Demo input" checked={props.treeNuts} onChange={()=>props.setTreeNuts(prev=>!prev)}/>
                  <span className="text-sm font-light">Tree Nuts</span>
                </div>
                {/* Soy */}
                <div>
                  <Checkbox aria-label="Demo input" checked={props.soy} onChange={()=>props.setSoy(prev=>!prev)}/>
                  <span className="text-sm font-light">Soy</span>
                </div>
              </div>
              <div className="flex flex-row mb-4">
              <span className="mr-2 text-sm font-light">Other:</span>
              <Input aria-label="Demo input" placeholder="" className="text-sm font-light" onChange={(e)=>props.setDieraryRestrictions(e.target.value)} style={{border: "1px solid #434D5B"}}>
              </Input>
              </div>
            </div>
          </ClickAwayListener>
        </BasePopup>
      </div>
    );
}
