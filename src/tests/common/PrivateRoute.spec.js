import { PrivateRoute } from '../../common/PrivateRoute';

describe.skip('Private Route', () => {
    it('PrivateRoute is a function', () => {
        expect(typeof PrivateRoute).toEqual('function');
    })

    // describe('When the user is authenticated', () => {
    //     it('should render the passed in component', () =>{
    //         const auth = { isAuthenticated: true }
    //         const route = PrivateRoute((
    //             {
    //                 component: '',
    //                 auth,
    //                 ...rest
    //             }
    //         ) => {

    //         })
    //     });
    // })
    // describe('When the user has not been authenticated', () => {
    //     it('should not render the component', () => {

    //     });
    //     it('should redirect to the login page', () => {

    //     })
    // })
});