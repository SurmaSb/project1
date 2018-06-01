import registerServiceWorker from './registerServiceWorker';
import App from './App';
import './index.css';
import createBrowserHistory from 'history/createBrowserHistory';
import  {Router, Route}  from 'react-router';
import { Provider } from 'react-redux';
import * as ReactDOM from 'react-dom';
import * as React from 'react';








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



