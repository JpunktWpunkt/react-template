import React from "react";
import "./styles.css";
/**
 * ## Card
 *  1. Create a card with an image, a headline and a description
 *  2. Add a button
 *      When the user clicks the button
 *      Then the description toggles
 *      And The button text changes
 */
const Exercise = () => {
	const [visible, setVisible] = React.useState(true); //[Boolean,function]
	return (
		<div className="card">
			<img
				className="card__image"
				src={
					"https://images.unsplash.com/photo-1465056836041-7f43ac27dcb5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=871&q=80"
				}
				alt="Image of"
				className="card__image"
			/>
			<div className="card__headline">
				<h3>Mountains</h3>
			</div>

			{visible ? (
				<div className="card__descriptions">
					<p>
						Weit hinten, hinter den Wortbergen, fern der Länder Vokalien und
						Konsonantien leben die Blindtexte. Abgeschieden wohnen sie in Buchstabhausen
						an der Küste des Semantik, eines großen Sprachozeans. Ein kleines Bächlein
						namens Duden fließt durch ihren Ort und versorgt sie mit den nötigen
						Regelialien. Es ist ein paradiesmatisches Land, in dem einem gebratene
						Satzteile in den Mund fliegen. Nicht einmal von der allmächtigen
						Interpunktion werden die Blindtexte beherrscht – ein geradezu
						unorthographisches Leben.
					</p>
				</div>
			) : null}
			<div className="card__actions">
				<button
					className="card__button"
					onClick={() => {
						console.log("irgendwas rein");
						setVisible(!visible);
					}}
				>
					{visible ? "Hide" : "Show"}
				</button>
			</div>
		</div>
	);
};

export default Exercise;
