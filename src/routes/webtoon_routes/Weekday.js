import React from 'react';
import {Link} from "react-router-dom";

const Weekday = ({webtoon}) => {

    const mon = webtoon.filter((element) => element.id.includes('thm*m')).map((singleData) => {
        <div>
            <a href={singleData.url}>
            <div>{singleData.title}</div>
            <img src={singleData.img}/>
            </a>
        </div>
    })
    


    return (
    <div>

    {Navigation()}
    <h3>이달의 신규 웹툰</h3>
    <h3>요일별 전체 웹툰</h3>
    {console.log(mon)}
    </div>
    );
};

const Navigation = () => (
    <nav>
        <ul className="navi">
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