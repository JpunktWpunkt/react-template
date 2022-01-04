import React from "react";
import styles from "./styles.module.css";

/**
 * ## Reusable components
 * 1. Make a reusable Button component
 * 2. Make a reusable Typography component
 * 3. Make a reusable Checkbox component
 * 4. Make a reusable List and ListItem component
 */
const Button = ({ children, className, ...props }) => {
	return (
		<button {...props} className={[styles.Button, className].join(" ")}>
			{children}
		</button>
	);
};
export default Button;
