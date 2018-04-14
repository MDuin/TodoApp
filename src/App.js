import React, { Component } from 'react';
import './App.css';

import AddItemButton from './components/add-item-button';
import TodoItemList from './components/todo-list.js';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      todoItems: [{description: "een", isDone: false},
      {description: "twee", isDone: true},
      {description: "drie", isDone: false}, ],
      showAddItem: false
    }
  }

  showAddItem = () => {
    console.log("hoi");
    this.setState({ showAddItem: true });
  }

  render() {

    return (
      <div className="App">
        <TodoItemList todoItems={this.state.todoItems} />
        <AddItemButton showAddItem={this.showAddItem} />
      </div>
    );
  }
}

export default App;
