import React,{useState} from "react";

import AddForm from "./components/AddForm";
import ListTodos from "./components/ListTodos";

function App() {
  const [todos,setTodos]=useState([])
  return (
    <div>
      <h1>hello</h1>
      <AddForm todos={todos} setTodos={setTodos} />
      <ListTodos todos={todos} setTodos={setTodos} />
    </div>
  );
}

export default App;
