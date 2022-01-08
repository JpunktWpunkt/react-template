import React from "react";
import { Link } from "react-router-dom";
import styles from "./styles.module.css";

const Header = ({ children, className, ...props }) => {
	return (
		<header {...props} className={[styles.Header, className].join(" ")}>
			{children}
			<nav>
				<Link className="Link" to="/portfolio/my-work">
					My-work
				</Link>
				<Link to="/portfolio/about-me">About-me</Link>
				<Link to="/portfolio/contact">contact</Link>
			</nav>
		</header>
	);
};
export default Header;
