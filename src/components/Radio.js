import React from "react"
import "./RadioStyles.css"

const Radio = () => {
  return (
    <div id="answer-container">
      <div className="answer-options">
        <button>
            <img src="https://cdn.britannica.com/25/160325-050-EB1C8FB7/image-instruments-Earth-satellite-NASA-Suomi-National-2012.jpg"/>
            Earth
        </button>
        <button>
            <img src="https://upload.wikimedia.org/wikipedia/commons/0/02/OSIRIS_Mars_true_color.jpg"/>
            Mars
        </button>
        <button>
            <img src="https://images.theconversation.com/files/92417/original/image-20150819-10832-6b7mub.jpg?ixlib=rb-1.1.0&q=45&auto=format&w=926&fit=clip"/>
            Jupitor
        </button>
      </div>
    </div>
  )
}

export default (Radio)
