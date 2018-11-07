import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import LandingPage from '../components/LandingPage';
import Login from '../components/auth/login';

const AppRouter = () => (
    <BrowserRouter>
        <div>
            <Switch>
                <Route path="/" component={LandingPage} exact={true}/>
                <Route exact path="/login" component={Login}></Route>
            </Switch>
        </div>
    </BrowserRouter>
);

export default AppRouter;