import React from "react"
const Venus = ({ planetRender, questionBox }) => {
	return (
		<div className="venus">
			{planetRender > 5 ? (
				<img
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
