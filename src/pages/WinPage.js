import React from "react"

const WinPage = ({ restart }) => {
	return (
		<>
			<div
				style={{
					background: "black",
					width: "100vw",
					height: "100vh"
				}}
				onClick={restart}>
				<h2
					style={{
						position: "absolute",
						width: "inherit",
						height: "inherit",
						background: "transparent",
						top: "50px"
					}}>
					You did it! Play Again!
				</h2>
			</div>
		</>
	)
}

export default WinPage
