import React from "react"
const Uranus = ({ currentNumber, questionBox }) => {
	return (
		<div className="uranus">
			{currentNumber > 5 ? (
				<img
					alt="Planet that was selected during game play"
					src={questionBox[4].answer[1]}
				/>
			) : (
				<h1>?</h1>
			)}
		</div>
	)
}

export default Uranus
