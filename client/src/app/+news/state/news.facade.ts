import { Injectable } from '@angular/core';
import { State, Store } from '@ngrx/store';

import * as newsActions from './news.actions';
import * as newsSelectors from './news.selectors';
import { LoadNewsPayload } from './news.actions';
import { NewsState } from './news.reducer';

@Injectable({
  providedIn: 'root'
})
export class NewsFacade {
  readonly getNews$ = this._store.select(newsSelectors.selectNews);

  constructor(private _store: Store<NewsState>) { }

  loadNews(args: LoadNewsPayload) {
    this._store.dispatch(newsActions.loadNewsAction.request(args));
  }
}
