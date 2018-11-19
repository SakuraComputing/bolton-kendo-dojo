import clubReducer from '../../reducers/club';
import { GET_CLUB_PROFILE, PROFILE_LOADING } from '../../actions/types'

describe('club reducer', () => {

    let initialState;

    beforeEach(() => {
        initialState = {
            club: {},
            loading: false
        }
    });

    it('should return a default state', () => {
        const state = clubReducer(undefined, { type: '@@INIT'})
        expect(state).toEqual(initialState);
    });
    it('should return club profile', () => {
        const club = {
            club: undefined,
            loading: false,
            test: 'test'
        }
        const action = {
            type: GET_CLUB_PROFILE,
            club
        }
        const state = clubReducer(club, action);
        expect(state).toEqual(club);
    });
    it('should return club profile loading', () => {
        const club = {
            loading: true
        }
        const action = {
            type: PROFILE_LOADING
        }
        const state = clubReducer(action);
        expect(state).toEqual(club);
    });
});