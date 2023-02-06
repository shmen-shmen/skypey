import React from "react";
// import { Counter } from "./features/counter/Counter";
import "./App.css";
import store from "./store";
import Sidebar from "./sidebar";
import Main from "./main";
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
