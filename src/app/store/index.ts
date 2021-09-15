import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
  MetaReducer
} from '@ngrx/store';
import { environment } from '../../environments/environment';
import * as fromTopic from './topic/reducers/topic.reducer';


export interface AppState {

  [fromTopic.topicFeatureKey]: fromTopic.State;
}

export const reducers: ActionReducerMap<AppState> = {

  [fromTopic.topicFeatureKey]: fromTopic.reducer,
};


export const metaReducers: MetaReducer<AppState>[] = !environment.production ? [] : [];
