import React from "react";
import { Link } from "react-router-dom";
import "routes/Navigation.css";

const Mypage = (isLoggedIn) => {
  return (
    <div id="container">
      <div id="content">
        {Navigation()}
        <div className="my_area">
          <div className="section">
            <div className="ifr">
              <h3 className="sub_tit">관심웹툰</h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const Navigation = () => (
  <div className="snb">
    <ul className="my">
      <li>
        <Link to="/mypage">관심웹툰</Link>
      </li>
      <li>
        <Link to="/mypage/favorite">책갈피</Link>
      </li>
      <li>
        <Link to="/mypage/myActivity">내 작품</Link>
      </li>
      <li>
        <Link to="/mypage/penalty">이용제한 내역</Link>
      </li>
    </ul>
  </div>
);

export default Mypage;
