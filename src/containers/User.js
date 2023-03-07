import { useState } from "react";
import store from "../store";
import { setActiveUserId } from "../actions";
import _ from "lodash";

export default ({ user }) => {
	const { name, profile_pic, status, user_id } = user;
	const messagesArr = _.values(store.getState()["messages"][user_id]);
	const lastMessage = messagesArr[messagesArr.length - 1]["text"];

	const [hovAnim, setHovAnim] = useState({});
	const mouseOver = {
		animationName: "mouseOver",
		backgroundColor: "red",
		animationDuration: "200ms",
		animationIterationCount: "1",
	};
	const mouseLeave = {
		animationName: "mouseLeave",
		backgroundColor: "transparent",
		animationDuration: "200ms",
		animationIterationCount: "1",
	};

	const handleUserClick = ({ user_id }) => {
		store.dispatch(setActiveUserId(user_id));
	};

	return (
		<div
			className="User"
			style={hovAnim}
			onMouseOver={() => {
				setHovAnim(mouseOver);
			}}
			onMouseLeave={() => {
				setHovAnim(mouseLeave);
			}}
			onClick={handleUserClick.bind(null, user)}
		>
			<div
				className="User-pic"
				style={{
					backgroundImage: `url(${profile_pic})`,
				}}
			/>
			<div className="User-info">
				<div className="User-name">
					<h3>{name}</h3>
				</div>
				<div />
				<div className="User-last-message">{lastMessage}</div>
			</div>
		</div>
	);
};
