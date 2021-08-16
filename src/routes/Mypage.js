import React from 'react';
import {Link} from "react-router-dom";

const Mypage = (isLoggedIn) => {
    return (
    <div>Mypage
    {Navigation()}
    </div>
    );
};

const Navigation = () => (
    <nav>
        <ul>
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
    </nav>
)

export default Mypage;