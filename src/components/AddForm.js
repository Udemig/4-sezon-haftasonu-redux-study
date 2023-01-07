import React, { useState } from "react";

const AddForm = ({todos,setTodos}) => {
  const [text, setText] = useState("");

  const handleSubmit=(event)=>{
    event.preventDefault()
    const newTodo={
        id: String(new Date().getTime()),
        text:text,
        isDone:false,
        date: new Date()
    }
    setTodos([...todos,newTodo])
  }
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <input value={text} onChange={(event) => setText(event.target.value)} />
        <button type="submit">Ekle</button>
      </div>
    </form>
  );
};

export default AddForm;
