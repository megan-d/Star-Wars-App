import React from 'react';
import StarshipsCard from './StarshipsCard';

const PlanetsCardList = ({ object }) => {
    
    return (
        <div>
            {
                object.map((ship, i) => {
                    return (
                        <StarshipsCard 
                            key={i}
                            name={object[i].name}
                            model={object[i].model}
                            crew={object[i].crew}
                            />
                    );
                })
            }

        </div>
    );
}

export default PlanetsCardList;