import React from "react"
const Uranus = ({ planetRender, questionBox }) => {
	return (
		<div className="uranus">
			{planetRender > 4 ? (
				<img
					alt="Planet that was selected during game play"
					src={questionBox[4].answer[1]}
				/>
			) : (
				<h1>?</h1>
			)}
		</div>
	)
}

export default Uranus
