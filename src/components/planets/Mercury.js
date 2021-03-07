import React from "react"
const Mercury = ({ planetRender, questionBox }) => {
	return (
		<div className="mercury">
			{planetRender > 3 ? (
				<img
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
