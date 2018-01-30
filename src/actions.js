const api = {
  url: "https://hoopla-ws-dev.hoopladigital.com/kinds/7/titles/featured",
  options: { headers: { "ws-api": "2.1" } }
};

export const FETCH_MOVIES_REQUEST = "FETCH_MOVIES_REQUEST";
export const FETCH_MOVIES_RECEIVE = "FETCH_MOVIES_RECEIVE";
export const FETCH_MOVIES_ERROR = "FETCH_MOVIES_ERROR";

export const fetchMovies = () => async dispatch => {
  try {
    dispatch({ type: FETCH_MOVIES_REQUEST });
    const response = await fetch(api.url, api.options);
    const payload = await response.json();
    dispatch({ type: FETCH_MOVIES_RECEIVE, payload });
  } catch (error) {
    dispatch({ type: FETCH_MOVIES_ERROR, payload: error.message });
  }
};
