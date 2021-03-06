import axios from "axios"

// State
const INITIAL_STATE = {
	trashBox: [], // push array here
	questionBox: [], // spread array here
	currentQuestion: [], // get one question per currentNumber
	currentNumber: 0 //
}

let { trashBox, questionBox, currentQuestion, currentNumber } = INITIAL_STATE

//model example
// array:[{question: String,
// answer: String,
// selection: [{name: String, image:String}, {name: String, image:String}, {name: String, image:String}],
// hint: [String x3] x8]

// fetch ////////////////////////
const fetchQuestion = () => {
	questionBox = []
	axios.get("/question").then(res => {
		const randQuestion = Math.floor(Math.random() * res.data.length)
		if (trashBox.length) {
			if (trashBox.indexOf(res.data[randQuestion]._id) === -1) {
				questionBox.push(res.data[randQuestion])
				trashBox.push(res.data[randQuestion]._id)
				getQuestion()
			} else {
				fetchQuestion()
			}
		} else {
			questionBox.push(res.data[randQuestion])
			trashBox.push(res.data[randQuestion]._id)
			getQuestion()
		}
	})
}

// get ////////////////////////
const getQuestion = () => {
	currentQuestion = [questionBox[currentNumber]]
	currentNumber++
	return currentQuestion
}

fetchQuestion() // init fetch

// return state
const questionReducer = (state = INITIAL_STATE, action) => {
	switch (action.type) {
		case "GET_QUESTION":
			return {
				...getQuestion()
			}

		default:
			return {
				...state
			}
	}
}

export default questionReducer
