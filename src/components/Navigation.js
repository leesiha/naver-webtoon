import React from "react";
import {Link} from "react-router-dom";
import "./Navigation.css";

const Navigation = () => (
    <nav>
        <div className="header">
            <a href="https://www.naver.com" title="NAVER" className="Ntxt_naver">NAVER</a>
            <a href="/index" title="만화" className="Ntxt_comic">만화</a>
            <em className="bar">|</em>
            <a href="https://novel.naver.com" title="웹소설" className="Ntxt_novel">웹소설</a>
        </div>
        <ul className="navi">
            <li className="home">
                <Link to="/">홈</Link>
            </li>
            <li className="weekday">
                <Link to="/webtoon/weekday">웹툰</Link>
            </li>
            <li className="bestChallenge">
                <Link to="/bestChallenge">베스트 도전</Link>
            </li>
            <li className="challenge">
                <Link to="/challenge">도전만화</Link>
            </li>
            <li className="mypage">
                <Link to="/mypage">마이페이지</Link>
            </li>
        </ul>
    </nav>
)

export default Navigation;