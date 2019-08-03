import { applyMiddleware, compose, createStore } from "redux";
import reducers from "../reducers/index";
import { createBrowserHistory } from "history";
import { routerMiddleware } from "connected-react-router";

const history = createBrowserHistory();
const routeMiddleware = routerMiddleware(history);

const middlewares = [routeMiddleware];

export default function configureStore(initialState) {
  const store = createStore(
    reducers(history),
    initialState,
    compose(applyMiddleware(...middlewares))
  );
  return store;
}

export { history };
