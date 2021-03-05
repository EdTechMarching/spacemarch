import React from "react"
import "./RadioStyles.css"

const Radio = () => {

  return (
    <div id="answer-container">
      <div className="answer-options">
        <label for="Earth">
        <input type="radio" value="Earth"/>
        Earth</label><br />
        <label for="Mars">
        <input type="radio" value="Mars"/>
        Mars</label><br />
        <label for="Venus">
        <input type="radio" value="Venus"/>
        Venus</label><br />
      </div>
    </div>
  )
}

export default (Radio)
