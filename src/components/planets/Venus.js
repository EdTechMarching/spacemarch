import React from "react"
import "./VectorStyles.css"
const Venus = ({ planetRender, questionBox }) => {
	return (
		<div className="venus">
			{planetRender > 5 ? (
				<img className="vector"
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
