import React from 'react';
import Card from './Card';

const CardList = ({ people }) => {
    
    return (
        <div>
            {
                people.map((person, i) => {
                    return (
                        <Card 
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

export default CardList;