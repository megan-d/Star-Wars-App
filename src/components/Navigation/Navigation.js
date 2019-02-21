import React from 'react';

//pure function with no state
const Navigation = () => {
    return (
        //navigation for home screen
        <nav style={{display: 'flex', justifyContent: 'center'}}>
            <a className='nav-links pa3 pointer'>People</a>
            <a className='nav-links pa3 pointer'>Planets</a>
            <a className='nav-links pa3 pointer'>Films</a>
            <a className='nav-links pa3 pointer'>Species</a>
            <a className='nav-links pa3 pointer'>Vehicles</a>
            <a className='nav-links pa3 pointer'>Starships</a>
        </nav>
    )
}

export default Navigation;