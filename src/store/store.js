import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import { authReducer } from "../reducers/authReducer";
import { carReducer } from "../reducers/carReducer";
import { generalReducer } from "../reducers/generalReducer";
import { uiReducer } from "../reducers/uiReducer";

const composeEnhancers =
  (typeof window !== "undefined" &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) ||
  compose;

const reducers = combineReducers({
  auth: authReducer,
  ui: uiReducer,
  general: generalReducer,
  car: carReducer,
});

export const store = createStore(
  reducers,
  composeEnhancers(applyMiddleware(thunk))
);
