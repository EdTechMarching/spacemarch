import React from "react"
import { connect } from "react-redux"
import { getCurrentQuestion } from "../redux/rootActions"
import "./QuestionStyles.css"

const Question = ({ currentQuestion, getQuestion }) => {
	return (
		<div className="question-container">
			<div className="mystery-circle mt-5"></div>
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
