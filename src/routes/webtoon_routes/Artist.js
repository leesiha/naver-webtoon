import React from 'react';
import {Link} from "react-router-dom";

const Artist = () => {
    return (
    <div>
    {Navigation()}
    </div>
    );
};

const Navigation = () => (
    <nav>
        <ul className="navi">
            <li>
                <Link to="/webtoon/artist">전체</Link>
            </li> 
            <li>
                <Link to="/webtoon/artist/가">ㄱ</Link>
            </li> 
            <li>
                <Link to="/webtoon/artist/나">ㄴ</Link>
            </li> 
            <li>
                <Link to="/webtoon/artist/다">ㄷ</Link>
            </li> 
            <li>
                <Link to="/webtoon/artist/라">ㄹ</Link>
            </li> 
            <li>
                <Link to="/webtoon/artist/마">ㅁ</Link>
            </li> 
            <li>
                <Link to="/webtoon/artist/바">ㅂ</Link>
            </li> 
            <li>
                <Link to="/webtoon/artist/사">ㅅ</Link>
            </li> 
            <li>
                <Link to="/webtoon/artist/아">ㅇ</Link>
            </li> 
            <li>
                <Link to="/webtoon/artist/자">ㅈ</Link>
            </li> 
            <li>
                <Link to="/webtoon/artist/차">ㅊ</Link>
            </li> 
            <li>
                <Link to="/webtoon/artist/카">ㅋ</Link>
            </li> 
            <li>
                <Link to="/webtoon/artist/타">ㅌ</Link>
            </li> 
            <li>
                <Link to="/webtoon/artist/파">ㅍ</Link>
            </li> 
            <li>
                <Link to="/webtoon/artist/하">ㅎ</Link>
            </li> 
            <li>
                <Link to="/webtoon/artist/A">A-Z</Link>
            </li> 
            <li>
                <Link to="/webtoon/artist/1">0-9</Link>
            </li>
        </ul>
    </nav>
)

export default Artist;