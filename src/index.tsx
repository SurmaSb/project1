import createBrowserHistory from 'history/createBrowserHistory';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {Route, Router, Switch} from 'react-router';
import About from './About';
import App from './App';
import './index.css';
import registerServiceWorker from './registerServiceWorker';
import {store} from "../node_modules/@state-sync/Store";

const browserHistory = createBrowserHistory();


ReactDOM.render((
        <Provider store={store}>

            <Router history={browserHistory}>
                <Switch>


                    <Route path="/" component={App}/>
                    <Route path="/About" component={About}/>
                </Switch>

            </Router>
        </Provider> ),


    document.getElementById('root') as HTMLElement
);


registerServiceWorker();