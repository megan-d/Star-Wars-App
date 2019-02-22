import React from 'react';

//pure function with no state
const Navigation = ( {onNavClick} ) => {
    return (
        //navigation for home screen
        <nav style={{display: 'flex', justifyContent: 'center'}}>
            <p onClick={() => onNavClick('people')} className='nav-links pa3 pointer'>People</p>
            <p onClick={() => onNavClick('planets')} className='nav-links pa3 pointer'>Planets</p>
            <p onClick={() => onNavClick('vehicles')} className='nav-links pa3 pointer'>Vehicles</p>
            <p onClick={() => onNavClick('starships')} className='nav-links pa3 pointer'>Starships</p>
        </nav>
    )
}

export default Navigation;