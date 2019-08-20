import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import SearchComponent from "./Search";
import { onSearch } from "../../../../actions/index";

const mapStateToProps = (state) => {
  return {
    search: state.todos.search,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    ...bindActionCreators({ onSearch }, dispatch),
  };
};

const Search = connect(
  mapStateToProps,
  mapDispatchToProps
)(SearchComponent);

export default Search;
