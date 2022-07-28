import React from 'react';

import './NavBar.css'

function NavBar() {
    return (
        <nav className='navbar navbar-expand-lg sticky-top navbar-light bg-white justify-content-between'>
            <div className="container-fluid">
                <a href="#" className="navbar-brand">
                    <img className='header--logo' src='./images/Airbnb_Logo.png' />
                </a>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNavDropdown">
                    <ul className="navbar-nav abs-center">
                        <li className="nav-item search">
                            <div>Mapa</div>
                            <div>Data</div>
                            <div>Hóspedes</div>
                            <div><i class="fa-solid fa-magnifying-glass"></i></div>
                        </li>
                    </ul>
                    <ul className="navbar-nav ml-auto">
                        <li className='nav-item mr-auto'>
                            <div className="dropdown">
                                <button type='button' className="btn dropdown menu--user" id='dropdownUserButton' data-toggle='dropdown' aria-aria-haspopup='true' aria-aria-expanded='false'>
                                    <i class="fa-solid fa-bars"></i>
                                    <i class="fa-solid fa-circle-user"></i>
                                </button>
                                <div className="dropdown-menu dropdown-menu-right" aria-labelledby='dropdownUserButton'>
                                    <a href="#" className="dropdown-item">Cadastrar-se</a>
                                    <a href="#" className="dropdown-item">Entrar</a>
                                    <div className="dropdown-divider"></div>
                                    <a href="#" className="dropdown-item">Hospede sua acomodação</a>
                                    <a href="#" className="dropdown-item">Hospede uma experiência</a>
                                    <a href="#" className="dropdown-item">Ajuda</a>
                                </div>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default NavBar;