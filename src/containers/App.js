import React from "react";
import "./App.css";
import store from "../store";
import Sidebar from "../components/sidebar";
import Main from "../components/main";
import _ from "lodash";

function App() {
	const { contacts } = store.getState();
	return (
		<div className="App">
			<Sidebar contacts={_.values(contacts)} />
			<Main />
		</div>
	);
}

export default App;
