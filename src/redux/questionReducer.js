import axios from "axios"

// State
const INITIAL_STATE = {
	questionBox: [], // spread array here
	currentQuestion: "", // get one question per currentNumber
	currentNumber: 0 //
}

let { questionBox, currentQuestion, currentNumber } = INITIAL_STATE

// fetch ////////////////////////
const fetchQuestion = () => {
	questionBox = []
	try {
		axios.get("http://localhost:4000/questions/").then(res => {
			questionBox.push(...res.data)
		})
	} catch (e) {
		console.log("NOTHING FOUND")
	}
}

// get ////////////////////////
const getQuestion = () => {
	currentQuestion = questionBox[currentNumber]
	if (currentQuestion === "") {
		return null
	} else if (currentNumber !== questionBox.length - 1) {
		currentNumber++
	}
	return { ...currentQuestion }
}

fetchQuestion() // init fetch

// return state
const questionReducer = (state = INITIAL_STATE, action) => {
	switch (action.type) {
		case "GET_QUESTION":
			return {
				currentQuestion: getQuestion()
			}

		default:
			return {
				...state
			}
	}
}

export default questionReducer
