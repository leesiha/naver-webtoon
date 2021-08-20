import Webtoon_data from 'components/Webtoon_data';
import React from 'react';
import {Link} from "react-router-dom";

const Weekday = () => {
    return (
    <div>Weekday
    {Navigation()}
    </div>
    );
};

const Navigation = () => (
    <nav>
        <ul>
            <li>
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
    </nav>
)


export default Weekday;