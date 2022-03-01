import React from 'react';

import './HeroStyles.css'
import {AiOutlineSearch} from 'react-icons/ai'
// import Navbar from '../nav/Navbar';
import Video from '../../assets/maldivesVideo.mp4'
function Hero()
{
    return (
        <div className='hero'>
            <video autoPlay loop id ='video'>
                <source src={Video} type='video/mp4' />
            </video>
            <div className='overlay'>
             <div className='content'>
                    <h1>Dịch vụ du lịch hàng đầu việt nam</h1>
                    <h2> Đặt lịch ngay nào</h2>
                <form className='form'>
                    <div>
                    <input type='text' placeholder='Nhập địa điểm cần tìm'/>
                    
                    </div>
                    <div>
                    <button><AiOutlineSearch className='icon'/></button>
                    </div>
                    </form> 
             </div>

            </div>
            
        </div>
    )
}
export default Hero;