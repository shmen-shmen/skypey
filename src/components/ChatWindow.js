import store from "../store/index";
import "../components/ChatWindow.css";
import Header from "../components/Header";
import messages from "../reducers/messages";
import Chats from "../components/Chats";
import MessageInput from "../containers/MessageInput";
import _ from "lodash";

export default ({ activeUserId }) => {
	const state = store.getState();
	const activeUser = state.contacts[activeUserId];
	const activeMessages = state.messages[activeUserId];
	return (
		<div className="obshenie">
			<Header user={activeUser} />
			<Chats messages={_.values(activeMessages)}></Chats>
			<MessageInput />
		</div>
	);
};
