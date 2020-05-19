import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Todo, fetchTodos, deleteTodo } from '../actions';
import { StoreState } from '../reducers'


interface AppProps {
  todos: Todo[];
  //because we are using redux-thunk with fetch-todos, which returns a function, not an action creator.
  fetchTodos: Function;
  deleteTodo: typeof deleteTodo;
}

class _App extends Component<AppProps> {
  state = {
    fetching: false
  }

  //using component level state with lifecycle method
  componentDidUpdate(prevProps: AppProps): void {
    if (!prevProps.todos.length && this.props.todos.length){
      this.setState({ fetching: false })
    }
  }

  onButtonClick = (): void => {
    this.props.fetchTodos();
    this.setState({ fetching: true })
  }

  onTodoClick = (id: number): void => {
    this.props.deleteTodo(id);
  };

  renderList(): JSX.Element[] {
    return this.props.todos.map((todo: Todo) => {
      return (
        <div onClick={() => this.onTodoClick(todo.id)} key={todo.id}>
         
          {todo.title}
        </div>
      );
    })
  }

  render() {
    // console.log(this.props.todos)
    return (
      <div>
        <button onClick={this.onButtonClick}>Fetch</button>
        <br /><br />
        {this.state.fetching ? 'LOADING' : null}
        {this.renderList()}
      </div>
    )
  }
}


// can destructure state -> {todos} and change return to just {todos}
const mapStateToProps = (state: StoreState): {todos: Todo[]}=> {
  return { todos: state.todos }
}

//we export the connected version of App connect(mapStateToProps, {actionCreators})(app to connect)
export const App = connect(
  mapStateToProps,
  { fetchTodos, deleteTodo }
)(_App)