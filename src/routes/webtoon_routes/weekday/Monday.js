import React, { useState } from "react";
import { Link, Route, Switch, Router } from "react-router-dom";
import "routes/webtoon_routes/weekday/Weekday.css";
import "routes/Navigation.css";

const Monday = ({ webtoon, Nwebtoon }) => {
  const date = new Date();
  return (
    <>
      {Navigation()}
      <div className="webtoon_spot2">
        <h3>
          월요 추천 웹툰
          <p>
            UPDATE : {date.getFullYear()}.{date.getMonth() + 1}.{date.getDate()}{" "}
          </p>
        </h3>
        <ul>
          {Nwebtoon.map((singleData) => {
            return (
              <li>
                <Link to={singleData.url}>
                  <img src={singleData.img} alt="thumb7" />
                  <strong>{singleData.title}</strong>
                </Link>
                <p className="author">{singleData.author}</p>
                <p>{singleData.intro}</p>
              </li>
            );
          })}
        </ul>
      </div>
      <h3>월요 전체 웹툰</h3>
      <div className="list_area daily_img">
        <div className="img_list">
          {webtoon
            .filter((element) => element.parse.includes("thm*m"))
            .map((singleData) => {
              return (
                <li>
                  <Link to={singleData.url}>
                    <img src={singleData.thumb_s} />
                  </Link>
                  <dl>
                    <dt>
                      <Link>{singleData.title}</Link>
                    </dt>
                    <dd className="desc">
                      <Link>{singleData.author}</Link>
                    </dd>
                    <dd className="more">
                      <Link>전체보기</Link>
                    </dd>
                  </dl>
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
      <li className="on">
        <Link to="/webtoon/weekday/mon">월요웹툰</Link>
      </li>
      <li>
        <Link to="/webtoon/weekday/tue">화요웹툰</Link>
      </li>
      <li>
        <Link to="/webtoon/weekday/wed">수요웹툰</Link>
      </li>
      <li>
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

export default Monday;
