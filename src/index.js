import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import store from "store";
import App from "./App";
import "bootstrap/scss/bootstrap.scss";
import "assets/sass/app.scss";
import componentsValues from 'components/Blobal/'
import GlobalContext from 'components/Context/global'

ReactDOM.render(
    <GlobalContext.Provider value={componentsValues}>
        <BrowserRouter>
            <Provider store={store}>
                <App />
            </Provider>
        </BrowserRouter>
    </GlobalContext.Provider>,
    document.getElementById("root")
);