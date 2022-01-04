import React from "react";

//andere Schreibweise anstelle von (props) auch ({headline,description,image}) man entfernt dann überall das props
const Card = (props) => {
	const [visible, setVisible] = React.useState(true); //[Boolean,function]
	return (
		<div className="card">
			<img className="card__image" src={props.image} alt="Image of" className="card__image" />
			<div className="card__headline">
				<h3>{props.headline}</h3>
			</div>

			{visible ? <div className="card__descriptions">{props.description}</div> : null}
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

export default Card;
