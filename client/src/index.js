import React from "react";
import ReactDOM from "react-dom";
import registerServiceWorker from './registerServiceWorker';
import { Provider } from "react-redux";
import store from "./reduxToolkit/store";
import store_1 from "./store"

import "@fortawesome/fontawesome-free/css/all.min.css";
import "bootstrap-css-only/css/bootstrap.min.css";
import "mdbreact/dist/css/mdb.css";
import App from "./App";

ReactDOM.render( 
    <Provider store={store}>
        <App />
    </Provider>
, document.getElementById('root'));

registerServiceWorker();