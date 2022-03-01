import React from "react";
import "./select.css";
import BoraBora from'../../assets/borabora.jpg'
import BoraBora2 from'../../assets/borabora2.jpg'
import gold from'../../assets/gold.png'
import Maldives from'../../assets/maldives.jpg'
import Maldives2 from'../../assets/maldives2.jpg'
import Maldives3 from'../../assets/maldives3.jpg'
import Keywest from'../../assets/keywest.jpg'

import SelectImg from "../SelectImg/selectImg";
function Select() {
  return (
    <div className="select">
        <div className='container'>
            <SelectImg bgImg ={BoraBora} text ='BoraBora'/>
            <SelectImg bgImg ={BoraBora2} text ='BoraBora'/>
            <SelectImg bgImg ={Maldives} text ='BoraBora'/>
            <SelectImg bgImg ={Maldives2} text ='BoraBora'/>
            <SelectImg bgImg ={Maldives3} text ='BoraBora'/>
            <SelectImg bgImg ={Keywest} text ='BoraBora'/>
        </div>
     
      
    </div>
  );
}
export default Select;