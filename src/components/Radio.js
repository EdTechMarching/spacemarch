import React from "react"
import "./RadioStyles.css"

const Radio = ({ currentQuestion, handlePopUp, popUpState }) => {
	const { answer, selection } = currentQuestion

	let [s0, s1, s2] = [""]

	if (currentQuestion) {
		s0 = selection[0]
		s1 = selection[1]
		s2 = selection[2]
	}

	const checkAnswer = e => {
		if (e.target.value === answer[0]) {
			return handlePopUp("true")
		}
		return handlePopUp("false")
	}

	const view = () => {
		return (
			<div className="answer-options">
				<label htmlFor={s0}>
					<input
						type="radio"
						value={s0}
						name="selection"
						onClick={checkAnswer}
					/>
					{s0}
				</label>
				<br />
				<label htmlFor={s1}>
					<input
						type="radio"
						value={s1}
						name="selection"
						onClick={checkAnswer}
					/>
					{s1}
				</label>
				<br />
				<label htmlFor={s2}>
					<input
						type="radio"
						value={s2}
						name="selection"
						onClick={checkAnswer}
					/>
					{s2}
				</label>
				<br />
			</div>
		)
	}
	const resetRadioButton = () => {
		if (popUpState === null) {
			return view()
		} else if (popUpState === "retry") {
			return view()
		} else if (popUpState === "next") {
			return view()
		}
	}

	return <div id="answer-container">{resetRadioButton()}</div>
}

export default Radio
