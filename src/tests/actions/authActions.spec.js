import { setCurrentUser } from '../../actions/authActions';
import thunk from 'redux-thunk';


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
        // // console.log(newUser);
        // expect(moxios.post).toHaveBeenCalled();
        // // expect(history.push).toHaveBeenLastCalledWith('/');
    });
    it('should retiurn errors when an invalid user is passed', () => {

    });
});

describe('Login User', () => {
    it('should return a token on success', () => {

    });
});


describe('Set Current User', () => {
    it('should set the current user and payload', () => {
        const decoded = "Bearer";
        const action = setCurrentUser(decoded);
        expect(action).toEqual({
            type: 'SET_CURRENT_USER',
            payload: decoded
        });
    });
});

