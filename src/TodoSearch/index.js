import React, { useContext } from "react";

// context
import { TodoContext } from "../TodoContext";

// CSS
import "./TodoSearch.css";

const TodoSearch = () => {
  const { searchValue, setSearchValue } = useContext(TodoContext);

  // Functions
  const onSearchValueChange = (event) => {
    console.log(event.target.value);
    setSearchValue(event.target.value);
  };

  return (
    <div className="todo-search__main">
      <div className="todo-search__main--item">
        <input
          className="todo-search"
          placeholder="Buscar"
          value={searchValue}
          onChange={onSearchValueChange}
        />
        <i className="fas fa-search"></i>
      </div>
      <p>{searchValue}</p>
    </div>
  );
};

export default TodoSearch;
