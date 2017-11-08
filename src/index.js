import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import reducer from './reducers'
import thunk from 'redux-thunk';
import { Router } from 'react-router-dom'

import { createBrowserHistory } from 'history'

// Create a history of your choosing (we're using a browser history in this case)
const history = createBrowserHistory({})

const store = createStore(reducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
    applyMiddleware(thunk));



ReactDOM.render(
    <Provider store={store}>
        <Router onUpdate={() => window.scrollTo(0, 0)} history={history}>
            <App />
        </Router>
    </Provider>
    , document.getElementById('root'));
registerServiceWorker();
