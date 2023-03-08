import React from "react";
import store from "../store";
import {
	sendMessage,
	editMessage,
	setTypingValue,
	setEditingValue,
} from "../actions/index";
import { connect } from "react-redux";
import { useState } from "react";

import "./MessageInput.css";

const MessageInput = () => {
	const state = store.getState();
	const { typing, editing, activeUserId } = state;

	const handleChange = (e) => {
		store.dispatch(setTypingValue(e.target.value));
	};

	const handleSubmit = (e) => {
		if (e.keyCode === 13 && (e.metaKey || e.ctrlKey)) {
			if (editing) {
				store.dispatch(editMessage(activeUserId, editing, typing));
				store.dispatch(setEditingValue(false));
				store.dispatch(setTypingValue(""));
			} else {
				if (typing) {
					store.dispatch(sendMessage(activeUserId, typing));
					store.dispatch(setTypingValue(""));
				}
			}
		}
	};
	const cancelEditing = () => {
		store.dispatch(setEditingValue(false));
		store.dispatch(setTypingValue(""));
		setEditingSubmenu("EDITING");
	};

	const [editingSubMenu, setEditingSubmenu] = useState("EDITING");
	const showEitingSubmenu = () => {
		setEditingSubmenu("CANCEL EDITING");
	};
	const hideEitingSubmenu = () => {
		setEditingSubmenu("EDITING");
	};

	return (
		<div className="message-input-wrapper">
			<>
				{editing ? (
					<span
						className="message-input-label message-input-editing"
						onMouseOver={showEitingSubmenu}
						onMouseLeave={hideEitingSubmenu}
						onClick={cancelEditing}
					>
						{editingSubMenu}:
					</span>
				) : (
					<div className="message-input-label">MESSAGE:</div>
				)}
			</>
			<textarea
				type="text"
				className="message-input-textarea"
				id="msgInput"
				onChange={handleChange}
				onKeyDown={handleSubmit}
				value={typing}
				placeholder={"Press Cmd + Enter (Ctrl + Enter on Win) to send message"}
			></textarea>
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
		editing: state.editing,
	};
};

export default connect(mapStateToProps)(MessageInput);
