import React from "react";
import "./index.css";
import store from "./store/index";
import App from "./containers/App";
// import registerServiceWorker from "./registerServiceWorker";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import reportWebVitals from "./reportWebVitals";

const container = document.getElementById("root");
const root = createRoot(container);

root.render(
	<React.StrictMode>
		{/* {fancyLog()} */}
		<Provider store={store}>
			<App />
		</Provider>
	</React.StrictMode>
);

function fancyLog() {
	console.log("%c Rendered with 👉 👉👇", "background: purple; color: #FFF");
	console.log(store.getState());
}

// below is old way to subscribe store, it didn't work
// every time the store is updated, the render() function is invoked

// const render = () => {
// 	fancyLog();
// 	return root.render(<App />);
// };
// render();
// store.subscribe.render();

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
