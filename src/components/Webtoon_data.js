import React from 'react';

function Webtoon_data({title, img, url}) {
    return (
        <div>
        <a href={url}>
        <img src={img}/>
        <h5>{title}</h5>
        </a>
        </div>
    );
}


export default Webtoon_data;