import React from "react"
import "./PopUpStyles.css"

const PopUp = () => {

  return (
    <div id="pop-up-container">
      <div id="pop-up">
        <div id="pop-up-text">
          <h2>Yes, I am Mars!</h2>
          <div className="pop-up-details">
            <div className="pop-up-img">
              <img src="https://wallsheaven.co.uk/photos/E886414123/220/planet-mars,-the-red-planet-isolated-on-white-background.webp" />
            </div>
            <div className="pop-up-info">
              <h4>About Mars</h4>
              <p>Mars is the fourth planet from the Sun and the second-smallest planet in the Solar System, being larger than only Mercury. In English, Mars carries the name of the Roman god of war and is often referred to as the "Red Planet".</p>
            </div>
          </div>
        </div>
          <h2>Try again!</h2>
      </div>
    </div>
  )
}


export default (PopUp)
