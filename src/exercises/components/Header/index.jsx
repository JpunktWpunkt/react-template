import React from "react";
import { Link } from "react-router-dom";
import styles from "./styles.module.css";

const Header = ({ children, className, ...props }) => {
	return (
		<header {...props} className={[styles.Header, className].join(" ")}>
			{children}
			<nav>
				<Link to="/portfolio/my-work">My-work</Link>
				<Link to="/portfolio/about-me">About me</Link>
			</nav>
		</header>
	);
};
export default Header;
