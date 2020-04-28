export default (state, action) => {
  switch (action.type) {
    case "SET_TECHNOLOGY":
      return {
        ...state,
        tech: action.text,
      };
    case "ADD_TODO":
      return {
        ...state,
        todo: [...state.todo, action.todo],
      };
    case "REMOVE_TODO":
      return {
        ...state,
        todo: [...state.todo.filter((todo) => todo !== action.todo)],
      };

    default:
      return state;
  }
};
