import React from "react"
import "./QuestionStyles.css"

const Question = ({ currentQuestion }) => {
	const { hint } = currentQuestion
	console.log("heroku text")
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
			<div className="mystery-circle mt-5"></div>
		</div>
	)
}

export default Question
