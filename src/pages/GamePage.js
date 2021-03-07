import React, { useState } from "react"
import { connect } from "react-redux"
import { getCurrentQuestion } from "../redux/rootActions"
import Question from "../components/Question"
import PlayText from "../components/PlayText"
import GuessText from "../components/GuessText"
import Radio from "../components/Radio"
import PopUp from "../components/PopUp"
import Planets from "../components/planets/Planets"

const GamePage = ({ currentQuestion, getQuestion }) => {
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
			<Planets currentQuestion={currentQuestion} popUpState={popUpState} />
		</>
	)
}

const mapDispatchToProps = dispatch => ({
	getQuestion: () => dispatch(getCurrentQuestion())
})

const mapStateToProps = ({ question: { currentQuestion } }) => ({
	currentQuestion
})

export default connect(mapStateToProps, mapDispatchToProps)(GamePage)
