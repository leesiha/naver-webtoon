import {
  HashRouter as Router,
  Redirect,
  Route,
  Switch,
  Link,
} from "react-router-dom";
import { useState } from "react";
import Home from "routes/Home";
import Navigation from "../routes/Navigation";
import Navigation2 from "routes/webtoon_routes/Navigation2";
import BestChallenge from "routes/BestChallenge";
import Challenge from "routes/Challenge";
import Genre from "routes/webtoon_routes/genre/Genre";
import Weekday from "routes/webtoon_routes/weekday/Weekday";
import Creation from "routes/webtoon_routes/creation/Creation";
import Artist from "routes/webtoon_routes/artist/Artist";
import Period from "routes/webtoon_routes/period/Period";
import Theme from "routes/webtoon_routes/Theme";
import Finish from "routes/webtoon_routes/Finish";
import Auth from "routes/Auth";
import Mypage from "routes/Mypage";

import "./Router.css";
import Monday from "routes/webtoon_routes/weekday/Monday";
import Tuesday from "routes/webtoon_routes/weekday/Tuesday";
import Wendnesday from "routes/webtoon_routes/weekday/Wendnesday";
import Thursday from "routes/webtoon_routes/weekday/Thursday";
import Friday from "routes/webtoon_routes/weekday/Friday";
import Saturday from "routes/webtoon_routes/weekday/Saturday";
import Sunday from "routes/webtoon_routes/weekday/Sunday";
import Webtoon_detail from "routes/webtoon_routes/Webtoon_detail";

const AppRouter = ({ isLoggedIn, daily_all, webtoon_spot }) => {
  return (
    <Router>
      <Navigation />
      <Switch>
        <>
          <Route exact path="/">
            <Home />
          </Route>
          <Switch>
            <>
              <Route path="/webtoon">
                <Navigation2 />
                <div className="container">
                  <div className="webtoon">
                    <>
                      <Route exact path="/webtoon/weekday">
                        <Weekday webtoon={daily_all} Nwebtoon={webtoon_spot} />
                      </Route>
                      <Route exact path="/webtoon/weekday/mon">
                        <Monday webtoon={daily_all} Nwebtoon={webtoon_spot} />
                      </Route>
                      <Route exact path="/webtoon/weekday/tue">
                        <Tuesday webtoon={daily_all} Nwebtoon={webtoon_spot} />
                      </Route>
                      <Route exact path="/webtoon/weekday/wed">
                        <Wendnesday
                          webtoon={daily_all}
                          Nwebtoon={webtoon_spot}
                        />
                      </Route>
                      <Route exact path="/webtoon/weekday/thu">
                        <Thursday webtoon={daily_all} Nwebtoon={webtoon_spot} />
                      </Route>
                      <Route exact path="/webtoon/weekday/fri">
                        <Friday webtoon={daily_all} Nwebtoon={webtoon_spot} />
                      </Route>
                      <Route exact path="/webtoon/weekday/sat">
                        <Saturday webtoon={daily_all} Nwebtoon={webtoon_spot} />
                      </Route>
                      <Route exact path="/webtoon/weekday/sun">
                        <Sunday webtoon={daily_all} Nwebtoon={webtoon_spot} />
                      </Route>
                    </>
                    <>
                      <Route path="/webtoon/genre">
                        <Genre />
                      </Route>
                    </>
                    <>
                      <Route path="/webtoon/creation">
                        <Creation />
                      </Route>
                    </>
                    <>
                      <Route path="/webtoon/artist">
                        <Artist />
                      </Route>
                    </>
                    <>
                      <Route path="/webtoon/period">
                        <Period />
                      </Route>
                    </>
                    <>
                      <Route exact path="/webtoon/theme">
                        <Theme />
                      </Route>
                    </>
                    <>
                      <Route exact path="/webtoon/finish">
                        <Finish />
                      </Route>
                    </>
                  </div>
                </div>
              </Route>
            </>
          </Switch>
          <Route path="/bestChallenge">
            <BestChallenge />
          </Route>
          <Route path="/challenge">
            <Challenge />
          </Route>
          <Route path="/mypage">{isLoggedIn ? <Mypage /> : <Auth />}</Route>
        </>
      </Switch>
    </Router>
  );
};

export default AppRouter;
