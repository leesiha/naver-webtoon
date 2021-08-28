import { HashRouter as Router, Redirect, Route, Switch } from 'react-router-dom';
import React, { useState } from 'react';
import {Link} from "react-router-dom";
import './Home.css'

const Home = () => {
    const date = new Date();

    return (
    <div>
        <h2>오늘의 웹툰</h2>
        <p>{date.getMonth()+1}월 {date.getDate()}일 {
        date.getDay() === 0 
        ? "일" : date.getDay() === 1 
        ? "월" : date.getDay() === 2
        ? "화" : date.getDay() === 3
        ? "수" : date.getDay() === 4
        ? "목" : date.getDay() === 5
        ? "금" : "토"
        }요일</p>

        <h4><li><Link to="/webtoon/genre">장르별 추천 웹툰</Link></li></h4>
        <h4>베스트도전 & 도전 추천웹툰</h4>
    </div>
    );
};


export default Home;