import React from "react";
import { useState } from "react";
import _ from "lodash";

const Message = ({ message, messageRemover }) => {
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
					<span className="message-menu-btn">[...]</span>
					{showMessageMenu ? (
						<>
							<div
								className="message-edit-btn"
								onClick={() => messageRemover(message.number)}
							>
								[edit]
							</div>
							<div
								className="message-remove-btn"
								onClick={() => messageRemover(message.number)}
							>
								[delete]
							</div>
						</>
					) : null}
				</div>
			) : null}
			<span className="message-text">{message.text}</span>
		</div>
	);
};

export default Message;
