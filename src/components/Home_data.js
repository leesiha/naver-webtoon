import React from "react";
import "./Home_data.css";


function Home_data({ title, img, thumb, url}) {
  return (
    <div className="webtoon_area">
        <div className="bigimg">
        <a href={url} className="_bigimgLink">
        <img src={img} className="bigthumb" />
        </a>
        </div>
        <div className="webtoon_lst">
            <div className="lst_area">
                <ul id="comicList">
                <img src={thumb} />
                <span className="sel_bar"></span>
                </ul>
            </div>
        </div>
    </div>
  );
}


export default Home_data;
