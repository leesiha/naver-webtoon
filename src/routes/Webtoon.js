import React, { useEffect, useState } from 'react';
import {Link} from "react-router-dom";
import axios from 'axios';

const Webtoon = () => {
    const [webtoons] = useState();
    return (
    <div>Webtoon
    {Navigation()}
    console.log({getWebtoon()});
    </div>
    );
};

const Navigation = () => (
    <nav>
        <ul>
            <li>
                <Link to="/webtoon/weekday">요일별</Link>
            </li>
            <li>
                <Link to="/webtoon/genre">장르별</Link>
            </li>
            <li>
                <Link to="/webtoon/creation">작품별</Link>
            </li>
            <li>
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

const getWebtoon = async () => { 
    try { 
        return await axios.get("/webtoon_data.json");
    }catch (error) {
        console.error(error);
    }
};






export default Webtoon;