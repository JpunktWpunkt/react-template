import React from "react";
import styles from "./styles.module.css";

const typeVariants = {
	h1: "h1",
	h2: "h2",
	h3: "h3",
	body1: "p",
};

const Typography = ({ children, component, variant }) => {
	const Component = component;
	return (
		<Component className={[styles.Typography, styles[variant]].join(" ")}>{children}</Component>
	);
};

export default Typography;
