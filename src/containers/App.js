import React from "react";
import "./App.css";
import { connect } from "react-redux";
import Sidebar from "../components/Sidebar";
import Main from "../components/Main";
import _ from "lodash";
import { useState, useEffect } from "react";

function App(props) {
	const { contacts, user, activeUserId } = props;

	const [windowWidth, setWindowWidth] = useState(window.innerWidth);

	const windowResizeHandler = () => {
		setWindowWidth(window.innerWidth);
	};

	window.addEventListener("resize", windowResizeHandler);

	return (
		<div className="App">
			{windowWidth >= 590 ? <Sidebar contacts={_.values(contacts)} /> : null}
			<Main user={user} activeUserId={activeUserId} />
		</div>
	);
}

const mapStateToProps = (state) => {
	return {
		user: state.user,
		messages: state.messages,
		contacts: state.contacts,
		activeUserId: state.activeUserId,
		typing: state.typing,
	};
};

export default connect(mapStateToProps)(App);
