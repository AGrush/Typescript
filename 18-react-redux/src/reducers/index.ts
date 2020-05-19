import { combineReducers } from 'redux'
import { todosReducer } from './todos';
import { Todo } from '../actions';

//this interface will always describe the entire state of our redux store
export interface StoreState { 
  todos: Todo[];
}

export const reducers = combineReducers<StoreState>({ 
  todos: todosReducer
});



