import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Payment from './Payment';
import HomePage from './HomePage';
import { BrowserRouter} from 'react-router-dom';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
	<BrowserRouter>
	  <HomePage />
	</BrowserRouter>, document.getElementById('root'));
registerServiceWorker();
