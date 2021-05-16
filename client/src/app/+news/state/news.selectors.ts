import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromNews from './news.reducer';

export const selectNewsState = createFeatureSelector<fromNews.NewsState>(
  fromNews.newsFeatureKey
);

export const selectNews = createSelector(selectNewsState, state => state.news);
