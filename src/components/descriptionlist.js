import Description from "./description";
import Yoda from "./yoda";
const Descriptionlist = function(disc)
{
    return(
        
        <div> {disc.data.map(disc => (
            <Description key={disc.title} title={disc.title} description={disc.description} />
        ))}
        <Yoda/>
        </div>

    )
}

export default Descriptionlist;