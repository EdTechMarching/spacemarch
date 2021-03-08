import React from "react"

const WinPage = ({ restart }) => {
	return (
		<>
			<div
				style={{
					backgroundImage: "url(https://res.cloudinary.com/tinamarieg/image/upload/v1615164466/Congratulations_Pop-up_TEXT_jaefeg.png)",
					backgroundSize: '100%',
					backgroundColor: "black",
					width: "107vw",
					height: "100vh",
					position: "fived"
				}}
				onClick={restart}>
			
			</div>
		</>
	)
}

export default WinPage
