import React from 'react';
import {render} from 'react-dom';
import Test from './test';

class App extends React.Component {
  constructor(props){
    super(props);
    this._todos = [];
    this.state={todos: []};

    this.addTodo = (event) => {
      event.preventDefault();
      this._todos.push(event.target.todo.value);
      this.setState({todos: this._todos});
      event.target.reset();
    }
  }

  removeTodo(i){
    this._todos.pop(i)
    this.setState({todos: this._todos});
  }

  getTodos(){
    return this.state.todos.map((t,i)=>
      <li key={i}>
        {t} <button onClick={()=>this.removeTodo(i)}>Complete</button>
      </li>);
  }

  render() {
    return (
      <div>
        <p> Hello React!</p>
        <ul>{this.getTodos()}</ul>
        <form onSubmit={this.addTodo}><input type="text" name="todo"></input></form>
      </div>
    )
  }
}

render(<App/>, document.getElementById('app'));
