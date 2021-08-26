import React, { useEffect, useState } from 'react';
import AppRouter from 'components/Router';
import { authService } from "fbase";
import axios from 'axios';
import Webtoon_data from './Webtoon_data';
import Home_data from './Home_data';


function App() {
  const [init, setInit] = useState("false");
  const [isLoggedIn, setIsLoggedIn ] = useState("false");
  const [daily_all, setDaily_all] = useState([]);
  const [webtoon_spot, setWebtoon_spot] = useState([]);
  const [focusedWebtoonName, setFocusedWebtoonName] = useState("");

  
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
  }, [getWebtoons]);
  
  const logOut = () => {
    setIsLoggedIn((prev) => !prev);
  }

  return (
    <div>
      {isLoggedIn && <input type="submit" value="Log out" onClick={logOut}/>}
      {init ? <AppRouter isLoggedIn={isLoggedIn} daily_all={daily_all} webtoon_spot={webtoon_spot}>
      </AppRouter>  : "Initializing..."}
    </div>
  )
}


export default App;
