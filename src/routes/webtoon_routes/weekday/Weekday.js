import React, { useState } from "react";
import { Link, Route, Switch, Router } from "react-router-dom";
import "routes/webtoon_routes/weekday/Weekday.css";
import "routes/Navigation.css";

const Weekday = ({ webtoon, Nwebtoon, detail }) => {
  return (
    <>
      {Navigation()}
      <div className="webtoon_spot2">
        <h3 className="sub_tit">이달의 신규 웹툰</h3>
        <ul>
          {Nwebtoon.map((singleData) => {
            return (
              <li>
                <Link to={singleData.url_to_list}>
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
      <h3>요일별 전체 웹툰</h3>
      <div className="list_area daily_all">
        <div className="mon">
          <h4>월요웹툰</h4>
          {webtoon
            .filter((element) => element.parse.includes("thm*m"))
            .map((singleData) => {
              return (
                <li className="webtoon">
                  <Link to={singleData.url_to_list}>
                    <img src={singleData.thumb_s} />
                  </Link>
                  <div>{singleData.title}</div>
                </li>
              );
            })}
        </div>
        <div className="tue">
          <h4>화요웹툰</h4>
          {webtoon
            .filter((element) => element.parse.includes("thm*t"))
            .map((singleData) => {
              return (
                <li className="webtoon">
                  <Link to={singleData.url_to_list}>
                    <img src={singleData.thumb_s} />
                  </Link>
                  <div>{singleData.title}</div>
                </li>
              );
            })}
        </div>
        <div className="wen">
          <h4>수요웹툰</h4>
          {webtoon
            .filter((element) => element.parse.includes("thm*w"))
            .map((singleData) => {
              return (
                <li className="webtoon">
                  <Link to={singleData.url_to_list}>
                    <img src={singleData.thumb_s} />
                  </Link>
                  <div>{singleData.title}</div>
                </li>
              );
            })}
        </div>
        <div className="thu">
          <h4>목요웹툰</h4>
          {webtoon
            .filter((element) => element.parse.includes("thm*T"))
            .map((singleData) => {
              return (
                <li className="webtoon">
                  <Link to={singleData.url_to_list}>
                    <img src={singleData.thumb_s} />
                  </Link>
                  <div>{singleData.title}</div>
                </li>
              );
            })}
        </div>
        <div className="fri">
          <h4>금요웹툰</h4>
          {webtoon
            .filter((element) => element.parse.includes("thm*f"))
            .map((singleData) => {
              return (
                <li className="webtoon">
                  <Link to={singleData.url_to_list}>
                    <img src={singleData.thumb_s} />
                  </Link>
                  <div>{singleData.title}</div>
                </li>
              );
            })}
        </div>
        <div className="sat">
          <h4>토요웹툰</h4>
          {webtoon
            .filter((element) => element.parse.includes("thm*s"))
            .map((singleData) => {
              return (
                <li className="webtoon">
                  <Link to={singleData.url_to_list}>
                    <img src={singleData.thumb_s} />
                  </Link>
                  <div>{singleData.title}</div>
                </li>
              );
            })}
        </div>
        <div className="sun">
          <h4>일요웹툰</h4>
          {webtoon
            .filter((element) => element.parse.includes("thm*S"))
            .map((singleData) => {
              return (
                <li className="webtoon">
                  <Link to={singleData.url_to_list}>
                    <img src={singleData.thumb_s} />
                  </Link>
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
      <li className="on">
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

export default Weekday;
