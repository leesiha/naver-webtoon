import React from "react";
import { Link } from "react-router-dom";
import "routes/webtoon_routes/weekday/Weekday.css";
import "routes/Navigation.css";

const Genre = ({ webtoon, finish }) => {
  webtoon = webtoon.filter((element) => element.genre.includes("에피소드"));
  finish = finish.filter((element) => element.genre.includes("에피소드"));
  let arr = Object.keys(webtoon).length + Object.keys(finish).length;
  return (
    <>
      {Navigation()}
      <div className="view_type">
        <h3 className="sub_tit">
          에피소드 웹툰
          {/* <em>총 {arr}개</em> */}
        </h3>
      </div>
      <div className="list_area">
        <div className="img_list">
          {webtoon.map((singleData) => {
            return (
              <li>
                <Link to={singleData.url_to_list}>
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
          {finish.map((singleData) => {
            return (
              <li>
                <Link to={singleData.url_to_list}>
                  <a>
                    <img src={singleData.thumb_s} />
                    <img className="finish" src={singleData.finish_img} />
                  </a>
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

const Navigation = () => (
  <div className="snb">
    <ul className="spot">
      <li>
        <Link to="/webtoon/genre/episode">에피소드</Link>
      </li>
      <li>
        <Link to="/webtoon/genre/omnibus">옴니버스</Link>
      </li>
      <li>
        <Link to="/webtoon/genre/story">스토리</Link>
        <span className="bar"></span>
      </li>
      <li>
        <Link to="/webtoon/genre/daily">일상</Link>
      </li>
      <li>
        <Link to="/webtoon/genre/comic">개그</Link>
      </li>
      <li>
        <Link to="/webtoon/genre/fantasy">판타지</Link>
      </li>
      <li>
        <Link to="/webtoon/genre/action">액션</Link>
      </li>
      <li>
        <Link to="/webtoon/genre/drama">드라마</Link>
      </li>
      <li>
        <Link to="/webtoon/genre/pure">순정</Link>
      </li>
      <li>
        <Link to="/webtoon/genre/sensibility">감성</Link>
      </li>
      <li>
        <Link to="/webtoon/genre/thrill">스릴러</Link>
      </li>
      <li>
        <Link to="/webtoon/genre/historical">시대극</Link>
      </li>
      <li>
        <Link to="/webtoon/genre/sports">스포츠</Link>
      </li>
    </ul>
  </div>
);

export default Genre;
