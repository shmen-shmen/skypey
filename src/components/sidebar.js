import React, { useState } from "react";
import User from "../containers/User";
import "./Sidebar.css";

const Sidebar = (props) => {
	const contacts = props.contacts;
	return (
		<aside className="Sidebar">
			{contacts.map((contact) => {
				return <User user={contact} key={contact["user_id"]} />;
			})}
		</aside>
	);
};

export default Sidebar;
