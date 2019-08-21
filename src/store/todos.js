import * as Actions from "../configs/actionTypes";

const todos = (state = {}, action) => {
  switch (action.type) {
    case Actions.ADD_TODO:
      return {
        ...state,
        todos: [
          ...state.todos,
          {
            _id: Date.now(),
            title: action.payload.title,
            isComplete: false,
            updatedAt: Date.now(),
            isPinned: action.payload.isPinned,
            tags: action.payload.tags,
          },
        ],
      };
    case Actions.EDIT_TODO:
      return {
        ...state,
        todos: [
          ...state.todos.map((todo) =>
            todo._id === action.payload._id ? action.payload : todo
          ),
        ],
      };
    case Actions.TOGGLE_TODO:
      return {
        ...state,
        todos: [
          ...state.todos.map((todo) =>
            todo._id === action.payload.id
              ? { ...todo, isComplete: !todo.isComplete }
              : todo
          ),
        ],
      };
    case Actions.DELETE_TODO:
      return {
        ...state,
        todos: [
          ...state.todos.filter((todo) => todo._id !== action.payload.id),
        ],
      };
    case Actions.TOGGLE_ALL_TODO:
      let totalItemCompleted = 0;
      state.todos.forEach((t) => {
        if (t.isComplete) totalItemCompleted += 1;
      });

      return {
        ...state,
        todos:
          totalItemCompleted === state.todos.length
            ? [...state.todos.map((t) => ({ ...t, isComplete: false }))]
            : [...state.todos.map((t) => ({ ...t, isComplete: true }))],
      };
    case Actions.SET_VISIBILITY_FILTER:
      return {
        ...state,
        filter: action.payload.filter,
      };
    case Actions.SEARCH:
      return {
        ...state,
        searchTerm: action.payload,
      };
    default:
      return state;
  }
};

export default todos;
