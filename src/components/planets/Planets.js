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

const Planets = ({ currentQuestion, currentNumber, questionBox }) => {
	const { answer } = currentQuestion

	return (
		<div className="planetContainer">
			<Mercury
				answer={answer}
				currentNumber={currentNumber}
				questionBox={questionBox}
			/>
			<Venus
				answer={answer}
				currentNumber={currentNumber}
				questionBox={questionBox}
			/>
			<Earth
				answer={answer}
				currentNumber={currentNumber}
				questionBox={questionBox}
			/>
			<Mars
				answer={answer}
				currentNumber={currentNumber}
				questionBox={questionBox}
			/>
			<Jupiter
				answer={answer}
				currentNumber={currentNumber}
				questionBox={questionBox}
			/>
			<Saturn
				answer={answer}
				currentNumber={currentNumber}
				questionBox={questionBox}
			/>
			<Uranus
				answer={answer}
				currentNumber={currentNumber}
				questionBox={questionBox}
			/>
			<Neptune
				answer={answer}
				currentNumber={currentNumber}
				questionBox={questionBox}
			/>
		</div>
	)
}

export default Planets
