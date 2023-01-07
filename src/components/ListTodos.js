import React from "react";

import SingleTodo from "./SingleTodo";

const ListTodos = ({ todos, setTodos }) => {
  return (
    <div>
      {todos.length === 0 ? (
        <p>Henüz kayıtlı bir todo yok</p>
      ) : (
        <>
          {todos.map((todo) => (
            <SingleTodo todo={todo} setTodos={setTodos} todos={todos} />
          ))}
        </>
      )}
    </div>
  );
};

export default ListTodos;
