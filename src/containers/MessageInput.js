import React from "react";
import store from "../store";
import { setTypingValue } from "../actions/index";
import { sendMessage } from "../actions/index";
import { connect } from "react-redux";

import "./MessageInput.css";

const MessageInput = ({ typing }) => {
	const handleChange = (e) => {
		store.dispatch(setTypingValue(e.target.value));
	};
	const handleSubmit = (e) => {
		if (e.keyCode === 13 && (e.metaKey || e.ctrlKey)) {
			store.dispatch(sendMessage(store.getState()["activeUserId"], typing));
			store.dispatch(setTypingValue(""));
		}
	};
	return (
		<div className="message-input-wrapper">
			<label htmlFor="msgInput">Message: </label>
			<textarea
				type="text"
				className="message-input-textarea"
				id="msgInput"
				onChange={handleChange}
				onKeyDown={handleSubmit}
				value={typing}
				placeholder={"Press Cmd + Enter (Ctrl + Enter on Win) to send message"}
			></textarea>
			{/* <button className="message-send-btn">SEND MESSAGE</button> */}
		</div>
	);
};

const mapStateToProps = (state) => {
	return {
		user: state.user,
		messages: state.messages,
		contacts: state.contacts,
		activeUserId: state.activeUserId,
		typing: state.typing,
	};
};

export default connect(mapStateToProps)(MessageInput);
