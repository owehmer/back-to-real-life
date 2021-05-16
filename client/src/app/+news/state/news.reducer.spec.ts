import { initialState, newsReducer } from './news.reducer';

describe('News Reducer', () => {
  describe('an unknown action', () => {
    it('should return the previous state', () => {
      const action = {} as any;

      const result = newsReducer(initialState, action);

      expect(result).toBe(initialState);
    });
  });
});
