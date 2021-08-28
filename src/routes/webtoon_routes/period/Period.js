import React from "react";
import { Link } from "react-router-dom";
import "routes/Navigation.css";

const Period = () => {
  return <>{Navigation()}</>;
};

const Navigation = () => (
  <ul className="category_tab_year">
    <li>
      <Link to="/webtoon/period">2021</Link>
    </li>
    <li>
      <Link to="/webtoon/period/2020">2020</Link>
    </li>
    <li>
      <Link to="/webtoon/period/2019">2019</Link>
    </li>
    <li>
      <Link to="/webtoon/period/2018">2018</Link>
    </li>
    <li>
      <Link to="/webtoon/period/2017">2017</Link>
    </li>
    <li>
      <Link to="/webtoon/period/2016">2016</Link>
    </li>
    <li>
      <Link to="/webtoon/period/2015">2015</Link>
    </li>
    <li>
      <Link to="/webtoon/period/2014">2014</Link>
    </li>
    <li>
      <Link to="/webtoon/period/2013">2013</Link>
    </li>
    <li>
      <Link to="/webtoon/period/2012">2012</Link>
    </li>
    <li>
      <Link to="/webtoon/period/2011">2011</Link>
    </li>
    <li>
      <Link to="/webtoon/period/2010">2010</Link>
    </li>
    <li>
      <Link to="/webtoon/period/2009">2009</Link>
    </li>
    <li>
      <Link to="/webtoon/period/2008">2008</Link>
    </li>
    <li>
      <Link to="/webtoon/period/2007">2007</Link>
    </li>
    <li>
      <Link to="/webtoon/period/2006">2006</Link>
    </li>
    <li>
      <Link to="/webtoon/period/2005">2005</Link>
    </li>
  </ul>
);

export default Period;
