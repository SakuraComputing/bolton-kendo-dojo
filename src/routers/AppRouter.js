import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import LandingPage from '../components/LandingPage';
import Login from '../components/auth/login';
import Menu from '../components/Menu';
import Footer from '../components/Footer';

import '../styles/styles.scss';

const AppRouter = () => (
    <BrowserRouter>
        <div className="App">
            <Menu />
            <Switch>
                <Route path="/" component={LandingPage} exact={true}/>
                <Route exact path="/login" component={Login}></Route>
            </Switch>
            <Footer />
        </div>
    </BrowserRouter>
);

export default AppRouter;