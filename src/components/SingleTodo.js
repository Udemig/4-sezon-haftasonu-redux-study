import React from "react";

const SingleTodo=({todo,todos,setTodos})=>{

    const handleDelete=()=>{
        const filteredTodos=todos.filter(item=>item.id !== todo.id)
        setTodos(filteredTodos)
    }
    return(
        <div>
            <h2>{todo.text}</h2>
            <button onClick={handleDelete}>Sil</button>
            <hr />
        </div>
    )
}

export default SingleTodo