import React from "react";
import "./selectImg.css";
import BoraBora from'../../assets/borabora.jpg'
function SelectImg( { bgImg, text}) {
  return (
    <div className="select-location">
      <img src={bgImg}/>
      <div className="overlay">
          <p> {text}</p>
           </div>
    </div>
  );
}
export default SelectImg;