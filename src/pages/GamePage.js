import React from "react"

import Question from "../components/Question"
import Radio from "../components/Radio"
import PopUp from "../components/PopUp"
import Planets from "../components/planets/Planets"


const GamePage = () => {
	return (
		<>
			<Question />
			<Radio />
			<PopUp />
			<Planets />
		</>
	)
}

export default GamePage
