import React from "react"
import { Button } from "react-bootstrap"
import "./QuestionStyles.css"

const Question = () => {
	return (
		<div className="question-container">
			<div className="mystery-circle mt-5"></div>
			<Button variant="primary">Hello</Button>
		</div>
	)
}

export default Question
