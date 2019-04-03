import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import {Provider} from 'react-redux';

import './index.css';
import Main from './pages/Main.jsx';
import initializeStore from './Store';
import * as serviceWorker from './serviceWorker';

const store = initializeStore();
ReactDOM.render(
    <Provider store={store}>
      <Router>
        <Route path='/:id?' component={Main} />
      </Router>
    </Provider>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();