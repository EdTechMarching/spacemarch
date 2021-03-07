import React from "react"
import "./VectorStyles.css"
const Mercury = ({ planetRender, questionBox }) => {
	return (
		<div className="mercury">
			{planetRender > 3 ? (
				<img className="vector"
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
