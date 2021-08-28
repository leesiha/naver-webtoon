import React from "react";
import { Link } from "react-router-dom";
import "routes/Navigation.css";

const Navigation2 = () => (
  <nav>
    <ul className="submenu">
      <li className="Ntxt_menu_date">
        <Link to="/webtoon/weekday">요일별</Link>
      </li>
      <li className="Ntxt_menu_genre">
        <Link to="/webtoon/genre">장르별</Link>
      </li>
      <li className="Ntxt_menu_creation">
        <Link to="/webtoon/creation">작품별</Link>
      </li>
      <li className="Ntxt_menu_artist">
        <Link to="/webtoon/artist">작가별</Link>
      </li>
      <li className="Ntxt_menu_period">
        <Link to="/webtoon/period">연도별</Link>
      </li>
      <li className="Ntxt_menu_theme">
        <Link to="/webtoon/theme">테마웹툰</Link>
      </li>
      <li className="Ntxt_menu_finish">
        <Link to="/webtoon/finish">완결웹툰</Link>
      </li>
    </ul>
  </nav>
);

export default Navigation2;
