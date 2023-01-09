import React from "react";

import { useSelector } from "react-redux";

import SingleTodo from "./SingleTodo";

const ListTodos = () => {
  const {todosState}=useSelector((state)=>state)


  return (
    <div>
      {todosState.todos.length === 0 ? (
        <p>Henüz kayıtlı bir todo yok</p>
      ) : (
        <>
          {todosState.todos.map((todo) => (
            <SingleTodo todo={todo}  />
          ))}
        </>
      )}
    </div>
  );
};

export default ListTodos;
