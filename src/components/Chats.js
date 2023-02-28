import "../components/Chats.css";

const Dialogue = ({ messages }) => {
	return (
		<section className="chats">
			{messages.map((message) => {
				const isUserMsg = message.is_user_msg.toString();
				return (
					<div className={"isUserMsg_" + isUserMsg} key={message.number}>
						{/* <p className="message-arrow">{">"}</p> */}
						<span className="message-text">{message.text}</span>
					</div>
				);
			})}
		</section>
	);
};

export default Dialogue;
