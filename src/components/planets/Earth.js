import React from "react"
const Earth = ({ currentNumber, questionBox }) => {
	return (
		<div className="earth">
			{currentNumber > 7 ? (
				<img
					alt="Planet that was selected during game play"
					src={questionBox[6].answer[1]}
				/>
			) : (
				<h1>?</h1>
			)}
		</div>
	)
}

export default Earth
