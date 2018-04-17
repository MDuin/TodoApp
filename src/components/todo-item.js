import React from 'react';

const TodoItem = ({todo, remove, done}) => {
  return (
    <div className={"flexDiv " + (todo.isDone ? 'isDone' : '')}>
      <div onClick={() => done(todo.id)} className="item-description">{todo.description}</div>
      {todo.isDone && <div className="item-button" onClick={() => done(todo.id)}>Gedaan</div>}
      {!todo.isDone && <div onClick={() => done(todo.id)} className="item-button">Niet gedaan</div>}
      <div onClick={() => remove(todo.id)} className="item-button">Verwijder</div>
    </div>);
}

export default TodoItem;
