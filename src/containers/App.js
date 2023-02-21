import React from "react";
import "./App.css";
import { connect } from "react-redux";
import Sidebar from "../components/sidebar";
import Main from "../components/Main";
import _ from "lodash";

function App(props) {
	const { contacts, user, activeUserId } = props;

	return (
		<div className="App">
			<Sidebar contacts={_.values(contacts)} />
			<Main user={user} activeUserId={activeUserId} />
		</div>
	);
}

const mapStateToProps = (state) => {
	return {
		contacts: state.contacts,
		user: state.user,
		activeUserId: state.activeUserId,
	};
};

export default connect(mapStateToProps)(App);
