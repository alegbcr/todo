import React from "react";

// css
import "./TodoList.css";

const TodoList = (props) => {
  return (
    <div className="todo-list__main">
      <ul className="todo-list__container">{props.children}</ul>
    </div>
  );
};

export default TodoList;
