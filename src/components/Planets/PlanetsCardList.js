import React from 'react';
import PlanetsCard from './PlanetsCard';

const PlanetsCardList = ({ object }) => {
    
    return (
        <div>
            {
                object.map((person, i) => {
                    return (
                        <PlanetsCard 
                            key={i}
                            name={object[i].name}
                            terrain={object[i].terrain}
                            population={object[i].population}
                            />
                    );
                })
            }

        </div>
    );
}

export default PlanetsCardList;