import React from "react";
import Layout from "../exercises/components/Layout";
import Flex from "../exercises/components/Flex";
import Chbox from "../exercises/components/Chbox";

const Contact = () => {
	return (
		<div>
			<Flex variant="column">
				<Layout />
				<Chbox />
			</Flex>
		</div>
	);
};
export default Contact;
