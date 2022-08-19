//functional React component

import React from 'react';
import './planets.css';


function Planets(props) {
    return (
             <div className='planets'>
                <div>Planet Name: {props.name}</div>
                
                <div>Diameter: {props.diameter}</div>
                
                <div>Climate: {props.climate}</div>
                
                <div>Gravity: {props.gravity}</div>
              
                <div>Terrain: {props.terrain}</div>
                
                <div>Surface Water: {props.surface_water}</div>
               
                <div>Population: {props.population}</div>
             
             </div>
    )
  }

  export default Planets;