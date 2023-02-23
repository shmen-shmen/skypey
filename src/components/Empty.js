import "../components/Empty.css";

export default ({ user, activeUserId }) => {
	const { name, profile_pic, status } = user;
	return (
		<div className="Empty">
			<h1 className="Empty__welcome">
				Welcome, <span>{name}</span>!{" "}
			</h1>
			<div className="Empty__user">
				<div
					className="Empty__avatar"
					style={{ backgroundImage: `url(${profile_pic})` }}
				></div>
				<div className="Empty-status">
					{/* Name: <span>{name}</span> */}
					{/* <br /> */}
					{status}
				</div>
			</div>
			<button className="Empty__btn">Start a conversation...</button>
			{/* <p className="Empty__info">
				Search for someone to start chatting with or go to Contacts to see who
				is available
			</p> */}
		</div>
	);
};
