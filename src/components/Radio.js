import React from "react"
import "./RadioStyles.css"

const Radio = () => {
  return (
    <div id="answer-container">
      <div className="answer-options">
        <button>
            <img src="https://static4.depositphotos.com/1009645/357/v/600/depositphotos_3573055-stock-illustration-world-globe-editable-vector.jpg"/>
            Earth
        </button>
        <button>
            <img src="https://wallsheaven.co.uk/photos/E886414123/220/planet-mars,-the-red-planet-isolated-on-white-background.webp"/>
            Mars
        </button>
        <button>
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTeiZKqZvMXfv7a3pIygdAR5KhuSU1UwtVcvg&usqp=CAU"/>
            Venus
        </button>
      </div>
    </div>
  )
}

export default (Radio)
