import React from "react";
import { useState } from "react";
import _ from "lodash";

const Message = ({ message, messageRemover, messageEditor }) => {
	const [removeBtnId, setRemoveBtnId] = useState("");
	const [showMessageMenu, setshowMessageMenu] = useState(false);

	const showMessageRemoveBtn = (messageNumber) => {
		setRemoveBtnId(messageNumber);
	};
	const hideMessageRemoveBtn = () => {
		setRemoveBtnId("");
		setshowMessageMenu(false);
	};
	const messageMenu = () => {
		setshowMessageMenu(!showMessageMenu);
	};

	const isUserMsg = message.is_user_msg.toString();

	return (
		<div
			className={"isUserMsg_" + isUserMsg}
			onMouseOver={() => showMessageRemoveBtn(message.number)}
			onMouseLeave={() => hideMessageRemoveBtn()}
		>
			{removeBtnId === message.number ? (
				<div className="message-menu-wrapper" onClick={messageMenu}>
					<button className="message-btn message-menu-btn">[...]</button>
					{showMessageMenu ? (
						<>
							<button
								className="message-btn message-edit-btn"
								onClick={() => messageEditor(message.text, message.number)}
							>
								[edit]
							</button>
							<button
								className="message-btn message-remove-btn"
								onClick={() => messageRemover(message.number)}
							>
								[delete]
							</button>
						</>
					) : null}
				</div>
			) : null}
			<span className="message-text">{message.text}</span>
		</div>
	);
};

export default Message;
