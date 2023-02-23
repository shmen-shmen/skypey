import store from "../store/index";
import "../components/ChatWindow.css";
import Header from "../components/Header";
import messages from "../reducers/messages";
import Dialogue from "../components/Dialogue";

export default ({ activeUserId }) => {
	const state = store.getState();
	const activeUser = state.contacts[activeUserId];
	const relevantMessages = state.messages[activeUserId];
	return (
		<div className="obshenie">
			<Header user={activeUser} />
			<Dialogue messages={relevantMessages}></Dialogue>
		</div>
	);
};
