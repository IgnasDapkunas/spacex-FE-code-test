import React from "react";
import ReactDOM from "react-dom";
import { createStore } from "redux";
import { Provider } from "react-redux";
import "./index.css";
import App from "./App";
import reducer from "./redux/reducer";

const initialStore = {
  loading: true,
  data: [],
  favourites: [],
  apiUrl: "https://api.spacexdata.com/v2",
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
