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
        <h1 className="card-title">Create new task</h1>
        <textarea
          value={newTodoValue}
          onChange={onChange}
          className="card-input"
          placeholder="Write new task"
        />
        <button className="card-button" type="submit">
          Add task
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
        Add task
      </button>
    </>
  );
};

export { CreateTodoButton, CreateTodoButtonOnly };
