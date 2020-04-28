// const SET_TECHNOLOGY = "SET_TECHNOLOGY";
// const ADD_TODO = "ADD_TODO";
// const REMOVE_TODO = "REMOVE_TODO";

export const setTechnology = (text) => ({ type: "SET_TECHNOLOGY", text });
export const addTodo = (todo) => ({ type: "ADD_TODO", todo });
export const removeTodo = (todo) => ({ type: "REMOVE_TODO", todo });
