import React from 'react';

import './NavBar.css'

function NavBar() {
    return (
        <header>
            <img className='header--logo' src='https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/Airbnb_Logo_B%C3%A9lo.svg/2560px-Airbnb_Logo_B%C3%A9lo.svg.png' />
            <div className="search">
                <div>Mapa</div>
                <div>Data</div>
                <div>Hóspedes</div>
                <div><i class="fa-solid fa-magnifying-glass"></i></div>
            </div>
            <div>
                <div className="menu--user">
                    <i class="fa-solid fa-bars"></i>
                    <i class="fa-solid fa-circle-user"></i>
                </div>
            </div>
        </header>
    )
}

export default NavBar;