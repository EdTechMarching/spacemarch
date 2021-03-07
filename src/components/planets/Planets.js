import React from "react"
import Earth from "./Earth"
import Jupiter from "./Jupiter"
import Mars from "./Mars"
import Mercury from "./Mercury"
import Neptune from "./Neptune"
import Saturn from "./Saturn"
import Uranus from "./Uranus"
import Venus from "./Venus"
import "./PlanetsStyle.css"

const Planets = ({ currentQuestion, planetRender, questionBox }) => {
	const { answer } = currentQuestion

	return (
		<div className="planetContainer">
			<Mercury
				answer={answer}
				planetRender={planetRender}
				questionBox={questionBox}
			/>
			<Venus
				answer={answer}
				planetRender={planetRender}
				questionBox={questionBox}
			/>
			<Earth
				answer={answer}
				planetRender={planetRender}
				questionBox={questionBox}
			/>
			<Mars
				answer={answer}
				planetRender={planetRender}
				questionBox={questionBox}
			/>
			<Jupiter
				answer={answer}
				planetRender={planetRender}
				questionBox={questionBox}
			/>
			<Saturn
				answer={answer}
				planetRender={planetRender}
				questionBox={questionBox}
			/>
			<Uranus
				answer={answer}
				planetRender={planetRender}
				questionBox={questionBox}
			/>
			<Neptune
				answer={answer}
				planetRender={planetRender}
				questionBox={questionBox}
			/>
		</div>
	)
}

export default Planets
