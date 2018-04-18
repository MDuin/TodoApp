import React from 'react';
import TodoItem from './todo-item.js';

const TodoItemList = ({todoItems, remove, done}) => {
  const todoItemsList = todoItems.map((todoItem, key) => {
    return (
        <TodoItem
          todo={todoItem}
          remove={remove}
          done={done}
          key={key}/>
    );
  });

  //In case list is empty
  if (todoItemsList.length > 0) {
    return (
      <ul className="todo-list">
        {todoItemsList}
      </ul>);
  } else {
    return (<div>Typ hierboven de beschrijving van een nieuw item in.</div>);
  }
};

export default TodoItemList;
