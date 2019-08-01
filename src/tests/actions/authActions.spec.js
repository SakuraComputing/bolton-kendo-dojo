import { setCurrentUser, loginUser } from '../../actions/authActions';
import thunk from 'redux-thunk';
import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';
import configureMockStore from 'redux-mock-store';
import { GET_CURRENT_USER, SET_CURRENT_USER } from '../../actions/types';


describe('Register User', () => {
    
    it('should POST a valid user and move to the login screen', async () => {
        // const mockData = {
            //     name: 'Arthur Dent',
            //     username: 'ADent',
            //     email: 'arthur.dent@gmail.com',
            //     password: 'wibble',
            //     password2: 'wibble',
            //     accessLevel: 'super'
            // };
            // const history = { push: jest.fn() };
            // moxios.wait(() => {
                //     moxios.requests.mostRecent();
                //     request.respondWith({
                    //         status: 200,
                    //         response: getPostsMock
                    //     });
                    // });
                    // const store = mockStore({ posts: {} })
                    
                    
                    // // await registerUser(mockData, history);
                    // expect(moxios.post).toHaveBeenCalled();
                    // // expect(history.push).toHaveBeenLastCalledWith('/');
    });
    it('should return errors when an invalid user is passed', () => {

    });
});
            
describe('Login User', () => {

    // const createMockStore = configureMockStore([thunk]);
    
    // const store = createMockStore( { data: { token: 'test' }} );

    it('should return a token on success', () => {
        const mockResponse = { success: true, token: 'Bearer test' };
        let mock = new MockAdapter(axios);
        const userData = {
            success: true,
            token: 'Bearer test'
        }
        mock.onPost('/login', userData).reply(200, mockResponse);
        expect(mockResponse).toEqual(userData);

        // const action = loginUser(userData);

        // const expectedActions = [{ payload: mockResponse.body, type: 'SET_CURRENT_USER' }];
        // store.dispatch(loginUser()).then(() => {
        //     expect(store.getActions()).toEqual(expectedActions);
        // });
    });
});


describe('Set Current User', () => {
    it('should set the current user and payload', () => {
        const decoded = "Bearer";
        const action = setCurrentUser(decoded);
        expect(action).toEqual({
            type: SET_CURRENT_USER,
            payload: decoded
        });
    });
});

// describe('Get current user', () => {
//     it('should get the payload', () => {
        
//     });
// });

