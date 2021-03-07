import React from "react"
const Neptune = ({ currentNumber, questionBox }) => {
	return (
		<div className="neptune">
			{currentNumber > 8 ? (
				<img
					alt="Planet that was selected during game play"
					src={questionBox[7].answer[1]}
				/>
			) : (
				<h1>?</h1>
			)}
		</div>
	)
}

export default Neptune
