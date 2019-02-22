import React from 'react';
import VehiclesCard from './VehiclesCard';

const VehiclesCardList = ({ object }) => {
    
    return (
        <div>
            {
                object.map((vehicle, i) => {
                    return (
                        <VehiclesCard 
                            key={i}
                            name={object[i].name}
                            model={object[i].model}
                            passengers={object[i].passengers}
                            />
                    );
                })
            }

        </div>
    );
}

export default VehiclesCardList;