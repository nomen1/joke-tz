import { createStore, combineReducers, applyMiddleware } from "redux";
import appReducer from "./appReducer";
import thunkMiddleware from "redux-thunk";
import { reducer as formReducer } from "redux-form";



const reducers = combineReducers({
  app: appReducer,
  form: formReducer
});



const store = createStore(
  reducers,
  applyMiddleware(thunkMiddleware)
);





export const saveToLocalStorage = (state) => {
  try {
    const serializedState = JSON.stringify(state);
    localStorage.setItem("state", serializedState);
  } catch (e) {
    console.log(e);
  }
};

store.subscribe(() => saveToLocalStorage(store.getState().app.favJokes));
export default store;
