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

const AppRouter = ({ isLoggedIn }) => {
    return (
        <Router>
            <Navigation/>
            <Switch>
                <>
                    <Route exact path="/">
                        <Home />
                    </Route>
                    <Route path="/webtoon/weekday">
                        <Webtoon />
                        <Weekday />
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