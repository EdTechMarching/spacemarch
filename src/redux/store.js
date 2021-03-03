import { createStore, applyMiddleware } from "redux"
// import { createStore } from "redux"
import logger from "redux-logger"
import rootReducer from "./rootReducer"

const middelwares = [logger]

const store = createStore(rootReducer, applyMiddleware(...middelwares))
// const store = createStore(rootReducer)

export default store
