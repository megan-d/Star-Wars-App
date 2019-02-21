import React from 'react';

//pure function with no state
const Navigation = ( {onNavClick} ) => {
    return (
        //navigation for home screen
        <nav style={{display: 'flex', justifyContent: 'center'}}>
            <p onClick={() => onNavClick('people')} className='nav-links pa3 pointer'>People</p>
            <p className='nav-links pa3 pointer'>Planets</p>
            <p className='nav-links pa3 pointer'>Films</p>
            <p className='nav-links pa3 pointer'>Species</p>
            <p className='nav-links pa3 pointer'>Vehicles</p>
            <p className='nav-links pa3 pointer'>Starships</p>
        </nav>
    )
}

export default Navigation;