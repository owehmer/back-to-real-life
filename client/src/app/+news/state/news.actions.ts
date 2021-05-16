import { GenerateAction } from '../../functions/ngrx';
import { News } from '../../models/news';

export interface LoadNewsPayload {
  userId: string;
}

export interface LoadNewsResultPayload {
  news: News[];
}

export const loadNewsAction = GenerateAction<LoadNewsPayload, LoadNewsResultPayload>('News', 'Load for user');
