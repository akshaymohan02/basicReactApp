
import Planets from "./planets";
import './planetlist.css'
const Planetlist = function(planet)
{
    return(
        <div className="plist"><div>Planets Left to be viewed={planet.planetsLeft}</div>
        <div> {planet.data.map(planet => (
            <Planets key={planet.name} name={planet.name} diameter={planet.diameter} climate={planet.climate} gravity={planet.gravity} terrain={planet.terrain} surface_water={planet.surface_water} population={planet.population} />
        ))}
        </div></div>
    )
}

export default Planetlist;