import React from "react"
const Jupiter = ({ currentNumber, questionBox }) => {
	return (
		<div className="jupiter">
			{currentNumber > 1 ? (
				<img
					alt="Planet that was selected during game play"
					src={questionBox[0].answer[1]}
				/>
			) : (
				<h1>?</h1>
			)}
		</div>
	)
}

export default Jupiter
