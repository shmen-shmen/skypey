import "./MessageInput.css";

const MessageInput = () => {
	return (
		<div className="message-input-wrapper">
			<label htmlFor="msgInput">Message: </label>
			<textarea
				type="text"
				className="message-input-textarea"
				id="msgInput"
			></textarea>
			{/* <button className="message-send-btn">SEND MESSAGE</button> */}
		</div>
	);
};

export default MessageInput;
