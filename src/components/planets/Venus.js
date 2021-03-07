import React from "react"
const Venus = ({ currentNumber, questionBox }) => {
	return (
		<div className="venus">
			{currentNumber > 6 ? (
				<img
					alt="Planet that was selected during game play"
					src={questionBox[5].answer[1]}
				/>
			) : (
				<h1>?</h1>
			)}
		</div>
	)
}

export default Venus
