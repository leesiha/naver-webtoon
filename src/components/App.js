import React, { useEffect, useState } from "react";
import AppRouter from "components/Router";
import { authService } from "fbase";
import axios from "axios";
import "routes/Navigation.css";

function App() {
  const [init, setInit] = useState("false");
  const [isLoggedIn, setIsLoggedIn] = useState("false");
  const [webtoon_spot, setWebtoon_spot] = useState([]);
  const [webtoon_detail, setWebtoon_detail] = useState([]);
  const [webtoon_finish, setWebtoon_finish] = useState([]);

  const getWebtoons = async () => {
    await axios
      .all([
        axios.get(
          "https://raw.githubusercontent.com/leesiha/naver-webtoon/main/webtoon_finish.json"
        ),
        axios.get(
          "https://raw.githubusercontent.com/leesiha/naver-webtoon/main/webtoon_spot2.json"
        ),
        axios.get(
          "https://raw.githubusercontent.com/leesiha/naver-webtoon/main/webtoon_detail.json"
        ),
      ])
      .then(
        axios.spread((res1, res2, res3) => {
          setWebtoon_finish(res1.data);
          setWebtoon_spot(res2.data);
          setWebtoon_detail(res3.data);
        })
      );
  };

  useEffect(() => {
    getWebtoons();

    authService.onAuthStateChanged((user) => {
      if (user) {
        setIsLoggedIn(true);
      } else {
        setIsLoggedIn(false);
      }
      setInit(true);
    });
  }, []);

  const logOut = () => {
    authService.signOut();
  };

  return (
    <div id="wrap" className="end_page">
      {init ? (
        <AppRouter
          isLoggedIn={isLoggedIn}
          webtoon_spot={webtoon_spot}
          webtoon_detail={webtoon_detail}
          webtoon_finish={webtoon_finish}
        ></AppRouter>
      ) : (
        "Initializing..."
      )}
    </div>
  );
}

export default App;
