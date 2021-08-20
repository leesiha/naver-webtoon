import React, { useEffect, useState } from 'react';
import AppRouter from 'components/Router';
import { authService } from "fbase";
import axios from 'axios';
import Webtoon_data from './Webtoon_data';


function App() {
  const [init, setInit] = useState("false");
  const [isLoggedIn, setIsLoggedIn ] = useState("false");
  const [Dat, setDat] = useState([]);

  useEffect( () => {
    authService.onAuthStateChanged((user) => {
      if(user) {
        setIsLoggedIn(true);
      }else{
        setIsLoggedIn(false);
      }
      setInit(true);
    });

    getWebtoons();
  }, []);

  const getWebtoons = async () => {
    const response = await axios.get(
      "https://raw.githubusercontent.com/leesiha/naver-webtoon/main/webtoon_data.json"
    );
    setDat(response.data)
  };

  const logOut = () => {
    setIsLoggedIn((prev) => !prev);
  }

  return (
    <div>
      {isLoggedIn && <input type="submit" value="Log out" onClick={logOut}/>}
      {init ? <AppRouter isLoggedIn={isLoggedIn}>
        {Dat.map(dat => (
          <Webtoon_data key={dat.id} id={dat.id} title={dat.title} url={dat.url} img={dat.img}/>
        ))}
      </AppRouter>  : "Initializing..."}
    </div>
  )
}


export default App;
