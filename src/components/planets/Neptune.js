import React from "react"
import "./VectorStyles.css"
const Neptune = ({ planetRender, questionBox }) => {
	return (
		<div className="neptune">
			{planetRender > 7 ? (
				<img className="vector"
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
