import * as React from 'react';
import * as ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
  <provider store='store'>

        <App />,

    </provider>
 document.getElementById('root') as HTMLElement
);
registerServiceWorker();
