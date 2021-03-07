import React from "react"
import { connect } from "react-redux"
import { getCurrentQuestion, restart } from "./redux/rootActions"

import GamePage from "./pages/GamePage"
import LandingPage from "./pages/LandingPage"
import WinPage from "./pages/WinPage"

const App = ({
	currentQuestion,
	getQuestion,
	planetRender,
	questionBox,
	currentNumber,
	restart,
	win
}) => {
	return (
		<>
			{currentNumber === 0 ? (
				<LandingPage getQuestion={getQuestion} />
			) : win ? (
				<WinPage restart={restart} />
			) : currentNumber > 0 && currentNumber < 8 ? (
				<GamePage
					currentQuestion={currentQuestion}
					getQuestion={getQuestion}
					planetRender={planetRender}
					questionBox={questionBox}
				/>
			) : null}
		</>
	)
}

const mapDispatchToProps = dispatch => ({
	getQuestion: () => dispatch(getCurrentQuestion()),
	restart: () => dispatch(restart())
})

const mapStateToProps = ({
	question: { currentQuestion, currentNumber, questionBox, planetRender, win }
}) => ({
	currentQuestion,
	currentNumber,
	questionBox,
	planetRender,
	win
})

export default connect(mapStateToProps, mapDispatchToProps)(App)
