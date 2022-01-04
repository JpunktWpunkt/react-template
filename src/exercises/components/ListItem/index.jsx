import styles from "../Checkbox/styles.module.css";
import React from "react";

/**
 * ## Reusable components
 * 1. Make a reusable Button component
 * 2. Make a reusable Typography component
 * 3. Make a reusable Checkbox component
 * 4. Make a reusable List and ListItem component
 */
const ListItem = ({ children, className, ...props }) => {
	return (
		<div>
			<li {...props} className={[styles.ListItem, className].join(" ")}>
				{marker}
				{children}
			</li>
		</div>
	);
};
export default ListItem;
