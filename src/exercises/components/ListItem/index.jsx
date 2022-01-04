import styles from "../Checkbox/styles.module.css";
import React from "react";

const ListItem = ({ children, fancy, ...rest }) => {
	console.log(rest);
	return (
		<li {...rest} className={[styles.List, className].join(" ")}>
			{marker} {children}
		</li>
	);
};
const A = {
	a: 1,
	b: 2,
	c: 3,
}; //props = a b c
console.log("A", A);

const B = {
	...A,
}; //Props = a b c
const { a, ...rest } = A; // a, Props(rest) = b c

const C = {
	...rest, // Props(rest) = a b c
};
export default ListItem;
