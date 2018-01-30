import * as R from "ramda";
import { compose, lifecycle } from "recompose";
import { connect } from "react-redux";
import { fetchMovies } from "./actions";
import List from "./List";

const mapDispatchToProps = (dispatch, { lag, error }) => ({
  fetch: () => dispatch(fetchMovies({ lag, error }))
});

const mapStateToProps = R.pick(["movies", "request"]);

const Container = compose(
  connect(null, mapDispatchToProps),
  lifecycle({
    componentWillMount() {
      this.props.fetch();
    }
  }),
  connect(mapStateToProps)
)(List);

export default Container;
