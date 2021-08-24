import { HashRouter as Router, Redirect, Route, Switch } from 'react-router-dom';
import { useState } from 'react';
import Home from 'routes/Home';
import Webtoon from 'routes/Webtoon';
import BestChallenge from 'routes/BestChallenge';
import Challenge from 'routes/Challenge';
import Navigation from './Navigation';
import Genre from 'routes/webtoon_routes/Genre';
import Weekday from 'routes/webtoon_routes/Weekday';
import Creation from 'routes/webtoon_routes/Creation';
import Artist from 'routes/webtoon_routes/Artist';
import Period from 'routes/webtoon_routes/Period';
import Theme from 'routes/webtoon_routes/Theme';
import Finish from 'routes/webtoon_routes/Finish';
import Auth from 'routes/Auth';
import Mypage from 'routes/Mypage';
import Webtoon_data from './Webtoon_data';
import Home_data from './Home_data';

import "./Navigation.css";
import webtoonData from 'webtoon_data';
import homeData from 'home_data';

const AppRouter = ({ isLoggedIn }) => {
    return (
        <Router>
            <Navigation/>
            <Switch>
                <>
                    <Route exact path="/">
                        <Home />
                        {homeData.map((item) => (
                            <Home_data img={item.img} title={item.title} thumb={item.thumb} url={item.url} />
                        ))}
                    </Route>
                    <Route path="/webtoon/weekday">
                        <Webtoon />
                        <Weekday />
                        {webtoonData.map((item, index) => (
                            // 해당 Component에서 title, url, img를 props로 요구하므로 주입해주어야 합니다.
                            <Webtoon_data img={item.img} title={item.title} url={item.url} key={`${index}listKey`} />
                        ))}
                    </Route> 
                    <Route path="/webtoon/genre">
                        <Webtoon />
                        <Genre />
                    </Route>
                    <Route path="/webtoon/creation">
                        <Webtoon />
                        <Creation />
                    </Route>
                    <Route path="/webtoon/artist">
                        <Webtoon />
                        <Artist />
                    </Route>
                    <Route path="/webtoon/period">
                        <Webtoon />
                        <Period />
                    </Route>
                    <Route exact path="/webtoon/theme">
                        <Webtoon />
                        <Theme />
                    </Route>
                    <Route exact path="/webtoon/finish">
                        <Webtoon />
                        <Finish />
                    </Route>
                    <Route path="/bestChallenge">
                        <BestChallenge />
                    </Route>
                    <Route path="/challenge">
                        <Challenge />
                    </Route>
                    <Route path="/mypage">
                        {isLoggedIn ? <Mypage /> : <Auth />}
                    </Route>
                </>
            </Switch>
        </Router>
    );
}

export default AppRouter;