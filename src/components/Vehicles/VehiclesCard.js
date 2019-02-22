import React from 'react';

//receive and destructure props
const VehiclesCard = ({name, model, passengers}) => {   
    
     
        return (
            <div className="card tc bg-light-red dib br3 pa3 ma2 grow shadow-5">
                <div>
                    <h2>{name}</h2>
                    <p><span  className='card-labels'>Model: </span>{model}</p>
                    <p><span  className='card-labels'>Passengers: </span>{passengers}</p>
                </div>
            </div>
        );
}



export default VehiclesCard;