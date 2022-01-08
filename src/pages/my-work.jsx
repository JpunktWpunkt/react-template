import React from "react";
import Button from "../exercises/components/Button";
import Layout from "../exercises/components/Layout";
import Flex from "../exercises/components/Flex";
import Chbox from "../exercises/components/Chbox";

const MyWork = () => {
	return (
		<div>
			<Flex variant="column">
				<Layout />
				<Chbox />
			</Flex>
		</div>
	);
};
export default MyWork;
