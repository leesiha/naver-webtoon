import { HashRouter as Router, Redirect, Route, Switch } from 'react-router-dom';
import React from 'react';
import {Link} from "react-router-dom";

const Home = () => {
    return (
    <div>Home
    {Navigation()}
    </div>
    );
};

const Navigation = () => (
    <nav>
        <ul>
            <li>
                <Link to="/">오늘의 웹툰</Link>
            </li>
            <li>
                <Link to="/webtoon/genre">장르별 추천 웹툰</Link>
            </li>
            <li>
                <Link to="/">베스트도전 & 도전 추천웹툰</Link>
            </li>
        </ul>
    </nav>
)


export default Home;