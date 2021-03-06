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
import Members from '../components/members/Members';
import About from '../components/static/About';
import ClubHistory from '../components/ClubHistory';
import KendoMindMap from '../components/members/KendoMindMap';
import MemberPhotos from '../components/members/MembersPhotos';
import VideoPage from '../components/VideoPage';
import Posts from '../components/members/posts/Posts';
import Post from '../components/members/post/Post';
import DojoCalendar from '../components/calendar/DojoCalendar';

import '../styles/styles.scss';
import PrivateRoute from '../common/PrivateRoute';

class AppRouter extends Component {

    render() {
        return (
            <BrowserRouter>
                <div className="app-wrapper">
                    <div className="app-container">
                        <Menu />
                        <Switch>
                            <Route path="/" component={LandingPage} exact={true}/>
                            <Route exact path="/login" component={Login}></Route>
                            <Route exact path="/register" component={Register}></Route>
                            <Route exact path="/theory" component={TheoryPage}></Route>
                            <Route exact path="/links" component={KendoLinks}></Route>
                            <Route exact path="/about" component={About}></Route>
                            <Route exact path="/history" component={ClubHistory}></Route>
                            <Route exact path="/media" component={VideoPage}></Route>
                            <Route path="/not-found" component={NotFound}/>
                            <Route exact path="/calendar" component={DojoCalendar} /> 
                        </Switch>
                        <Switch>
                            <PrivateRoute
                                exact path="/members"
                                component={Members}
                            />
                        </Switch>
                        <Switch>
                            <PrivateRoute
                                exact path="/mindmap"
                                component={KendoMindMap}
                            />
                        </Switch>
                        <Switch>
                            <PrivateRoute
                                exact path="/memberphoto"
                                component={MemberPhotos}
                            />
                        </Switch>
                        <Switch>
                            <PrivateRoute
                                exact path="/feed"
                                component={Posts}
                            />
                        </Switch>
                        <Switch>
                            <PrivateRoute
                                exact path="/post/:id"
                                component={Post}
                            />
                        </Switch>
                    </div>
                    <Footer />
                </div>
            </BrowserRouter>
        )
    }
};

export default AppRouter;