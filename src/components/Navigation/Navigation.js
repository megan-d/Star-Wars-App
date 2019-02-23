import React from 'react';

//pure function with no state
const Navigation = ( {onNavClick, getData} ) => {
    return (
        //navigation for home screen
        <nav style={{display: 'flex', justifyContent: 'center'}}>
            <p onClick={() => {onNavClick('people'); getData('people')}} className='nav-links pa3 pointer'>People</p>
            <p onClick={() => {onNavClick('planets'); getData('planets')}} className='nav-links pa3 pointer'>Planets</p>
            <p onClick={() => {onNavClick('vehicles'); getData('vehicles')}} className='nav-links pa3 pointer'>Vehicles</p>
            <p onClick={() => {onNavClick('starships'); getData('starships')}} className='nav-links pa3 pointer'>Starships</p>
        </nav>
    )
}

export default Navigation;

