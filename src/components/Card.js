import React from 'react';

const Card = ({name, height, birthYear, gender}) => {   //destructuring in brackets
    
     
        return (
            <div className="tc bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5">
                <div>
                    <h2>{name}</h2>
                    <p>Height: {height} cm}</p>
                    <p>Height: {birthYear} cm}</p>
                    <p>Height: {gender} cm}</p>
                </div>
            </div>
        );
}



export default Card;