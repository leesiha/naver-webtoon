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

  const getWebtoons = async () => {
    await axios
    .all([axios.get(
      "https://raw.githubusercontent.com/leesiha/naver-webtoon/main/webtoon_data.json"
    ), axios.get(
      "https://raw.githubusercontent.com/leesiha/naver-webtoon/main/home_data.json"
    )]).then(
      axios.spread((res1, res2) => {
        setDat1(res1.data);
        setDat2(res2.data);
      })
    )
  };

  const logOut = () => {
    setIsLoggedIn((prev) => !prev);
  }

  return (
    <div>
      {isLoggedIn && <input type="submit" value="Log out" onClick={logOut}/>}
      {init ? <AppRouter isLoggedIn={isLoggedIn}>
        {dat1.map(dat => (
          <Webtoon_data key={dat.id} id={dat.id} title={dat.title} url={dat.url} img={dat.img}/>
        ))}
        {dat2.map(dat => (
          <Home_data title={dat.title} img={dat.img} thumb={dat.thumb} url={dat.url} />
        ))}
      </AppRouter>  : "Initializing..."}
    </div>
  )
}


export default App;
