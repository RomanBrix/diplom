import React from 'react';
import {render} from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import reducers from '../redux/reducers';
import * as history from 'history';

import App from '../components';
import 'normalize.css';
import '../css/scss/main.scss';

const init = document.getElementById('mountNode');
const hashHistory = history.createHashHistory({
    basname: '',
    hashType: 'slash'
});
const browserHistory = history.createBrowserHistory;

const store = createStore(
    reducers,
    applyMiddleware(thunk)
);
render(
    <Provider store={store}>
        <App history={ hashHistory }/>
    </Provider>
    , init
);
