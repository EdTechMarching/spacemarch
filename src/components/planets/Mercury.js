import React from "react"
const Mercury = ({ currentNumber, questionBox }) => {
	return (
		<div className="mercury">
			{currentNumber > 4 ? (
				<img
					alt="Planet that was selected during game play"
					src={questionBox[3].answer[1]}
				/>
			) : (
				<h1>?</h1>
			)}
		</div>
	)
}

export default Mercury
