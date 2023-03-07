import "../components/Chats.css";
import { useEffect, useRef } from "react";
import _ from "lodash";
import store from "../store";
import { connect } from "react-redux";
import Message from "../components/Message";
import {
	removeMessage,
	setTypingValue,
	setEditingValue,
} from "../actions/index";

const Chats = ({ activeUserId }) => {
	const state = store.getState();
	const activeMessagesArr = _.values(state.messages[activeUserId]);

	const messageRemover = (messageNumber) => {
		store.dispatch(removeMessage(activeUserId, messageNumber));
	};
	const messageEditor = (messageText, messageNumber) => {
		store.dispatch(setTypingValue(messageText));
		store.dispatch(setEditingValue(messageNumber));
	};

	const chatWindowRef = useRef(null);
	useEffect(() => {
		chatWindowRef.current.scrollTop = chatWindowRef.current.scrollHeight;
	}, [activeMessagesArr]);

	return (
		<section className="chats" ref={chatWindowRef}>
			{activeMessagesArr.map((message) => {
				return (
					<Message
						key={message.number.toString().concat(message.is_user_msg)}
						messageRemover={messageRemover}
						messageEditor={messageEditor}
						message={message}
					/>
				);
			})}
		</section>
	);
};

const mapStateToProps = (state) => {
	return {
		messages: state.messages,
	};
};

export default connect(mapStateToProps)(Chats);
