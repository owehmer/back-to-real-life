import { on } from 'ts-action-immer';
import * as NewsActions from './news.actions';
import { ActionCreator } from "ts-action/action";
import { News } from '../../models/news';
import { reducer } from 'ts-action';

export const newsFeatureKey = 'news';

export interface NewsState {
  news: News[] | undefined | null;
}

export const initialState: NewsState = {
  news: undefined
};

export function newsReducer(state: NewsState, action: ActionCreator) {
  return newsProducer(state, action);
}

export const newsProducer = reducer(
  initialState,

  on(NewsActions.loadNewsAction.result, (state, action) => {
    state.news = action.payload.news;
  }),
  on(NewsActions.loadNewsAction.error, (state) => {
    state.news = null;
  })
);

