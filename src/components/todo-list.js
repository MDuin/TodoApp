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

  if (todoItemsList.length > 0) {
    return (
      <ul className="todo-list">
        {todoItemsList}
      </ul>);
  } else {
    return (<div>Gebruik de knop rechtsonderin om een nieuw item toe te voegen</div>);
  }
};

export default TodoItemList;
