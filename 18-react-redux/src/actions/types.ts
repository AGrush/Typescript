import { FetchTodosAction, DeleteTodoAction} from './todos'

export enum ActionTypes {
  fetchTodos,//by default = 0
  deleteTodo
}

export type Action = FetchTodosAction | DeleteTodoAction;
