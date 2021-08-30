import React, { useState } from "react";
import { Link, Route, Switch, Router } from "react-router-dom";
import "routes/webtoon_routes/weekday/Weekday.css";
import "routes/Navigation.css";

const Wendnesday = ({ webtoon, thumb_b }) => {
  return (
    <>
      {Navigation()}
      <div className="webtoon_spot2">
        <h3>수요 추천 웹툰</h3>
        <ul>
          {thumb_b.map((singleData) => {
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
      <h3>수요 전체 웹툰</h3>
      <div className="list_area daily_img">
        <div className="img_list">
          {webtoon
            .filter((element) => element.parse.includes("thm*w"))
            .map((singleData) => {
              return (
                <li>
                  <a href={singleData.url_to_list}>
                    <img src={singleData.thumb_s} />
                  </a>
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
      <li>
        <Link to="/webtoon/weekday/mon">월요웹툰</Link>
      </li>
      <li>
        <Link to="/webtoon/weekday/tue">화요웹툰</Link>
      </li>
      <li className="on">
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

export default Wendnesday;
