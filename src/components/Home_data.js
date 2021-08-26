import React from "react";


function Home_data({ title, img, thumb, url, focusedWebtoonName, setFocusedWebtoonName}) {

  return (
    <div className="webtoon_area">
        <div className="bigimg">
        <a href={url} className="_bigimgLink">
        <img src={img} className="bigthumb"/>
        </a>
        </div>
        <div className="webtoon_lst">
            <div className="lst_area">
                <ul className="comicList">
                <img src={thumb} onMouseUp={() => {
                setFocusedWebtoonName(title);
              }}/>
                <span className="sel_bar"></span>
                </ul>
            </div>
        </div>
    </div>
  );
}


export default Home_data;
