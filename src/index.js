import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(React.createElement(
    React.StrictMode,
    null,
    React.createElement(App, null)
), document.getElementById('root'));

serviceWorker.register();