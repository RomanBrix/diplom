import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import reducers from '../redux/reducers';

// import { persistStore, persistReducer } from 'redux-persist';
// import { PersistGate } from 'redux-persist/lib/integration/react';
// import storage from 'redux-presist';
// import storage from 'redux-persist/lib/storage';
// import * as history from 'history';
// import useScroll from 'scroll-behavior'

import App from '../components';
import 'normalize.css';
import '../css/scss/main.scss';

const init = document.getElementById('mountNode');
// const hashHistory = history.createHashHistory({
//     basname: '',
//     hashType: 'slash'
// });
// const browserHistory = history.createBrowserHistory;

// const persistConfig = {
//     key: 'root',
//     storage: storage,
// };
// console.log(storage);
const store = createStore(
    reducers,
    applyMiddleware(thunk)
);

// const persistReducerr = persistReducer(persistConfig, reducers);
// const store = createStore(persistReducerr, applyMiddleware(thunk));
// const persistor = persistStore(store,{},()=>{
//     console.log('downlaod ok!');
//     // location.reload();
// });

    render(
        <Provider store={store}>
            {/*<PersistGate persistor={persistor}>*/}
                <App/>
            {/*</PersistGate>*/}
        </Provider>
        , init
    );
