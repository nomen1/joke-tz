import ReactDOM from "react-dom";
import store from "./redux/store";
import React from "react";
import App from "./App/App";
import './index.css';
import * as serviceWorker from './serviceWorker';
import {BrowserRouter} from "react-router-dom"
import {Provider} from "react-redux"



    ReactDOM.render (
        <BrowserRouter>
        <Provider store={store}>
        <App/>
        </Provider>
        </BrowserRouter>, document.getElementById('root'))
    


serviceWorker.unregister();
