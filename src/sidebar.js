import React from "react";
// import User from "./User";
import "./Sidebar.css";

const Sidebar = (props) => {
	const contacts = props.contacts;
	return (
		<aside className="Sidebar">
			<h2>This is SIDEBAR</h2>
			{contacts.map((contact) => {
				return <User user={contact} key={contact["user_id"]} />;
			})}
		</aside>
	);
};

const User = (props) => {
	const { user, key } = props;

	return (
		<div className="User">
			<h3>{user.name}</h3>
			<img
				src={"https://thispersondoesnotexist.com/image"}
				alt={user.name + " avatar"}
			/>
		</div>
	);
};

export default Sidebar;
