import React from 'react';
import ReactDOM from 'react-dom';
import { App } from './App';
import registerServiceWorker from './registerServiceWorker';

import { Provider } from 'react-redux'
import { Router } from 'react-router-dom'

import { createBrowserHistory } from 'history'
import { store } from './createStore'

// Create a history of your choosing (we're using a browser history in this case)
const history = createBrowserHistory({})


ReactDOM.render(
    <Provider store={store}>
        <Router onUpdate={() => window.scrollTo(0, 0)} history={history}>
            <App />
        </Router>
    </Provider>
    , document.getElementById('root'));
registerServiceWorker();
