import React from "react"
import { connect } from "react-redux"
import { getCurrentQuestion } from "../redux/rootActions"
import "./QuestionStyles.css"

const Question = ({ currentQuestion, getQuestion }) => {
	const {
		answer,
		selection,
		hint,
		popupRight,
		popupImage,
		popupBelow
	} = currentQuestion

	const displayHint = () => {
		return (
			<>
				{currentQuestion ? <h6 className="hint0">{hint[0]}</h6> : null}
				{currentQuestion ? <h6 className="hint1">{hint[1]}</h6> : null}
				{currentQuestion ? <h6 className="hint2">{hint[2]}</h6> : null}
			</>
		)
	}

	return (
	<div className="question-container">
			{displayHint()}
			<div className="mystery-circle mt-5" onClick={getQuestion}></div>
		</div>
	)
}

const mapDispatchToProps = dispatch => ({
	getQuestion: () => dispatch(getCurrentQuestion())
})

const mapStateToProps = ({ question: { currentQuestion } }) => ({
	currentQuestion
})

export default connect(mapStateToProps, mapDispatchToProps)(Question)
