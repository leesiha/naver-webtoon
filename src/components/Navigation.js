import React from "react";
import {Link} from "react-router-dom";
import "./Navigation.css";

const Navigation = () => (
    <nav>
        <ul>
            <li className="title">
                <Link to="/">홈</Link>
            </li>
            <li>
                <Link to="/webtoon/weekday">웹툰</Link>
            </li>
            <li>
                <Link to="/bestChallenge">베스트 도전</Link>
            </li>
            <li>
                <Link to="/challenge">도전 만화</Link>
            </li>
            <li>
                <Link to="/mypage">마이페이지</Link>
            </li>
        </ul>
    </nav>
)

export default Navigation;