import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import Filter from "./Filter";
import { toggleAll, setVisibilityFilter } from "../../../../actions/index";

const mapStateToProps = (state) => {
  return {
    remainTask: state.todos.todos.filter((item) => !item.isComplete).length,
    filter: state.todos.filter,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    ...bindActionCreators({ toggleAll, setVisibilityFilter }, dispatch),
  };
};

const index = connect(
  mapStateToProps,
  mapDispatchToProps
)(Filter);

export default index;
