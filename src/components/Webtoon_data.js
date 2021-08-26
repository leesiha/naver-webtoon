import React from "react";
import "./Webtoon_data.css";

// 여기서 title, img, url을 props로 요구하므로, 부모 컴포넌트에서도 해당 props를 전달해야 합니다.
function Webtoon_data({ title, img, url, key }) {
  return (
    <div>
      <a href={url}>
        <img src={img} />
        <h5>{title}</h5>
      </a>
    </div>
  );
}




export default Webtoon_data;
