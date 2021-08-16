import React from 'react';
import {Link} from "react-router-dom";

const Challenge = () => {
    return (
    <div>Challenge
    {Navigation()}
    </div>
    );
};

const Navigation = () => (
    <nav>
        <ul>
            <li>
                <Link to="/bestChallenge">전체</Link>
            </li> 
            <li>
                <Link to="/bestChallenge/genre/episode">에피소드</Link>
            </li> 
            <li>
                <Link to="/bestChallenge/genre/omnibus">옴니버스</Link>
            </li> 
            <li>
                <Link to="/bestChallenge/genre/story">스토리</Link>
            </li> 
            <li>
                <Link to="/bestChallenge/genre/daily">일상</Link>
            </li> 
            <li>
                <Link to="/bestChallenge/genre/comic">개그</Link>
            </li> 
            <li>
                <Link to="/bestChallenge/genre/fantasy">판타지</Link>
            </li> 
            <li>
                <Link to="/bestChallenge/genre/action">액션</Link>
            </li> 
            <li>
                <Link to="/bestChallenge/genre/drama">드라마</Link>
            </li> 
            <li>
                <Link to="/bestChallenge/genre/pure">순정</Link>
            </li> 
            <li>
                <Link to="/bestChallenge/genre/sensibility">감성</Link>
            </li> 
            <li>
                <Link to="/bestChallenge/genre/thrill">스릴러</Link>
            </li> 
            <li>
                <Link to="/bestChallenge/genre/historical">시대극</Link>
            </li> 
            <li>
                <Link to="/bestChallenge/genre=sports">스포츠</Link>
            </li>
        </ul>
    </nav>
)

export default Challenge;