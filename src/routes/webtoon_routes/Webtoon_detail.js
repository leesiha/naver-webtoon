import React, { useState } from "react";
import { Link, Route, Switch, Router } from "react-router-dom";

const Webtoon_detail = ({ detail, webtoon }) => {
  return (
    <div>
      {Navigation()}
      <>
        {(detail, webtoon).map((singleData, singleData2) => {
          return (
            <div className="comicinfo">
              <div className="thumb">
                <img src={singleData.thumb} />
              </div>
              <div className="detail">
                <h2>
                  {singleData2.title}
                  <span className="wrt_nm">{singleData.author}</span>
                  <p>{singleData.intro}</p>
                  <p className="detail_info">
                    <span className="genre">{singleData.genre}</span>
                    <span className="age">{singleData.age}</span>
                  </p>
                </h2>
              </div>
            </div>
          );
        })}
      </>
    </div>
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
