import React from "react"


const LandingPage = ({ getQuestion }) => {
	return (
		<>
			<div
				style={{
					backgroundImage: "url(https://res.cloudinary.com/tinamarieg/image/upload/v1615164464/Landing_Page_ctuuze.png)",
					backgroundSize: '100%',
					width: "100vw",
					height: "100vh"
				}}
				onClick={getQuestion}>

				<h1
					style={{
						position: "absolute",
						fontSize: "56px",
						width: "100vw",
						height: "100vh",
						textAlign: "center",
						background: "transparent",
						color: "white",
						top: "100px"
					}}>
					Play Planets
				</h1>
				<h2
					style={{
						position: "absolute",
						width: "inherit",
						height: "inherit",
						background: "transparent",
						top: "250px"
					}}>
					Let's Play!
				</h2>
			</div>
		</>
	)
}

export default LandingPage
