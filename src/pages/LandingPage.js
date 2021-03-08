import React from "react"


const LandingPage = ({ getQuestion }) => {
	return (
		<>
			<div
				style={{
					backgroundImage: "url(https://res.cloudinary.com/tinamarieg/image/upload/v1615164464/Landing_Page_ctuuze.png)",
					backgroundSize: 'cover',
					width: "100vw",
					height: "100vh",
					position: "fixed"
				}}
				onClick={getQuestion}>

				<img
					src="https://res.cloudinary.com/tinamarieg/image/upload/v1615216922/PlayPlanetsWhite_in5bdt.png"
					alt="Play Planets Logo"
					style={{
						background: "transparent",
						position: "absolute",
						marginLeft: "25%",
						marginTop: "60px"
					}}
					/>

				<h2
					style={{
						position: "absolute",
						fontSize: "56px",
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
