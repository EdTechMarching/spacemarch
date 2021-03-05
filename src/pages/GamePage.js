import React from "react"
import Earth from "../components/planets/Earth"
import Jupiter from "../components/planets/Jupiter"
import Mars from "../components/planets/Mars"
import Mercury from "../components/planets/Mercury"
import Neptune from "../components/planets/Neptune"
import Saturn from "../components/planets/Saturn"
import Uranus from "../components/planets/Uranus"
import Venus from "../components/planets/Venus"
import Question from "../components/Question"
import Radio from "../components/Radio"
import PopUp from "../components/PopUp"


const GamePage = () => {
	return (
		<>
			<Question />
			<Radio />
			<PopUp />
			<Mercury />
			<Venus />
			<Earth />
			<Mars />
			<Jupiter />
			<Saturn />
			<Uranus />
			<Neptune />
		</>
	)
}

export default GamePage
