import React, { useContext, useState } from "react";

// context
import { TodoContext } from "../TodoContext";

// css
import "./CreateTodoButton.css";

const CreateTodoButton = (props) => {
  // Local State
  const [newTodoValue, setNewTodoValue] = useState();

  // Context State
  const { addTodo } = useContext(TodoContext);

  // Functions
  const onChange = (event) => {
    setNewTodoValue(event.target.value);
  };

  const onSubmit = (event) => {
    event.preventDefault();
    addTodo(newTodoValue);
    setNewTodoValue("");
  };

  return (
    <>
      <form onSubmit={onSubmit} className="card-container">
        <h1 className="card-title">Craer una nota</h1>
        <textarea
          value={newTodoValue}
          onChange={onChange}
          className="card-input"
          placeholder="Escribe una nota"
        />
        <button className="card-button" type="submit">
          Crear nota
        </button>
      </form>
    </>
  );
};

const CreateTodoButtonOnly = (props) => {
  // Functions
  const onClickButton = () => {
    props.setOpenModal((prevState) => !prevState);
  };

  return (
    <>
      <button className="card__button--only" onClick={onClickButton}>
        Crear nota
      </button>
    </>
  );
};

export { CreateTodoButton, CreateTodoButtonOnly };
