import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
	faBars,
} from '@fortawesome/free-solid-svg-icons'

class CustomHeader extends Component {
	constructor(props) {
		super(props);
	}

	render() {

		const {handleToggle} = this.props;

		return (
			<header>
				<div>
					<span onClick={handleToggle}><FontAwesomeIcon icon={faBars} /></span>
					<input type="text" placeholder="TRIP ID / AGENT REFERENCE" />
				</div>
			</header>
		)
	}
}

export default CustomHeader;