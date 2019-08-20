import * as types from "../configs/actionTypes";

export const addTodo = (payload) => ({ type: types.ADD_TODO, payload });

export const deleteTodo = (payload) => ({ type: types.DELETE_TODO, payload });

export const updateItem = (payload) => ({ type: types.EDIT_TODO, payload });

export const toggleTodo = (payload) => ({ type: types.TOGGLE_TODO, payload });

export const toggleAll = (payload) => ({
  type: types.TOGGLE_ALL_TODO,
  payload,
});

export const completeTodo = (payload) => ({
  type: types.COMPLETE_TODO,
  payload,
});

export const completeAllTodos = () => ({ type: types.COMPLETE_ALL_TODOS });

export const clearCompleted = () => ({ type: types.CLEAR_COMPLETED });

export const onSearch = (payload) => ({ type: types.SEARCH, payload });

export const onClearSearch = (payload) => ({
  type: types.CLEAR_SEARCH,
  payload,
});

export const setVisibilityFilter = (payload) => ({
  type: types.SET_VISIBILITY_FILTER,
  payload,
});
