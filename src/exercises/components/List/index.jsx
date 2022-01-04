import styles from "../Checkbox/styles.module.css";
import React from "react";

/**
 * ## Reusable components
 * 1. Make a reusable Button component
 * 2. Make a reusable Typography component
 * 3. Make a reusable Checkbox component
 * 4. Make a reusable List and ListItem component
 */
const List = ({ children, className, ...props }) => {
	return (
		<div>
			<ul {...props} className={[styles.List, className].join(" ")}>
				<li>{children}</li>
			</ul>
		</div>
	);
};
export default List;
