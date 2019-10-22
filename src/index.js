import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { createStore } from "redux";
import { Provider } from "react-redux";
import App from "./App";
import formReducer from "./reducers";
import FVComponent from "./components/FVComponent";
import * as serviceWorker from "./serviceWorker";

const store = createStore(formReducer);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
