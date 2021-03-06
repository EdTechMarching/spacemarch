import React from "react"
// import Earth from "../components/planets/Earth"
// import Jupiter from "../components/planets/Jupiter"
// import Mars from "../components/planets/Mars"
// import Mercury from "../components/planets/Mercury"
// import Neptune from "../components/planets/Neptune"
// import Saturn from "../components/planets/Saturn"
// import Uranus from "../components/planets/Uranus"
// import Venus from "../components/planets/Venus"
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
