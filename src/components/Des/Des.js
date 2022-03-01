import React from 'react';
import BoraBora from'../../assets/borabora.jpg'
import BoraBora2 from'../../assets/borabora2.jpg'
import gold from'../../assets/gold.png'
import Maldives from'../../assets/maldives.jpg'
import Maldives2 from'../../assets/maldives2.jpg'
import Maldives3 from'../../assets/maldives3.jpg'
import Keywest from'../../assets/keywest.jpg'
import './Des.css'
import {AiOutlineSearch} from 'react-icons/ai'
// import Navbar from '../nav/Navbar';

function Des()
{
    return (
        <div className='des'>
          <div className='container'>
            <h1>Đặt tour du lịch</h1>
            <p>Khám phá những vùng đất mới</p>
            <div className='img-container'>
                <img className='span-3 image-grid-row2' src={BoraBora} alt='borabora'/>
                <img src={BoraBora2} alt='borabora'/>
               
                <img src={Maldives} alt='borabora'/>
                <img src={Maldives2} alt='borabora'/>
                <img src={Maldives3} alt='borabora'/>
                
               </div>
            </div>
            
        </div>
    )
}
export default Des;