import React, { useState } from "react";
import { Link, Route, Switch, Router } from "react-router-dom";

const Webtoon_detail = ({ webtoon, Nwebtoon }) => {
  return (
    <>
      {Navigation()}
      <div className="webtoon_spot2">
        <h3 className="sub_tit">이달의 신규 웹툰</h3>
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
      <h3>요일별 전체 웹툰</h3>
      <div className="list_area daily_all">
        <div className="mon">
          <h4>월요웹툰</h4>
          {webtoon
            .filter((element) => element.id.includes("thm*m"))
            .map((singleData) => {
              return (
                <li className="webtoon">
                  <Link to={singleData.url}>
                    <img src={singleData.img} />
                  </Link>
                  <div>{singleData.title}</div>
                </li>
              );
            })}
        </div>
        <div className="tue">
          <h4>화요웹툰</h4>
          {webtoon
            .filter((element) => element.id.includes("thm*t"))
            .map((singleData) => {
              return (
                <li className="webtoon">
                  <Link to={singleData.url}>
                    <img src={singleData.img} />
                  </Link>
                  <div>{singleData.title}</div>
                </li>
              );
            })}
        </div>
        <div className="wen">
          <h4>수요웹툰</h4>
          {webtoon
            .filter((element) => element.id.includes("thm*w"))
            .map((singleData) => {
              return (
                <li className="webtoon">
                  <Link to={singleData.url}>
                    <img src={singleData.img} />
                  </Link>
                  <div>{singleData.title}</div>
                </li>
              );
            })}
        </div>
        <div className="thu">
          <h4>목요웹툰</h4>
          {webtoon
            .filter((element) => element.id.includes("thm*T"))
            .map((singleData) => {
              return (
                <li className="webtoon">
                  <Link to={singleData.url}>
                    <img src={singleData.img} />
                  </Link>
                  <div>{singleData.title}</div>
                </li>
              );
            })}
        </div>
        <div className="fri">
          <h4>금요웹툰</h4>
          {webtoon
            .filter((element) => element.id.includes("thm*f"))
            .map((singleData) => {
              return (
                <li className="webtoon">
                  <Link to={singleData.url}>
                    <img src={singleData.img} />
                  </Link>
                  <div>{singleData.title}</div>
                </li>
              );
            })}
        </div>
        <div className="sat">
          <h4>토요웹툰</h4>
          {webtoon
            .filter((element) => element.id.includes("thm*s"))
            .map((singleData) => {
              return (
                <li className="webtoon">
                  <Link to={singleData.url}>
                    <img src={singleData.img} />
                  </Link>
                  <div>{singleData.title}</div>
                </li>
              );
            })}
        </div>
        <div className="sun">
          <h4>일요웹툰</h4>
          {webtoon
            .filter((element) => element.id.includes("thm*S"))
            .map((singleData) => {
              return (
                <li className="webtoon">
                  <Link to={singleData.url}>
                    <img src={singleData.img} />
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
        <Link to="/webtoon/Webtoon_detail">요일전체</Link>
      </li>
      <li>
        <Link to="/webtoon/Webtoon_detail/mon">월요웹툰</Link>
      </li>
      <li>
        <Link to="/webtoon/Webtoon_detail/tue">화요웹툰</Link>
      </li>
      <li>
        <Link to="/webtoon/Webtoon_detail/wed">수요웹툰</Link>
      </li>
      <li>
        <Link to="/webtoon/Webtoon_detail/thu">목요웹툰</Link>
      </li>
      <li>
        <Link to="/webtoon/Webtoon_detail/fri">금요웹툰</Link>
      </li>
      <li>
        <Link to="/webtoon/Webtoon_detail/sat">토요웹툰</Link>
      </li>
      <li>
        <Link to="/webtoon/Webtoon_detail/sun">일요웹툰</Link>
      </li>
    </ul>
  );
};

export default Webtoon_detail;
