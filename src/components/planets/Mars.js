import React from "react"
import "./VectorStyles.css"
const Mars = ({ planetRender, questionBox }) => {
	return (
		<div className="mars">
			{planetRender > 2 ? (
				<img className="vector"
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
