import { Link } from "react-router-dom"
import { useParams } from "react-router-dom"
import data from "../../data/continents"
import { CityData } from "../../data/continents"

function City() {
const city = useParams().city
const {temperature, wind, windDirection, rain} = data[city]

  return (
    <>
      <div className="city">
        <h2>{city} Weather</h2>
        <div>High: {Math.max(...temperature)}</div>
        <div>Low: {Math.min(...temperature)}</div>
        <div>Rainfall today: {}</div>
        <ul>
        </ul>
      </div>
    </>
  )
}
export default City