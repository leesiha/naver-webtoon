import React, { useEffect, useState } from 'react';
import AppRouter from 'components/Router';
import { authService } from "fbase";


function App() {
  const [init, setInit] = useState(false);
  const [isLoggedIn, setIsLoggedIn ] = useState(false);
  useEffect( () => {
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

  return (
  <>
  {isLoggedIn && <input type="submit" value="Log out" onClick={logOut}/>}
  {init ? <AppRouter isLoggedIn={isLoggedIn}/> : "Initializing..."}
  </>
  );
}

export default App;
