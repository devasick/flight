import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Link, NavLink } from 'react-router-dom';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Menu, Icon } from 'antd';
import { 
	faHome, 
	faGlobeAmericas, 
	faUser, 
	faSearch, 
	faFilePowerpoint,
	faCalendarAlt,
	faBookmark,
	faBook,
	faQuestionCircle,
	faCaretRight,
	faPlane
} from '@fortawesome/free-solid-svg-icons'
import Footer from './footer.js';

import AdminLogo from '../../images/adminLogo.png';

const { SubMenu } = Menu;

class CustomSidebar extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div className="sidebar">
				<div className="logo">
					<img src={AdminLogo} />
				</div>

				<Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
					<Menu.Item key="1">
						<FontAwesomeIcon icon={faHome} />
						<span>Dashboard</span>
					</Menu.Item>
					<SubMenu
						key="2"
						title={
							<span>
								<FontAwesomeIcon icon={faGlobeAmericas} />
								<span>Point of Sale Management</span>
							</span>
						}>
						<Menu.Item key="2_1"><FontAwesomeIcon icon={faCaretRight} />Option 5</Menu.Item>
						<Menu.Item key="2_2"><FontAwesomeIcon icon={faCaretRight} />Option 6</Menu.Item>
					</SubMenu>
					<Menu.Item key="3">
						<FontAwesomeIcon icon={faUser} />
						<span>User Role Management</span>
					</Menu.Item>
					<Menu.Item key="4">
						<FontAwesomeIcon icon={faGlobeAmericas} />
						<span>Setup / Configuration</span>
					</Menu.Item>
					<SubMenu
						key="5"
						title={
							<span>
								<FontAwesomeIcon icon={faSearch} />
								<span>Search</span>
							</span>
						}>
						<Menu.Item key="5_1"><FontAwesomeIcon icon={faPlane} />Flights</Menu.Item>
					</SubMenu>
					<Menu.Item key="6">
						<FontAwesomeIcon icon={faGlobeAmericas} />
						<span>Corporates</span>
					</Menu.Item>
					<Menu.Item key="7">
						<FontAwesomeIcon icon={faFilePowerpoint} />
						<span>Preset Package</span>
					</Menu.Item>
					<Menu.Item key="8">
						<FontAwesomeIcon icon={faCalendarAlt} />
						<span>Bookings</span>
					</Menu.Item>
					<Menu.Item key="9">
						<FontAwesomeIcon icon={faBookmark} />
						<span>Accounts</span>
					</Menu.Item>
					<Menu.Item key="10">
						<FontAwesomeIcon icon={faBook} />
						<span>Report</span>
					</Menu.Item>
					<Menu.Item key="11">
						<FontAwesomeIcon icon={faQuestionCircle} />
						<span>Help</span>
					</Menu.Item>
				</Menu>

				<Footer />
			</div>
		)
	}
}

export default CustomSidebar;