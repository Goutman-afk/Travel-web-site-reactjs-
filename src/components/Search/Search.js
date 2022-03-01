import React from "react";
import './Search.css';
import gold from'../../assets/gold.png'

function Search() {
  return (
    <div className="search">
      <div className="container"> 
      <div className="left"> 
        <h1>Đặt chỗ nào anh bạn</h1>
        
        <p> Nhóm này đã bị điều tra bởi các cơ quan trực thuộc Bộ Công an (và/hoặc các tổ chức chính trị tương tự phục vụ cho nhà nước CHXHCNVN). Cơ quan điều tra (CQĐT) khẳng định các thành viên trong này liên quan tới nhóm hoặc những cá nhân khác trong đây. CQĐT biết rõ tại sao các thành viên lại có mặt ở đây vào thời điểm này, tài khoản của họ không được thêm bởi một bên thứ ba mà chính họ tự tham gia vào đây. Các nhân viên của CQĐT cũng xin khẳng định rằng những hành động chống phá Đảng và Nhà nước đã được thực hiện bởi các thành viên trong nhóm này. Nhà nước CHXHCNVN cũng không quên khẳng định quyết tâm chiến thắng đại dịch Covid-19, nhấn mạnh chủ quyền không thể tranh cãi với quần đảo Hoàng Sa và Trường Sa, cũng như tính chính nghĩa của cuộc chiến giải phóng người dân Campuchia khỏi thảm họa diệt chủng Khmer Đỏ.  </p>
            <div className="search-column-2"> 
            <div className="box"> 
                    <div>
                        <img src={gold} style={{ marginRight: '1rem'}}/>  
                    </div>
                    <div> 
                        <h3> Hàng đầu Việt Nam</h3>
                        <p> với kinh nghiệm hơn 20 năm </p>
                    </div>
             </div>

            <div className="box"> 
                    <div> 
                        <h3> Mọi thứ chỉ với cú click chuột</h3>
                        <p> Thủ tục nhanh chóng</p>
                        <button> đăng kí ngay </button>


                    </div>
                 
            </div>
         </div>
         </div>
     
     
          <div className="right">  
            <div className="promo"> 
                <h4 className="save"> nhận voucher giảm giá </h4>
                <p className="timer">  dành riêng cho khách đầu tiên</p>
                <p className="offer">  Đăng kí ngay</p>
             </div>
                <form> 
                    <div className="input-wrap"> 
                     <label> Địa điểm </label>
                     <select> 
                            <option value="1"> Hà Nội </option>
                            <option value="1"> Hà Nội </option>
                            <option value="1"> Hà Nội </option>
                            <option value="1"> Hà Nội </option>
                            <option value="1"> Hà Nội </option>
                     </select>
                    </div>
                    <div className="date"> 
                            <div className="input-wrap"> 
                            <label> Check-In </label>
                            <input type="date" />
                             </div> 
                             <div className="input-wrap"> 
                            <label> Check-Out</label>
                            <input type="date" />
                             </div> 
                    
                    </div>
                    <button> ĐĂNG KÍ NGAY </button>
                </form>
            
           </div>
      </div>
    </div>
  );
}
export default Search;