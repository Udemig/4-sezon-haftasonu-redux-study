/* 
    reducer yazma adımları:

    1. başlangıç state'i oluşturulur
    2. Bir FONKSİYON olan reducer yazılır:
        a. iki tane parametre alır. state ve action

*/

const initialState={
    todos: [] 
}

const todosReducer=(state=initialState,action)=>{
    if(action.type === "ADD_TODO"){
        return{
           todos:[...state.todos,action.payload] 
        }
    }
    if(action.type === "DELETE_TODO"){
        let filteredTodos=state.todos.filter(item => item.id !== action.payload)
        return{
            todos:filteredTodos
        }
    }
    if(action.type === "EDIT_ISDONE"){
        let tempTodos=[]
        for(let i=0;i<state.todos.length;i++){
            if(state.todos[i].id === action.payload){
                let updatedTodo={
                    ...state.todos[i],
                    isDone: !state.todos[i].isDone
                }
                tempTodos.push(updatedTodo)
            }else{
                tempTodos.push(state.todos[i])
            }
        }
        return{
            todos:tempTodos
        }
    }
    return state
}

export default todosReducer
