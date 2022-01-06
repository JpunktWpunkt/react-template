import React from "react";
import styles from "./styles.module.css";

/**
 * ## Reusable components
 * 1. Make a reusable Button component
 * 2. Make a reusable Typography component
 * 3. Make a reusable Checkbox component
 * 4. Make a reusable List and ListItem component
 */
const Checkbox = ({ children, className, ...props }) => {
	return (
		<div>
			<input
				type="checkbox"
				id="input"
				{...props}
				className={[styles.Checkbox, className].join(" ")}
			/>
			<label for="input">{children}</label>
		</div>
	);
};
export default Checkbox;

/*const Checkbox =({label, ...props}) => {
	return (
		<label>
			<div>{label}</div>
			<input {...props} className={[styles.Input]} type="checkbox" />
			<div className={styles.Check} />
			</div>
		</label>
	);
};*/
