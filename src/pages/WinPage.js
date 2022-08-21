import React from "react"

const WinPage = ({ restart }) => {
	return (
		<>
			<div
				style={{
					backgroundImage: "url(https://res.cloudinary.com/tinamarieg/image/upload/v1615219947/Congratulations_-_pop-up_placement_wl6wun.png)",
					backgroundSize: 'cover',
					backgroundColor: "black",
					width: "103vw",
					height: "100vh",
					position: "fixed"
				}}
				onClick={restart}>

			</div>
		</>
	)
}

export default WinPage
