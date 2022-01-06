import React from "react";
import Button from "../components/Button";
import List from "../components/List";
import ListItem from "../components/ListItem";
import Checkbox from "../components/Checkbox";
import "./style.css";

/**
 * ## Reusable components
 * 1. Make a reusable Button component
 * 2. Make a reusable Typography component
 * 3. Make a reusable Checkbox component
 * 4. Make a reusable List and ListItem component
 */

const Exercise = () => {
	//wird erstellt
	return (
		<div>
			<Button className="Juhuu">
				<h3>Button A</h3>
			</Button>{" "}
			{/*Weg 1,das ist ein Childreen, wird automatisch übergeben, HTML*/}
			{/*<Button buttontext="test" /> Weg 2 hier kann kein Children übergeben werden */}
			<Button className="Baum">
				<h3>Button B</h3>
			</Button>{" "}
			<div>
				<Checkbox>Checkbox A</Checkbox>
				<Checkbox>Checkbox B</Checkbox>
				<Checkbox>Checkbox C</Checkbox>
				<Checkbox>Checkbox D</Checkbox>
			</div>
			{/*			<div>
				<Checkbox label"" onchance={(event_) =>
				console.log(event_.target.checked);
				}
				/>
			<Checkbox>Checkbox B</Checkbox>
			<Checkbox>Checkbox C</Checkbox>
			<Checkbox>Checkbox D</Checkbox>
		</div>*/}
			<List>
				<listItem>ich bin ein ListItem</listItem>
				<li>ich bin nur ein li</li>
				<li>C</li>
				<li>C</li>
			</List>
			<List>
				<li>A</li>
				<li>B</li>
				<li>C</li>
				<li>C</li>
			</List>
		</div>
	);
};

export default Exercise; //wird ausgegeben
