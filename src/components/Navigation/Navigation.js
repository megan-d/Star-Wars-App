import React from 'react';

//pure function with no state
const Navigation = ( {onNavClick, getData} ) => {
    return (
        //navigation for home screen
        <nav style={{display: 'flex', justifyContent: 'center'}}>
            <p onClick={() => { getData('people')}} className='nav-links pa3 pointer'>People</p>
            <p onClick={() => { getData('planets')}} className='nav-links pa3 pointer'>Planets</p>
            <p onClick={() => { getData('vehicles')}} className='nav-links pa3 pointer'>Vehicles</p>
            <p onClick={() => { getData('starships')}} className='nav-links pa3 pointer'>Starships</p>
        </nav>
    )
}

export default Navigation;

