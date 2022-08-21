import React from "react"
import "./VectorStyles.css"
const Saturn = ({ planetRender, questionBox }) => {
	return (
		<div className="saturn">
			{planetRender > 1 ? (
				<img className="vector"
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
