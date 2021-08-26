import React, { useEffect, useState } from 'react';
import AppRouter from 'components/Router';
import { authService } from "fbase";
import axios from 'axios';
import Webtoon_data from './Webtoon_data';
import Home_data from './Home_data';


function App() {
  const [init, setInit] = useState("false");
  const [isLoggedIn, setIsLoggedIn ] = useState("false");
  const [dat1, setDat1] = useState([]);
  const [dat2, setDat2] = useState([]);
  const [focusedWebtoonName, setFocusedWebtoonName] = useState("");

  
  const getWebtoons = async () => {
    await axios
    .all([axios.get(
      "https://raw.githubusercontent.com/leesiha/naver-webtoon/main/src/webtoon_data.json"
      ), axios.get(
      "https://raw.githubusercontent.com/leesiha/naver-webtoon/main/src/home_data.json"
    )]).then(
      axios.spread((res1, res2) => {
        setDat1(res1.data);
        setDat2(res2.data);
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
      {init ? <AppRouter isLoggedIn={isLoggedIn} dat1={dat1}>
        <div className="list_area">
          {dat1.map(dat => (
            <Webtoon_data key={dat.id} id={dat.id} title={dat.title} url={dat.url} img={dat.img}/>
          ))}
        </div>

        <div className="webtoon_area">
          {dat2.map(dat => (
            <Home_data title={dat.title} url={dat.url} img={dat.img} thumb={dat.thumb} focusedWebtoonName={focusedWebtoonName} setFocusedWebtoonName={setFocusedWebtoonName}/>
          ))}
        </div>
      </AppRouter>  : "Initializing..."}
    </div>
  )
}


export default App;
