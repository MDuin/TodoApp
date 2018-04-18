import React, { Component } from 'react';
import './App.css';

import AddItem from './components/add-item';
import TodoItemList from './components/todo-list';

//window.id = 0;
class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      todoItems: []
    }

    this.itemId = 0;

    //Make sure the proper "this" is used on callback
    this.addItemToList = this.addItemToList.bind(this);
    this.removeFromList = this.removeFromList.bind(this);
    this.toggleItemDone = this.toggleItemDone.bind(this);
  }

  /**
   *  Adds a new todo item to the state.
   */
  addItemToList(item) {
    //Slice to make sure to not directly modify the state
    var newArr = this.state.todoItems.slice();
    newArr.push({description: item, isDone: false, id: this.itemId++});
    this.setState({ todoItems: newArr });
  }

  removeFromList(id) {
    //Slice to make sure to not directly modify the state
    var newArr = this.state.todoItems.slice();
    var remainingItems = newArr.filter((todo) => {
      if(todo.id !== id) {
        return todo;
      } else {
        //prevent warnings..
        return null;
      }
    });

    this.setState({todoItems: remainingItems});
  }

  toggleItemDone(id) {
    //Slice to make sure to not directly modify the state
    var newArr = this.state.todoItems.slice();
    var item = newArr.find((todo) => {
      if(todo.id === id) {
        return todo;
      } else {
        //prevent warnings..
        return null;
      }
    });

    //Toggle isDone
    newArr[newArr.indexOf(item)].isDone = !newArr[newArr.indexOf(item)].isDone;
    this.setState({todoItems: newArr});
  }

  render() {
    return (
      <div className="App">
        <AddItem addItemToList={this.addItemToList} />
        <TodoItemList todoItems={this.state.todoItems}
                      remove={this.removeFromList}
                      done={this.toggleItemDone}/>
      </div>
    );
  }
}

export default App;
