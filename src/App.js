import React, { Component } from "react";
import HelloWorld from "./HelloWorld";
import store from "./store";
import ButtonGroup from "./buttonGroup";
import Todo from "./todo";

class App extends Component {
  render() {
    return [
      <HelloWorld key={1} tech={store.getState()} />,
      <ButtonGroup key={2} technologies={["React", "Elm", "React-redux"]} />,
      <Todo />,
    ];
  }
}

export default App;
