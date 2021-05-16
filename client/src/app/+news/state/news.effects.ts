import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, concatMap } from 'rxjs/operators';
import { Observable, EMPTY, of } from 'rxjs';

import * as NewsActions from './news.actions';
import { loadNewsAction, LoadNewsResultPayload } from './news.actions';



@Injectable()
export class NewsEffects {

  loadNewss$ = createEffect(() => {
    return this._actions$.pipe(

      ofType(loadNewsAction.request),
      concatMap(() =>
        /** An EMPTY observable only emits completion. Replace with your own observable API request */
        EMPTY.pipe(
          map(data => loadNewsAction.result({ news: [] } as LoadNewsResultPayload)),
          catchError((error: Error) => of(loadNewsAction.error(error))))
      )
    );
  });



  constructor(private _actions$: Actions) {}

}
