import React from "react";
import logo from "./logo.svg";
import { Counter } from "./features/counter/Counter";
import "./App.css";
import Sidebar from "./sidebar";
import Main from "./main";

function App() {
	return (
		<div className="App">
			<Sidebar />
			<Main />
		</div>
	);
}

export default App;
