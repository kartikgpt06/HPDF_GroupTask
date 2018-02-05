import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Payment from './Payment';
import HomePage from './HomePage'
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<HomePage />, document.getElementById('root'));
registerServiceWorker();
