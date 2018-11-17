import { getClubProfile } from '../../actions/clubActions';
import { GET_CLUB_PROFILE, GET_ERRORS } from '../../actions/types';
import Axios from 'axios';
import MockAdapter from 'axios-mock-adapter';
import configureMockStore from 'redux-mock-store';


describe('club action', () => {
    
    let mockAxios;
    let store;

    const flushAllPromises = () => new Promise(resolve => setImmediate(resolve));

    beforeEach(() => {
        mockAxios = new MockAdapter(Axios)
        const mockStore = configureMockStore();
        store = mockStore({});
    });

    afterEach(() => {
        mockAxios.reset();
    })

    it('should get the club profile', async () => {
      // Given
      mockAxios.onGet('/api/club').reply(200, {
          test: 'Club Details'
      });
      // When
      getClubProfile()(store.dispatch);
      await flushAllPromises();
      // then
       expect(store.getActions()).toEqual([
           { payload: { test: 'Club Details'}, type: GET_CLUB_PROFILE }
       ])
    });
    it('should try to get the club profile and throw an error', async () => {
      // Given
      mockAxios.onGet('/api/club').timeout();
      // When
      getClubProfile()(store.dispatch);
      await flushAllPromises();
      // Then
      expect(store.getActions()).toEqual([
        { payload: undefined,
          type: GET_ERRORS
        }
      ])
    });
});