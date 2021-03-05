import React from "react"
import "./PopUpStyles.css"

class PopUp extends React.Component {

render = () => {
  return (
      <div id="pop-up-container">
        <div id="pop-up">
          <div id="pop-up-text">
            <h2>Yes, I am Mars!</h2>
            <div className="pop-up-details">
              <div className="pop-up-img">
                <img alt="Image of the planet that was selected" src="https://res.cloudinary.com/tinamarieg/image/upload/v1614967030/mars-4628918_640_2_1_kxaldk.jpg" alt=/>
              </div>
              <div className="pop-up-info">
                <p>Mars is the fourth planet from the Sun and the second-smallest planet in the Solar System, being larger than only Mercury. In English, Mars carries the name of the Roman god of war and is often referred to as the "Red Planet".

                At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga.

                At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga.</p>
                <button>NEXT</button>
              </div>
            </div>
          </div>
            <h2>Try Again!</h2>
        </div>
      </div>
    )
  }
}


export default (PopUp)
