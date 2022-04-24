import React, { useContext } from "react";

// context
import { TodoContext } from "../TodoContext";

// components
import { Modal } from "../Modal/";
import TodoCounter from "../TodoCounter/";
import TodoSearch from "../TodoSearch";
import TodoList from "../TodoList";
import TodoItem from "../TodoItem";
import { TodoForm } from "../TodoForm";
import { CreateTodoButton, CreateTodoButtonOnly } from "../CreateTodoButton";
import { TodosError } from "../TodosError";
import { TodosLoading } from "../TodosLoading";
import { EmptyTodos } from "../EmptyTodos";

const AppUI = () => {
  const {
    error,
    loading,
    searchedTodos,
    completeTodo,
    deleteTodo,
    openModal,
    setOpenModal,
  } = useContext(TodoContext);

  const viewportWidth = window.innerWidth;

  return (
    <>
      <section
        className={` ${viewportWidth <= 1023 && "mobile__container"} ${
          viewportWidth >= 1024 && "desktop__container"
        }`}
      >
        {viewportWidth <= 1023 && (
          <CreateTodoButtonOnly setOpenModal={setOpenModal} />
        )}
        {viewportWidth >= 1024 && (
          <div className="container__item desktop__card">
            <CreateTodoButton setOpenModal={setOpenModal} />
          </div>
        )}

        <div
          className={` ${
            viewportWidth <= 1023 && "mobile__container__item--Item2"
          } ${viewportWidth >= 1024 && "desktop__container__item--Item2"}`}
        >
          <TodoCounter />
          <TodoSearch />
          <TodoContext.Consumer>
            {() => (
              <>
                <TodoList>
                  {error && <TodosError error={error} />}
                  {loading && <TodosLoading />}
                  {!loading && !searchedTodos.length && <EmptyTodos />}
                  {searchedTodos.map((todo) => (
                    <TodoItem
                      key={todo.text}
                      text={todo.text}
                      completed={todo.completed}
                      onComplete={() => completeTodo(todo.text)}
                      onDelete={() => deleteTodo(todo.text)}
                    />
                  ))}

                  {/* Falta de trabajar */}
                  {/* <div className="item2__item">
                    <button>
                      <i className="far fa-eye-slash"> Hide completed task</i>
                    </button>
                  </div> */}
                </TodoList>

                {!!openModal && (
                  <Modal>
                    <TodoForm></TodoForm>
                  </Modal>
                )}
              </>
            )}
          </TodoContext.Consumer>
        </div>
      </section>
    </>
  );
};

export { AppUI };
