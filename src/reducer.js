import * as R from "ramda";

const requestStates = {
  start: { receiving: true, error: null },
  done: { receiving: false, error: null },
  error: error => ({ receiving: false, error })
};

const actionFns = {
  FETCH_MOVIES_REQUEST: state =>
    R.merge(state, { request: requestStates.start }),

  FETCH_MOVIES_RECEIVE: (state, movies) =>
    R.merge(state, { request: requestStates.done, movies }),

  FETCH_MOVIES_ERROR: (state, error) =>
    R.merge(state, { request: requestStates.error(error) })
};

const reducer = (state = {}, action) => {
  return R.has(action.type, actionFns)
    ? actionFns[action.type](state, action.payload)
    : state;
};

export default reducer;
