import React from "react";
import { useState } from "react";
import _ from "lodash";

const Message = ({ message, messageRemover }) => {
	const [removeBtnId, setRemoveBtnId] = useState("");

	const showMessageRemoveBtn = (messageNumber) => {
		setRemoveBtnId(messageNumber);
	};
	const hideMessageRemoveBtn = () => {
		setRemoveBtnId("");
	};

	const isUserMsg = message.is_user_msg.toString();

	return (
		<div
			className={"isUserMsg_" + isUserMsg}
			onMouseOver={() => showMessageRemoveBtn(message.number)}
			onMouseLeave={() => hideMessageRemoveBtn()}
		>
			{removeBtnId === message.number ? (
				<div
					className="message-remove-btn"
					onClick={() => messageRemover(message.number)}
				>
					x
				</div>
			) : null}
			<span className="message-text">{message.text}</span>
		</div>
	);
};

export default Message;
