import ReactDOM from "react-dom";
import store from "./redux/store";
import React from "react";
import App from "./App/App";
import './index.css';
import * as serviceWorker from './serviceWorker';
import {Provider} from "react-redux"



    ReactDOM.render (
        
        <Provider store={store}>
        <App/>
        </Provider>
        , document.getElementById('root'))
    


serviceWorker.unregister();
