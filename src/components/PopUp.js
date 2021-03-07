import React from "react"
import "./PopUpStyles.css"

const PopUp = ({ popUpState, currentQuestion, getQuestion, handlePopUp }) => {
	const { answer, popupRight, popupImage, popupBelow } = currentQuestion

	return (
		<div id="pop-up-container">
			<div id="pop-up">
				{popUpState === "next" ? (
					<div id="pop-up-text">
						<h2>Yes, I am {answer[0]}!</h2>
						<div className="pop-up-details">
							<div className="pop-up-img">
								<img
									alt="Planet that was selected during game play"
									src={popupImage}
								/>
							</div>
							<div className="pop-up-info">
								<div>
									<p>{popupRight[0]}</p>
									<p>{popupRight[1]}</p>
									<p>{popupRight[2]}</p>
									<p>{popupRight[3]}</p>
									<p>{popupRight[4]}</p>
								</div>
								<div>{popupBelow}</div>
								<button onClick={handlePopUp} onMouseUp={getQuestion}>
									NEXT
								</button>
							</div>
						</div>
					</div>
				) : popUpState === "retry" ? (
					<h2>Try Again!</h2>
				) : null}
			</div>
		</div>
	)
}

export default PopUp
