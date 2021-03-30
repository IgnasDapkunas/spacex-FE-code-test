import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { createStore } from "redux";
import { Provider } from "react-redux";
import reducer from "./redux/reducer";

const initialStore = {
  loading: true,
  data: [],
  apiUrl: "https://api.spacexdata.com/v2",
  favourites: [],
};

const store = createStore(reducer, initialStore);

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
