// 111111111111111111111111111111111111111111111111111111111111111111111
// BASIC CLASS COMPONENT 

// import React from 'react';
// import ReactDOM from 'react-dom';

// interface AppProps {
//   color: string;
// }

// class App extends React.Component<AppProps> {
//   render() {
//     return <div>{this.props.color}</div>
//   }
// }

// ReactDOM.render(
//   <App color='red'/>,
//   document.querySelector('#root')
// )


// 2222222222222222222222222222222222222222222222222222222222222222222222
// CONFUSING FOR OLD NOTATION 

// import React from 'react';
// import ReactDOM from 'react-dom';

// interface AppProps {
//   color: string;
// }

// interface AppState {
//   counter: number;
// }

// class App extends React.Component<AppProps, AppState> {
//   constructor(props: AppProps) {
//     super(props)
    
//     this.state = { counter: 0 }; 
//   } 
//   // // OR just below and delete AppState generics: 
//   //state = { counter: 0};

//   onIncrement = ():void => {
//     this.setState({ counter: this.state.counter + 1})
//   }

//   onDecrement = ():void => {
//     this.setState({ counter: this.state.counter - 1})
//   }

//   render() {
//     return (
//       <div>
//         <button onClick={this.onIncrement}>Increment</button>
//         <button onClick={this.onDecrement}>Decrement</button>
//         {this.state.counter}
//       </div>
//     )
//   }
// }

// ReactDOM.render(
//   <App color='red'/>,
//   document.querySelector('#root')
// )


// 3333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333
// FUNCTIONAL COMPONENTS
 
// import React from 'react';
// import ReactDOM from 'react-dom';

// interface AppProps {
//   color: string;
// }

// const App = (props: AppProps): JSX.Element => {
//   return (
//     <div>
//       {props.color}
//     </div>
//   )
// }

// // export default App

// ReactDOM.render(
//   <App color='red'/>,
//   document.querySelector('#root')
// )

// 44444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444
import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import { App } from './components/App';
import { reducers } from './reducers';

const store = createStore(reducers, applyMiddleware(thunk));

ReactDOM.render(
  <Provider store={store}>
    <App/>
  </Provider>,
  document.querySelector('#root')
)