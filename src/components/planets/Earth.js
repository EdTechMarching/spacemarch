import React from "react"
import "./VectorStyles.css"
const Earth = ({ planetRender, questionBox }) => {
	return (
		<div className="earth">
			{planetRender > 6 ? (
				<img className="vector"
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
