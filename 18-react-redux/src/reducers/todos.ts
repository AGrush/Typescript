import { Todo, Action, ActionTypes } from '../actions'

//state is going to be an array of todos and if we dont provide a state just use an empty array
export const todosReducer = (state: Todo[] = [], action: Action) => {

  //a switch statement allows typescript to infer the right action interface for the right case here. Acting as a type guard. magical.
  switch (action.type) {
    case ActionTypes.fetchTodos:
      return action.payload;
    case ActionTypes.deleteTodo:
      return state.filter((todo: Todo) => todo.id !== action.payload)
    default: 
      return state;
  }
}