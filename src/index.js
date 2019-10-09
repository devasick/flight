import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

import './index.scss';

import Login from './components/pages/login.js';
import Pos from './components/pages/pos.js';
import Flights from './components/pages/flights.js';
import Dashboard from './components/pages/dashboard.js';

class App extends Component {
	constructor(props) {
		super(props);
	}

	render() {

		return (
			<Router>
				<div>
					<Route path='/' exact component={ Dashboard } />
					<Route path='/pos/' exact component={ Pos } />
					<Route path='/login/' exact component={ Login } />
					<Route path='/flights/' exact component={ Flights } />
				</div>
			</Router>
		)
	}
}

if (document.getElementById('page')) {
	ReactDOM.render(<App />, document.getElementById('page'));
}