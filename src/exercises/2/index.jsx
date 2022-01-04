import React from "react";
import Card from "./card";

/**
 * ## Cards
 * 1. Reuse the card from the previous exercise
 * - Create a reusable component with these properties:
 *   - headline
 *   - description
 *   - image
 *
 * 2. Create a Responsive Grid with 5 cards
 * - ! Make sure that there are no errors about the `key` property in the web-console
 */

const items = Array.from({ length: 5 }, () => {
	return {
		headline: "Mountains",
		description:
			"Weit hinten, hinter den Wortbergen, fern der Länder Vokalien und Konsonantien leben die Blindtexte. Abgeschieden wohnen sie in Buchstabhausen an der Küste des Semantik, eines großen Sprachozeans. Ein kleines Bächlein namens Duden fließt durch ihren Ort und versorgt sie mit den nötigen Regelialien. Es ist ein paradiesmatisches Land, in dem einem gebratene Satzteile in den Mund fliegen. Nicht einmal von der allmächtigen Interpunktion werden die Blindtexte beherrscht – ein geradezu unorthographisches Leben.",
		image: "https://images.unsplash.com/photo-1465056836041-7f43ac27dcb5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=871&q=80",
	};
});

const Exercise = () => {
	return <h1>Exercise 2</h1>;

	return (
		<div>
			{items.map((item) => {
				return (
					<Card
						headline={item.headline} //property übergeben, hier könnte auch Currywurst stehen
						description={item.description}
						image={item.image}
					/>
				);
			})}
		</div>
	);
};

export default Exercise;
