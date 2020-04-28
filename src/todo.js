import React, { Component } from "react";
import { addTodo, removeTodo } from "./action";
import store from "./store";

class Todo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      input: "",
    };
  }

  render() {
    console.log(store.getState());
    const dispatcTodoAction = () => {
      const todo = this.state.input;
      store.dispatch(addTodo(todo));
      this.setState({
        input: "",
      });
    };
    let todos = store.getState().todo.map((tod, i) => (
      <li id={i} onClick={() => store.dispatch(removeTodo(tod))}>
        {tod}
      </li>
    ));
    return (
      <div className="App">
        <input
          placeholder="What to do?"
          value={this.state.input}
          onChange={(e) => this.setState({ input: e.target.value })}
        />
        <button onClick={dispatcTodoAction}>ADD TODO</button>
        <br />
        <ul className="App">{todos}</ul>
      </div>
    );
  }
}

export default Todo;
