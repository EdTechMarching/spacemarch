import React from "react"

const LandingPage = ({ getQuestion }) => {
	return (
		<>
			<div
				style={{
					backgroundImage: "url(https://wallpaperaccess.com/full/37637.jpg)",
					backgroundSize: '100%',
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
