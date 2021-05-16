import { TestBed } from '@angular/core/testing';

import { NewsFacade } from './news.facade';
import { provideMockStore } from '@ngrx/store/testing';
import { initialState } from './news.reducer';

describe('NewsService', () => {
  let service: NewsFacade;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        provideMockStore({ initialState }),
      ]
    });
    service = TestBed.inject(NewsFacade);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
