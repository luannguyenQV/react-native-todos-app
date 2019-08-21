import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import TodoItem from "./TodoItem";
import { toggleTodo, deleteTodo } from "../../../../actions/index";

const mapStateToProps = (state) => {
  return {
    tags: state.tags,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    ...bindActionCreators({ toggleTodo, deleteTodo }, dispatch),
  };
};

const index = connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoItem);

export default index;
