import React from "react"
const Jupiter = ({ planetRender, questionBox }) => {
	return (
		<div className="jupiter">
			{planetRender > 0 ? (
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
