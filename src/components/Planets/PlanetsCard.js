import React from 'react';

//receive and destructure props
const PlanetsCard = ({name, terrain, population}) => {   
    
     
        return (
            <div className="card tc bg-light-red dib br3 pa3 ma2 grow shadow-5">
                <div>
                    <h2>{name}</h2>
                    <p><span  className='card-labels'>Terrain: </span>{terrain}</p>
                    <p><span  className='card-labels'>Population: </span>{population}</p>
                </div>
            </div>
        );
}



export default PlanetsCard;