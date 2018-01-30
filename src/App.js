import React from "react";
import { Provider } from "react-redux";
import store from "./store";
import Container from "./Container";

const App = () => (
  <Provider store={store}>
    <Container />
  </Provider>
);

export default App;
