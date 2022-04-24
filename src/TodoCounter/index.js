import React, { useContext } from "react";

// context
import { TodoContext } from "../TodoContext";

// CSS
import "./TodoCounter.css";

const TodoCounter = () => {
  const { totalTodos, completedTodos } = useContext(TodoContext);

  return (
    <div>
      <h1 className="TodoCounter__title">Tus notas</h1>
      <h2 className="TodoCounter__subtitle">
        Haz completado {completedTodos} de {totalTodos} notas
      </h2>
    </div>
  );
};

export default TodoCounter;
