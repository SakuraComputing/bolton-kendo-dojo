import { registerUser, setCurrentUser } from '../../actions/authActions';
import mockAxios from 'axios';

describe('Register User', () => {

    it('should POST a valid user and move to the login screen', async () => {
        const mockData = {
            name: 'Arthur Dent',
            username: 'ADent',
            email: 'arthur.dent@gmail.com',
            password: 'wibble',
            password2: 'wibble',
            accessLevel: 'super'
        };
        const history = { push: jest.fn() };
        mockAxios.post.mockImplementationOnce(() => {
            Promise.resolve({
                data: {
                    mockData
                }
            })
        })
        await registerUser(mockData, history);
        // console.log(newUser);
        expect(mockAxios.post).toHaveBeenCalled();
        // expect(history.push).toHaveBeenLastCalledWith('/');
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
        const payload = "Bearer";
        const action = setCurrentUser(payload);
        expect(action).toEqual({
            type: 'SET_CURRENT_USER',
            payload: payload
        });
    });
});

