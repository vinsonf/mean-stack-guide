import { Action, createReducer, on } from '@ngrx/store';
import { Topic } from 'src/app/models/topic';


export const topicFeatureKey = 'topic';

export interface State {
  topics: Topic[];

}

export const initialState: State = {
  topics: [],
};


export const reducer = createReducer(
  initialState,

);

