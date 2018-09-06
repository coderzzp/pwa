import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import workers from './workers'

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
workers()

