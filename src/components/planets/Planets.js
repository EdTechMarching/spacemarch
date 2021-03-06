import React from 'react'
import Earth from "./Earth"
import Jupiter from "./Jupiter"
import Mars from "./Mars"
import Mercury from "./Mercury"
import Neptune from "./Neptune"
import Saturn from "./Saturn"
import Uranus from "./Uranus"
import Venus from "./Venus"
import "./PlanetsStyle.css"



const Planets = () => {
    return ( 
        <div className="planetContainer">
            <Mercury />
			<Venus />
			<Earth />
			<Mars />
			<Jupiter />
			<Saturn />
			<Uranus />
			<Neptune />
        </div>
     );
}
 
export default Planets;