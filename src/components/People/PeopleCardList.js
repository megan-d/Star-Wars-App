import React from 'react';
import PeopleCard from './PeopleCard';

const PeopleCardList = ({ people }) => {
    
    return (
        <div>
            {
                people.map((person, i) => {
                    return (
                        <PeopleCard 
                            key={i}
                            name={people[i].name}
                            height={people[i].height}
                            birthYear={people[i].birth_year}
                            />
                    );
                })
            }

        </div>
    );
}

export default PeopleCardList;