import React from "react";
import styles from "./styles.module.css";

//andere Schreibweise anstelle von (props) auch ({headline,description,image}) man entfernt dann überall das props
const Card =
	() =>
	({ children, className, ...props }) => {
		return (
			<card>
				<div>
					<h3>{props.headline}</h3>
				</div>
			</card>
		);
	};

export default Card;
