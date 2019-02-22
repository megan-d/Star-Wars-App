import React from 'react';

//receive and destructure props
const PeopleCard = ({name, height, birthYear}) => {   
    
     
        return (
            <div className="card tc bg-light-red dib br3 pa3 ma2 grow shadow-5">
                <div>
                    <h2>{name}</h2>
                    <p><span  className='card-labels'>Height: </span>{height} cm</p>
                    <p><span  className='card-labels'>Birth Year: </span>{birthYear}</p>
                </div>
            </div>
        );
}



export default PeopleCard;