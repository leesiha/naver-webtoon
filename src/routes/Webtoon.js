import React from 'react';
import {Link} from "react-router-dom";

const Webtoon = () => {
    return (
    <div>
    {Navigation()}
    </div> 
    )
}

const Navigation = () => (
    <nav>
        <ul className="navi">
            <li className="weekday">
                <Link to="/webtoon/weekday">요일별</Link>
            </li>
            <li className="genre">
                <Link to="/webtoon/genre">장르별</Link>
            </li>
            <li className="creation">
                <Link to="/webtoon/creation">작품별</Link>
            </li>
            <li className="artist">
                <Link to="/webtoon/artist">작가별</Link>
            </li>
            <li>
                <Link to="/webtoon/period">연도별</Link>
            </li>
            <li>
                <Link to="/webtoon/theme">테마웹툰</Link>
            </li>
            <li>
                <Link to="/webtoon/finish">완결웹툰</Link>
            </li>
        </ul>
    </nav>
)

export default Webtoon;