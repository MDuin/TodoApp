import React from 'react';

const TodoItem = ({ description, isDone }) => {
  return (
    <div>
      <div className="col-md-9">{description}</div>
      <div className="col-md-1">{isDone}</div>
      <div className="col-md-1">Edit</div>
      <div className="col-md-1">Remove</div>
    </div>
  );
};

export default TodoItem;
