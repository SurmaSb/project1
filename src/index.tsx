import App from './App';
import createBrowserHistory from 'history/createBrowserHistory';
import registerServiceWorker from './registerServiceWorker';

import * as ReactDOM from 'react-dom';
import * as React from 'react';
import  {Provider } from 'react-redux';
import  {Router, Route}  from 'react-router';
import './index.css';







const browserHistory = createBrowserHistory();



ReactDOM.render( (
        <Provider>

            <Router history={browserHistory}>

                <Route path="/" component={App}/>
            </Router>
        </Provider>),


    document.getElementById('root') as HTMLElement
);



registerServiceWorker();
