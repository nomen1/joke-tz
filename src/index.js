import ReactDOM from "react-dom";
import store from "./redux/store";
import React from "react";
import App from "./App/App";
import './index.css';
import * as serviceWorker from './serviceWorker';
import {Provider} from "react-redux"
import {HashRouter} from "react-router-dom"



    ReactDOM.render (
        <HashRouter>
        <Provider store={store}>
        <App/>
        </Provider>
        </HashRouter>
        , document.getElementById('root'))
    


serviceWorker.unregister();
