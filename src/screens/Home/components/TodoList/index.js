import { connect } from "react-redux";
import TodoListComponent from "./TodoList";
import { ALL, COMPLETED, ACTIVE } from "../../../../configs/filterType";

const mapStateToProps = (state) => {
  const todos = () => {
    const qRegex = new RegExp(
      state.todos.searchTerm.replace(/[.*+?^${}()|[\]\\]/g, "\\$&"),
      "i"
    );

    return state.todos.todos.filter((item) => {
      if (state.todos.filter === ALL) {
        if (qRegex.test(item.title)) {
          return true;
        }
      }
      if (state.todos.filter === COMPLETED) {
        if (item.isComplete && qRegex.test(item.title)) {
          return true;
        }
      }
      if (state.todos.filter === ACTIVE) {
        if (!item.isComplete && qRegex.test(item.title)) {
          return true;
        }
      }

      return false;
    });
  };

  return {
    todos: todos(),
    search: state.todos.searchTerm,
  };
};

const mapDispatchToProps = () => {
  return {};
};

const TodoList = connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoListComponent);

export default TodoList;
