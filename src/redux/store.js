import { createStore, combineReducers, applyMiddleware } from "redux";
import appReducer from "./appReducer";
import thunkMiddleware from "redux-thunk";
import { reducer as formReducer } from "redux-form";

const saveToLocalStorage = (state) => {
  try {
    const serializedState = JSON.stringify(state);
    localStorage.setItem("state", serializedState);
  } catch (e) {
    console.log(e);
  }
};

const loadFromLocalStorage = () => {
  try {
    const serializedState = localStorage.getItem("state");
    if (serializedState === null) return undefined;
    return JSON.parse(serializedState);
  } catch (e) {
    console.log(e);
    return undefined;
  }
};

const reducers = combineReducers({
  app: appReducer,
  form: formReducer
});

const persistedState = loadFromLocalStorage();

const store = createStore(
  reducers,
  persistedState,
  applyMiddleware(thunkMiddleware)
);

store.subscribe(() => saveToLocalStorage(store.getState()));

export default store;
