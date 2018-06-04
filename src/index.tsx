import createBrowserHistory from 'history/createBrowserHistory';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {Route, Router} from 'react-router';
import App from './App';
import './index.css';
import registerServiceWorker from './registerServiceWorker';

const browserHistory = createBrowserHistory();


ReactDOM.render((
        <Provider>

            <Router history={browserHistory}>

                <Route path="/" component={App}/>
            </Router>
        </Provider>),


    document.getElementById('root') as HTMLElement
);
fdatasync

registerServiceWorker();
