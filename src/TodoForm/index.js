import React, { useContext, useState } from "react";
import { TodoContext } from "../TodoContext";

const TodoForm = () => {
  // Local State
  const [newTodoValue, setNewTodoValue] = useState();

  // Context State
  const { addTodo, setOpenModal } = useContext(TodoContext);

  // Functions
  const onChange = (event) => {
    setNewTodoValue(event.target.value);
  };

  const onCancel = () => {
    setOpenModal(false);
  };

  const onSubmit = (event) => {
    event.preventDefault();
    addTodo(newTodoValue);
    setOpenModal(false);
    setNewTodoValue("");
  };

  return (
    <form onSubmit={onSubmit} className="Form_container">
      <label>Hola Alex</label>
      <textarea
        value={newTodoValue}
        onChange={onChange}
        placeholder="Escribe tu nueva tarea"
      />
      <div>
        <button type="button" onClick={onCancel}>
          Cancelar
        </button>
        <button type="submit">Añadir</button>
      </div>
    </form>
  );
};

export { TodoForm };
