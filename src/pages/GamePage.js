import React, { useState } from "react"
import Question from "../components/Question"
import Radio from "../components/Radio"
import PopUp from "../components/PopUp"
import Planets from "../components/planets/Planets"

const GamePage = ({
	currentQuestion,
	getQuestion,
	planetRender,
	questionBox
}) => {
	let [popUpState, togglePopUpState] = useState(null)
	const handlePopUp = value => {
		if (value === "true") {
			return togglePopUpState((popUpState = "next"))
		} else if (value === "false") {
			return togglePopUpState((popUpState = "retry"))
		} else {
			return togglePopUpState((popUpState = null))
		}
	}

const GamePage = () => {
	return (
		<>
			<PlayText />
			<GuessText />
			<Question currentQuestion={currentQuestion} getQuestion={getQuestion} />
			<Radio
				currentQuestion={currentQuestion}
				handlePopUp={handlePopUp}
				popUpState={popUpState}
			/>
			<PopUp
				currentQuestion={currentQuestion}
				popUpState={popUpState}
				handlePopUp={handlePopUp}
				getQuestion={getQuestion}
			/>
			<Planets
				currentQuestion={currentQuestion}
				planetRender={planetRender}
				questionBox={questionBox}
			/>
		</>
	)
}

export default GamePage
