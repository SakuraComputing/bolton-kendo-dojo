import React from 'react';
import AppRouter from '../../routers/AppRouter';
import { shallow } from 'enzyme';
import LandingPage from '../../components/LandingPage';
import Login from '../../components/auth/Login';
import Register from '../../components/auth/Register';
import Theory from '../../components/static/TheoryPage';
import KendoLinks from '../../components/static/KendoLinks';
import About from '../../components/static/About';
import ClubHistory from '../../components/ClubHistory';
import VideoPage from '../../components/VideoPage';
import Members from '../../components/members/Members';
import KendoMindMap from '../../components/members/KendoMindMap';
import MembersPhoto from '../../components/members/MembersPhotos';
import Posts from '../../components/members/posts/Posts';
import NotFound from '../../components/static/NotFoundPage';

describe('App Router', () => {
    it('AppRouter is a function', () => {
        expect(typeof AppRouter).toEqual('function');
    })

    let wrapper; 

    beforeEach(() => {
        wrapper = shallow(<AppRouter />);
    })
    it('renders as expected', () => {
        expect(wrapper).toMatchSnapshot();
    });
    it('should route to the landing page', () => {
        expect(wrapper.find('Route[exact=true][path="/"]').first().prop('component')).toBe(LandingPage);
    });
    it('should route to the login page', () => {
        expect(JSON.stringify(wrapper.find('Route[path="/login"]').first().prop('component'))).toEqual(JSON.stringify(Login));
    });
    it('should route to the register page', () => {
        expect(wrapper.find('Route[path="/register"]').first().prop('component')).toEqual(Register);
    });
    it('should route to the Theory page', () => {
        expect(wrapper.find('Route[path="/theory"]').first().prop('component')).toEqual(Theory);
    });
    it('should route to the Links page', () => {
        expect(wrapper.find('Route[path="/links"]').first().prop('component')).toEqual(KendoLinks);
    });
    it('should route to the not found page', () => {
        expect(wrapper.find('Route[path="/not-found"]').first().prop('component')).toEqual(NotFound);
    });
    it('should route to the about page', () => {
        expect(wrapper.find('Route[path="/about"]').first().prop('component')).toEqual(About);
    });
    it('should route to the club history page', () => {
        expect(wrapper.find('Route[path="/history"]').first().prop('component')).toEqual(ClubHistory);
    });
    it('should route to the media page', () => {
        expect(wrapper.find('Route[path="/media"]').first().prop('component')).toEqual(VideoPage);
    });
    it('should route to the kendo members page', () => {
        expect(wrapper.find('Connect(PrivateRoute)[path="/members"]').first().prop('component')).toEqual(Members);
    });
    it('should route to the members photo page', () => {
        expect(wrapper.find('Connect(PrivateRoute)[path="/memberphoto"]').first().prop('component')).toEqual(MembersPhoto);
    });
    it('should route to the kendo mind map page', () => {
        expect(wrapper.find('Connect(PrivateRoute)[path="/mindmap"]').first().prop('component')).toEqual(KendoMindMap);
    });
    it('should route to the posts page', () => {
        expect(wrapper.find('Connect(PrivateRoute)[path="/feed"]').first().prop('component')).toEqual(Posts);
    });

})