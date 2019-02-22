import React from 'react';
import PeopleCard from './PeopleCard';

const PeopleCardList = ({ object }) => {
    
    return (
        <div>
            {
                object.map((person, i) => {
                    return (
                        <PeopleCard 
                            key={i}
                            name={object[i].name}
                            height={object[i].height}
                            birthYear={object[i].birth_year}
                            />
                    );
                })
            }

        </div>
    );
}

export default PeopleCardList;