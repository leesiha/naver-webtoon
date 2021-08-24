import React from 'react';
import {Link} from "react-router-dom";

const BestChallenge = () => {
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
                <Link to="/challenge">전체</Link>
            </li> 
            <li>
                <Link to="/challenge/genre/episode">에피소드</Link>
            </li> 
            <li>
                <Link to="/challenge/genre/omnibus">옴니버스</Link>
            </li> 
            <li>
                <Link to="/challenge/genre/story">스토리</Link>
            </li> 
            <li>
                <Link to="/challenge/genre/daily">일상</Link>
            </li> 
            <li>
                <Link to="/challenge/genre/comic">개그</Link>
            </li> 
            <li>
                <Link to="/challenge/genre/fantasy">판타지</Link>
            </li> 
            <li>
                <Link to="/challenge/genre/action">액션</Link>
            </li> 
            <li>
                <Link to="/challenge/genre/drama">드라마</Link>
            </li> 
            <li>
                <Link to="/challenge/genre/pure">순정</Link>
            </li> 
            <li>
                <Link to="/challenge/genre/sensibility">감성</Link>
            </li> 
            <li>
                <Link to="/challenge/genre/thrill">스릴러</Link>
            </li> 
            <li>
                <Link to="/challenge/genre/historical">시대극</Link>
            </li> 
            <li>
                <Link to="/challenge/genre=sports">스포츠</Link>
            </li>
        </ul>
    </nav>
)

export default BestChallenge;