import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import AddTodo from "./AddTodo";
import { addTodo, updateItem } from "../../../actions/index";

const mapStateToProps = (state) => {
  return {
    search: state.todos.search,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    ...bindActionCreators({ addTodo, updateItem }, dispatch),
  };
};

const index = connect(
  mapStateToProps,
  mapDispatchToProps
)(AddTodo);

export default index;
