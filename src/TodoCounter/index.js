import React, { useContext } from "react";

// context
import { TodoContext } from "../TodoContext";

// CSS
import "./TodoCounter.css";

const TodoCounter = () => {
  const { totalTodos, completedTodos } = useContext(TodoContext);

  return (
    <div>
      <h1 className="TodoCounter__title">Your Tasks</h1>
      <h2 className="TodoCounter__subtitle">
        Has been completed {completedTodos} of {totalTodos} TO DOs
      </h2>
    </div>
  );
};

export default TodoCounter;
