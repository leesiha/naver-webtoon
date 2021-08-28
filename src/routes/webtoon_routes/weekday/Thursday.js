import React, { useState } from "react";
import { Link, Route, Switch, Router } from "react-router-dom";
import "routes/webtoon_routes/weekday/Weekday.css";
import "routes/Navigation.css";

const Thursday = ({ webtoon, Nwebtoon }) => {
  return (
    <>
      {Navigation()}
      <div className="webtoon_spot2">
        <h3>목요 추천 웹툰</h3>
        <ul>
          {Nwebtoon.map((singleData) => {
            return (
              <li>
                <a href={singleData.url}>
                  <img src={singleData.img} alt="thumb7" />
                  <strong>{singleData.title}</strong>
                </a>
                <p className="author">{singleData.author}</p>
                <p>{singleData.intro}</p>
              </li>
            );
          })}
        </ul>
      </div>
      <h3>목요 전체 웹툰</h3>
      <div className="list_area daily_img">
        <div className="img_list">
          {webtoon
            .filter((element) => element.id.includes("thm*T"))
            .map((singleData) => {
              return (
                <li>
                  <a href={singleData.url}>
                    <img src={singleData.img} />
                  </a>
                  <div>{singleData.title}</div>
                </li>
              );
            })}
        </div>
      </div>
    </>
  );
};

const Navigation = () => {
  return (
    <ul className="category_tab">
      <li>
        <Link to="/webtoon/weekday">요일전체</Link>
      </li>
      <li>
        <Link to="/webtoon/weekday/mon">월요웹툰</Link>
      </li>
      <li>
        <Link to="/webtoon/weekday/tue">화요웹툰</Link>
      </li>
      <li>
        <Link to="/webtoon/weekday/wed">수요웹툰</Link>
      </li>
      <li className="on">
        <Link to="/webtoon/weekday/thu">목요웹툰</Link>
      </li>
      <li>
        <Link to="/webtoon/weekday/fri">금요웹툰</Link>
      </li>
      <li>
        <Link to="/webtoon/weekday/sat">토요웹툰</Link>
      </li>
      <li>
        <Link to="/webtoon/weekday/sun">일요웹툰</Link>
      </li>
    </ul>
  );
};

export default Thursday;
