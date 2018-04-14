import React from 'react';
import TodoItem from './todo-item.js';

const TodoItemList = ({todoItems}) => {
  const todoItemsList = todoItems.map((todoItem) => {
    return (
      <TodoItem
        description={todoItem.description}
        isDone={todoItem.isDone} />
    )
  });

  return (
    <ul className="list-group">
      {todoItemsList}
    </ul>
  );
};

export default TodoItemList;
