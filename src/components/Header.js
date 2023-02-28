import { useState } from "react";
import "../components/Header.css";

const Header = ({ user }) => {
	const { email, name, profile_pic, status, user_id } = user;

	// const [statusDisplay, setStatusDisplay] = useState("block");

	// const statusHider = () => {
	// 	setStatusDisplay("none");
	// };

	return (
		<header
			className="active-user-info"
			// onScroll={statusHider}
		>
			<div className="active-user-name">
				now talking to: <h2>{name}</h2>
			</div>
			<p className="active-user-status">
				{status}
				{/* style={{ display: statusDisplay }} */}
			</p>
			<div className="header-bottom-shader"></div>
		</header>
	);
};

export default Header;
