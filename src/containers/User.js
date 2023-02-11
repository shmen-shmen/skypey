import { useState } from "react";

export default ({ user }) => {
	const { name, profile_pic, status } = user;
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
