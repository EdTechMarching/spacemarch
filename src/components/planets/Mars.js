import React from "react"
const Mars = ({ currentNumber, questionBox }) => {
	return (
		<div className="mars">
			{currentNumber > 3 ? (
				<img
					alt="Planet that was selected during game play"
					src={questionBox[2].answer[1]}
				/>
			) : (
				<h1>?</h1>
			)}
		</div>
	)
}

export default Mars
