import axios from "axios"

// State
const INITIAL_STATE = {
	questionBox: [], // spread array here
	currentQuestion: "", // get one question per currentNumber
	currentNumber: 0, // keeps track of how many questions already asked
	planetRender: -1, // keeps track of when to render planet after a correct answer is given
	win: false
}

let {
	questionBox,
	currentQuestion,
	currentNumber,
	planetRender,
	win
} = INITIAL_STATE

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

const restart = () => {
	currentQuestion = ""
	currentNumber = 0
	planetRender = -1
	win = false
}

// check win ////////////////
const checkWin = () => {
	if (planetRender === 8) {
		win = true
		return { ...win }
	}
}
// get ////////////////////////
const getQuestion = () => {
	currentQuestion = questionBox[currentNumber]
	if (currentNumber !== questionBox.length - 1) {
		currentNumber++
		return { ...currentQuestion, ...planetRender++, ...currentNumber }
	} else {
		return {
			...currentQuestion,
			...planetRender++,
			...currentNumber
		}
	}
}

fetchQuestion() // init fetch

// return state
const questionReducer = (state = INITIAL_STATE, action) => {
	switch (action.type) {
		case "GET_QUESTION":
			return {
				currentQuestion: getQuestion(),
				planetRender,
				questionBox,
				currentNumber,
				win: checkWin()
			}

		case "RESTART":
			restart()
			return {
				currentQuestion: getQuestion(),
				planetRender,
				questionBox,
				currentNumber,
				win: checkWin()
			}

		default:
			return {
				...state
			}
	}
}

export default questionReducer
