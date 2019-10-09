import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Redirect } from 'react-router-dom';

import CustomHeader from '../inc/header.js';
import CustomSidebar from '../inc/sidebar.js';

import { Layout } from 'antd';
const { Sider, Content, Header, Footer } = Layout;

class Dashboard extends Component {
	constructor(props) {
		super(props);

		this.state = {
			collapse: false,
			isAuth: localStorage.getItem('auth') ? true : false,
		}

		this.handleToggle = this.handleToggle.bind(this);
	}

	handleToggle() {
		const {collapse} = this.state;

		this.setState({
			collapse: !collapse,
		})
	}

	render() {

		const {isAuth, collapse} = this.state;

		if (!isAuth) {
			return <Redirect to='/login' />
		}

		console.log(collapse);

		return (
			<div>
				<Layout>
					<Sider width={250} style={{ height: '100vh', backgroundColor: '#000000'}} trigger={null} collapsible collapsed={collapse}>
						<CustomSidebar />
					</Sider>
					<Layout>
						<Header style={{ background: '#fff', padding: 0 }}><CustomHeader handleToggle={this.handleToggle} /></Header>
						<Content>Content</Content>
					</Layout>
				</Layout>
			</div>
		)
	}
}

export default Dashboard;