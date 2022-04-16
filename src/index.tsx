import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import Counter from "./pages/counter";
import { store } from "./redux/store";

ReactDOM.render(
  <Provider store={store}>
    <React.StrictMode>
      <Counter />
    </React.StrictMode>
  </Provider>,
  document.getElementById("root")
);
