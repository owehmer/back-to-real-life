import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NewsComponent } from './news.component';
import { RouterModule } from "@angular/router";
import { EffectsModule } from '@ngrx/effects';
import { NewsEffects } from './state/news.effects';
import { StoreModule } from "@ngrx/store";
import { newsFeatureKey, newsReducer } from "./state/news.reducer";


@NgModule({
  declarations: [
    NewsComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: '**',
        component: NewsComponent
      }
    ]),
    StoreModule.forFeature(newsFeatureKey, newsReducer),
    EffectsModule.forFeature([NewsEffects])
  ]
})
export class NewsModule {
}
