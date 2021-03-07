import React from "react"
const Mars = ({ planetRender, questionBox }) => {
	return (
		<div className="mars">
			{planetRender > 2 ? (
				<img
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
