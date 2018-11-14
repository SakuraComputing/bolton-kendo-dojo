import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import LandingPage from '../components/LandingPage';
import Login from '../components/auth/login';
import Menu from '../components/Menu';
import Footer from '../components/Footer';
import Register from '../components/auth/Register';
import TheoryPage from '../components/static/TheoryPage';
import KendoLinks from '../components/static/KendoLinks';
import NotFound from '../components/static/NotFoundPage';

import '../styles/styles.scss';

class AppRouter extends Component {

    render() {
        return (
            <BrowserRouter>
                <div className="App">
                    <Menu />
                    <Switch>
                        <Route path="/" component={LandingPage} exact={true}/>
                        <Route exact path="/login" component={Login}></Route>
                        <Route exact path="/register" component={Register}></Route>
                        <Route exact path="/theory" component={TheoryPage}></Route>
                        <Route exact path="/links" component={KendoLinks}></Route>
                        <Route path="/not-found" component={NotFound}/>
                    </Switch>
                    <Footer />
                </div>
            </BrowserRouter>
        )
    }
};

export default AppRouter;