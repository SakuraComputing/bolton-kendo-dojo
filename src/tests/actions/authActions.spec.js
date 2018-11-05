import { registerUser } from '../../actions/authActions';
import mockAxios from 'axios';

describe('Register User', () => {

    it('should POST a valid user and move to the login screen', async () => {
        const user = {
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
                    user
                }
            })
        })
        const newUser = await registerUser(user, history);
        console.log(newUser);
        // expect(mockAxios.post).toHaveBeenCalledTimes(1);
        expect(history.push).toHaveLastBeenCalledWith('/');
    });
    it('should retiurn errors when an invalid user is passed', () => {

    });
});

describe('Login User', () => {
    it('should return a token on success', () => {

    });
});