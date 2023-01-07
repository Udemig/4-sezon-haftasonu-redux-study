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

    return state
}

export default todosReducer
