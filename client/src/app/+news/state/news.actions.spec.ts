import * as fromNews from './news.actions';

describe('loadNewss', () => {
  it('should return an action', () => {
    expect(fromNews.loadNewsAction.request({} as any).type).toBe('[News] Load for user [Request]');
    expect(fromNews.loadNewsAction.result({} as any).type).toBe('[News] Load for user [Result]');
    expect(fromNews.loadNewsAction.error({} as any).type).toBe('[News] Load for user [Error]');
  });
});
