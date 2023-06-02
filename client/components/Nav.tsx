import { CityData } from "../../data/continents"
import data from "../../data/continents"
import { Link } from "react-router-dom"

function Nav() {
  

  return (
    <div className="nav">
      <Link to="/"><h3>Home</h3></Link>
      <h2>Cities</h2>
        {Object.keys(data).map(city => (
          <Link to={`/city/${city}`} key={city}><button>{city}</button></Link>
        ))}
    </div>
  )
}

export default Nav
