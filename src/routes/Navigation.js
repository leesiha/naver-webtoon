import React, { useEffect, useState } from "react";
import { authService } from "fbase";
import { Link } from "react-router-dom";
import "routes/Navigation.css";

function Navigation({ isLoggedIn }) {
  return (
    <div id="header_wrap">
      <ul id="header">
        <div id="gnb">
          {isLoggedIn && (
            <input
              className="logOut"
              type="submit"
              value="Log out"
              onClick={logOut}
            />
          )}
        </div>
        <div id="snb_wrap">
          <h1>
            <a
              href="https://www.naver.com"
              title="NAVER"
              className="Ntxt_naver"
            >
              NAVER
            </a>
            <a href="/index" title="만화" className="Ntxt_comic">
              만화
            </a>
            <em className="bar">|</em>
            <a
              href="https://novel.naver.com"
              title="웹소설"
              className="Ntxt_novel"
            >
              웹소설
            </a>
          </h1>
        </div>
      </ul>

      <ul className="menu">
        <li className="Ntxt_home">
          <Link to="/" replace>
            홈
          </Link>
        </li>
        <li className="Ntxt_webtoon">
          <Link to="/webtoon/weekday">웹툰</Link>
        </li>
        <li className="Ntxt_best_challenge">
          <Link to="/bestChallenge">베스트 도전</Link>
        </li>
        <li className="Ntxt_challenge_comic">
          <Link to="/challenge">도전만화</Link>
        </li>
        <li className="Ntxt_mypage">
          <Link to="/mypage">마이페이지</Link>
        </li>
      </ul>
    </div>
  );
}

const logOut = () => {
  authService.signOut();
};

export default Navigation;
