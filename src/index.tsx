import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { store } from "./app/store";
import RoutesConfig from "./RoutesConfig";

ReactDOM.render(
  <Provider store={store}>
    <React.StrictMode>
      <RoutesConfig />
    </React.StrictMode>
  </Provider>,
  document.getElementById("root")
);
