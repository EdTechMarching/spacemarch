import React from "react"
const Saturn = ({ currentNumber, questionBox }) => {
	return (
		<div className="saturn">
			{currentNumber > 2 ? (
				<img
					alt="Planet that was selected during game play"
					src={questionBox[1].answer[1]}
				/>
			) : (
				<h1>?</h1>
			)}
		</div>
	)
}

export default Saturn
