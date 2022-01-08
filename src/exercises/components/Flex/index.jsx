import React from "react";
import styles from "./styles.module.css";

const Flex = ({ children, variants, ...props }) => {
	return (
		<div {...props} className={[styles.Flex, styles[variants]].join(" ")}>
			{children}
		</div>
	);
};
export default Flex;
