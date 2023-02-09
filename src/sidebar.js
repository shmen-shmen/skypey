import React, { useEffect, useState } from "react";
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
	const { user } = props;
	console.log(user["profile_pic"]);
	return (
		<div className="User">
			<h3>{user.name}</h3>
			<div
				className="user-avatar"
				style={{
					backgroundImage: `url(${user["profile_pic"]})`,
				}}
			/>
			<div />
		</div>
	);
};

export default Sidebar;
