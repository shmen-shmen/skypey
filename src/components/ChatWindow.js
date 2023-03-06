import store from "../store/index";
import "../components/ChatWindow.css";
import Header from "../components/Header";
import Chats from "../containers/Chats";
import MessageInput from "../containers/MessageInput";
import _ from "lodash";

export default ({ activeUserId }) => {
	const state = store.getState();
	const { typing } = state;
	const activeUser = state.contacts[activeUserId];
	// const activeMessages = state.messages[activeUserId];
	// console.log("ACTIVE MESSAGES FROM CHATWINDOW.JS––", activeMessages);

	return (
		<div className="obshenie">
			<Header user={activeUser} />
			{/* <Chats activeMessages={activeMessages}></Chats> */}
			<Chats activeUserId={activeUserId}></Chats>
			<MessageInput value={typing} />
		</div>
	);
};
