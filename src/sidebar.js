import React, { useEffect, useState } from "react";
// import User from "./User";
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

const User = ({ user }) => {
	const { name, profile_pic, status } = user;
	const [background, setBackround] = useState("");
	return (
		<div
			className="User"
			style={{ backgroundColor: `${background}` }}
			onMouseOver={() => {
				setBackround("red");
			}}
			onMouseLeave={() => {
				setBackround("");
			}}
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
				<span className="User-status">{status}</span>
			</div>
		</div>
	);
};

export default Sidebar;
