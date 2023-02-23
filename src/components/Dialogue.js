import _ from "lodash";
import "../components/Dialogue.css";

const Dialogue = ({ messages }) => {
	messages = _.values(messages);

	return (
		<section className="dialogue">
			{messages.map((message) => {
				const isUserMsg = message.is_user_msg.toString();
				return (
					<div className={"isUserMsg_" + isUserMsg}>
						<p className="pureStyle">{">"}</p>
						<span className="message-text">{message.text}</span>
					</div>
				);
			})}
		</section>
	);
};

export default Dialogue;
