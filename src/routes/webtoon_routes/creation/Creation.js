import React from "react";
import { Link } from "react-router-dom";
import "routes/Navigation.css";

const Creation = () => {
  return <>{Navigation()}</>;
};

const Navigation = () => (
  <ul className="category_tab">
    <li>
      <Link to="/webtoon/creation">전체</Link>
    </li>
    <li>
      <Link to="/webtoon/creation/가">ㄱ</Link>
    </li>
    <li>
      <Link to="/webtoon/creation/나">ㄴ</Link>
    </li>
    <li>
      <Link to="/webtoon/creation/다">ㄷ</Link>
    </li>
    <li>
      <Link to="/webtoon/creation/라">ㄹ</Link>
    </li>
    <li>
      <Link to="/webtoon/creation/마">ㅁ</Link>
    </li>
    <li>
      <Link to="/webtoon/creation/바">ㅂ</Link>
    </li>
    <li>
      <Link to="/webtoon/creation/사">ㅅ</Link>
    </li>
    <li>
      <Link to="/webtoon/creation/아">ㅇ</Link>
    </li>
    <li>
      <Link to="/webtoon/creation/자">ㅈ</Link>
    </li>
    <li>
      <Link to="/webtoon/creation/차">ㅊ</Link>
    </li>
    <li>
      <Link to="/webtoon/creation/카">ㅋ</Link>
    </li>
    <li>
      <Link to="/webtoon/creation/타">ㅌ</Link>
    </li>
    <li>
      <Link to="/webtoon/creation/파">ㅍ</Link>
    </li>
    <li>
      <Link to="/webtoon/creation/하">ㅎ</Link>
    </li>
    <li>
      <Link to="/webtoon/creation/A">A-Z</Link>
    </li>
    <li>
      <Link to="/webtoon/creation/1">0-9</Link>
    </li>
  </ul>
);

export default Creation;
