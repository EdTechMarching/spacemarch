import React from "react"

const LandingPage = ({ getQuestion }) => {
	return (
		<>
			<div
				style={{
					background: "black",
					width: "100vw",
					height: "100vh"
				}}
				onClick={getQuestion}>
				<h2
					style={{
						position: "absolute",
						width: "inherit",
						height: "inherit",
						background: "transparent",
						top: "50px"
					}}>
					Let's Play
				</h2>
			</div>
		</>
	)
}

export default LandingPage
