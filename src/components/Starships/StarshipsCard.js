import React from 'react';

//receive and destructure props
const StarshipsCard = ({name, model, crew}) => {   
    
     
        return (
            <div className="card tc bg-light-red dib br3 pa3 ma2 grow shadow-5">
                <div>
                    <h2>{name}</h2>
                    <p><span  className='card-labels'>Model: </span>{model}</p>
                    <p><span  className='card-labels'>Crew: </span>{crew}</p>
                </div>
            </div>
        );
}



export default StarshipsCard;