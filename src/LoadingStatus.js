import React from "react";
import PropTypes from "prop-types";
import glamorous, { Div } from "glamorous";
import { branch, renderNothing, compose, setPropTypes } from "recompose";
import { BarLoader } from "react-spinners";

const notLoading = props => !(props.receiving || props.error);
const hideUnlessLoading = branch(notLoading, renderNothing);

const ErrorWrapper = glamorous.div({
  backgroundColor: "LemonChiffon",
  border: "1px solid #ccc",
  padding: "1rem"
});

const LoadingStatus = props => (
  <Div
    display="flex"
    height="100vh"
    alignItems="center"
    justifyContent="center"
  >
    {props.receiving ? (
      <BarLoader width={200} height={20} loading={true} />
    ) : (
      <ErrorWrapper>{props.error}</ErrorWrapper>
    )}
  </Div>
);

const enhance = compose(
  setPropTypes({
    receiving: PropTypes.bool,
    error: PropTypes.string
  }),
  hideUnlessLoading
);

export default enhance(LoadingStatus);
