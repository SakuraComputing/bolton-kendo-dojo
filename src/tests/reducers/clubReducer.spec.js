import clubReducer from '../../reducers/club';

describe('club reducer', () => {
    it('should return a default state', () => {
        const state = clubReducer(undefined, { type: '@@INIT'})
        expect(state).toEqual([]);
    });
});