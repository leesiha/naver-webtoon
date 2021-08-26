import { HashRouter as Router, Redirect, Route, Switch } from 'react-router-dom';
import React, { useState } from 'react';
import {Link} from "react-router-dom";
import './Home.css'

const Home = ({title, url, img, }) => {
    const date = new Date();
    const [focusedWebtoonName, setFocusedWebtoonName] = useState("");

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

        <div className="webtoon_area">
            <div className="bigimg">
                    {
                    console.log(focusedWebtoonName),
                    console.log(homeData.find((element) => element === focusedWebtoonName))
                    }
            </div>

            <div className="webtoon_lst">
                <div className="lst_area">
                    <ul className="comicList">
                        {homeData.map((item) => (
                        <li class="">
                            <a href={item.url}>
                                <img className="thumb" src={item.thumb} onMouseOver={() => {
                                    setFocusedWebtoonName(item.title)
                                }} />
                                <span className="sel_bar"/>
                                <span className="bigimg">
                                    {item.img}
                                </span>
                            </a>
                        </li>
                        ))}
                    
                    </ul>
                </div>
                <a href="javascript:void(0)" onclick="nclk_v2(event,'twt.prev')" class="btn_prev">
                    <span class="btn_prev_arr">이전</span>
                </a>
                <a href="javascript:void(0)" onclick="nclk_v2(event,'twt.next')" class="btn_next">
                    <span class="btn_next_arr">다음</span>
                </a>
            </div>

        </div>


        <h4><li><Link to="/webtoon/genre">장르별 추천 웹툰</Link></li></h4>
        <h4>베스트도전 & 도전 추천웹툰</h4>
    </div>
    );
};


export default Home;