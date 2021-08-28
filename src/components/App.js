import React, { useEffect, useState } from 'react';
import AppRouter from 'components/Router';
import { authService } from "fbase";
import axios from 'axios';
import "routes/Navigation.css";




function App() {
  const [init, setInit] = useState("false");
  const [isLoggedIn, setIsLoggedIn ] = useState("false");
  const [daily_all, setDaily_all] = useState([]);
  const [webtoon_spot, setWebtoon_spot] = useState([]);
  const [isOn, setOn] = useState("false");


  
  const getWebtoons = async () => {
    await axios
    .all([axios.get(
      "https://raw.githubusercontent.com/leesiha/naver-webtoon/main/list_area%20daily_all.json"
      ), axios.get(
      "https://raw.githubusercontent.com/leesiha/naver-webtoon/main/webtoon_spot2.json"
    )]).then(
      axios.spread((res1, res2) => {
        setDaily_all(res1.data);
        setWebtoon_spot(res2.data);
      })
    )
  };
  
  useEffect( () => {
    getWebtoons();

    authService.onAuthStateChanged((user) => {
      if(user) {
        setIsLoggedIn(true);
      }else{
        setIsLoggedIn(false);
      }
      setInit(true);
    });
  }, []);
  
  const logOut = () => {
    setIsLoggedIn((prev) => !prev);
  }

  const handleOn = () => {
    setOn("true");
};

  return (
    <div id="wrap" className="end_page">
      {isLoggedIn && <input type="submit" value="Log out" onClick={logOut}/>}
      {init ? <AppRouter isLoggedIn={isLoggedIn} daily_all={daily_all} webtoon_spot={webtoon_spot}>
      </AppRouter>  : "Initializing..."}
    </div>
  )
}


export default App;
