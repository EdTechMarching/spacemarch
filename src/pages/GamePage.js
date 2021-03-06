import React from "react"
import Question from "../components/Question"
import PlayText from "../components/PlayText"
import GuessText from "../components/GuessText"
import Radio from "../components/Radio"
import PopUp from "../components/PopUp"
import Planets from "../components/planets/Planets"

const GamePage = () => {
	return (
		<>
			<PlayText />
			<GuessText />
			<Question />
			<Radio />
			<PopUp />
			<Planets />
		</>
	)
}

export default GamePage
