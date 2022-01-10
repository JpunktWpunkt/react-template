import * as React from "react";
import { experimentalStyled as styled } from "@mui/material/styles";
import MuiButton from "@mui/material/Button";

const ButtonRoot = styled(MuiButton)(({ theme, size }) => ({
	borderRadius: 0,
	fontWeight: theme.typography.fontWeightMedium,
	fontFamily: theme.typography.h1.fontFamily,
	padding: theme.spacing(2, 4),
	fontSize: theme.typography.pxToRem(14),
	boxShadow: "none",
	"&:active, &:focus": {
		boxShadow: "none",
	},
	...(size === "small" && {
		padding: theme.spacing(1, 3),
		fontSize: theme.typography.pxToRem(13),
	}),
	...(size === "large" && {
		padding: theme.spacing(2, 5),
		fontSize: theme.typography.pxToRem(16),
	}),
}));

function Button(props) {
	return <ButtonRoot {...props} />;
}

export default Button;

/*
import styled from "styled-components";

const Button = styled.button`
	font-size: 1em;
	background: #7e212c;
	color: #fed5d9;
	border: 0.25rem solid #321e17;
	padding: 0.85em 0.75em;
	margin: 1rem;
	position: relative;
	z-index: 1;
	overflow: hidden;

	&:hover {
		color: #7e212c;
		background-color: #7e212;
		transition-property: background-color;
		transition: background-color 2s ease-in-out 1s;
		transition: all 0.35s;
		transition-duration: 2s;
	}
	&::after {
		content: "";
		background: #fed5d9;
		position: absolute;
		z-index: -1;
		padding: 0.85em 0.75em;
		display: block;
	}
	&::after {
		transition: all 0.35s;
	}
	&:hover::after {
		left: 0;
		right: 0;
		top: 0;
		bottom: 0;
		transition: all 0.35s;
	}
	&::after {
		top: 0;
		bottom: 0;
		left: -100%;
		right: 100%;
	}
`;

/!**
 * ## Reusable components
 * 1. Make a reusable Button component
 * 2. Make a reusable Typography component
 * 3. Make a reusable Checkbox component
 * 4. Make a reusable List and ListItem component
 *!/
/!*const Button = ({ children, className, ...props }) => {
	return (
		<button {...props} className={[styles.Button, className].join(" ")}>
			{children}
		</button>
	);
};*!/
export default Button;
*/
