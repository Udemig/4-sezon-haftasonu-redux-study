/* 
    store oluştururken:
    1. redux kütüphanesinden createStore ve combineReducers
    isimli fonksiyon kullanılarak store oluşturulur.
*/
import { combineReducers, createStore } from "redux";
import todosReducer from "./reducers/todosReducer";

const rootReducer=combineReducers({
    todosState:todosReducer
})

const store=createStore(rootReducer)

export default store