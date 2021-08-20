import React from 'react';
import {Link} from "react-router-dom";

const Genre = () => {
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
                <Link to="/webtoon/genre/episode">에피소드</Link>
            </li> 
            <li>
                <Link to="/webtoon/genre/omnibus">옴니버스</Link>
            </li> 
            <li>
                <Link to="/webtoon/genre/story">스토리</Link>
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
    </nav>
)

export default Genre;