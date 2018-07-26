import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, browserHistory, Route } from "react-router-dom";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";

import Header from "./components/header";
import require_authentication from "./components/require_authentication";
import Resources from "./components/resources";
import reducers from "./reducers";

const store = createStore(
  reducers,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter history={browserHistory}>
      <div>
        <Route exact path="/" component={Header} />
        <Route
          path="/resources"
          component={require_authentication(Resources)}
        />
        <Route path="/sign" component={Header} />
      </div>
    </BrowserRouter>
  </Provider>,

  document.querySelector(".container")
);
