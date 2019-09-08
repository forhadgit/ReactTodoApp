import React from 'react';
import {NavLink} from 'react-router-dom';


const Header = () => {
    return (
        <nav className='navbar navbar-expand-lg navbar-light bg-light'>
        <NavLink to='/' className="navbar-brand" href="!#">Notes App</NavLink>
           <ul className="navbar-nav ml-auto">
                <li className="nav-item ">
                    <NavLink className="nav-link" exact to='/'>Home</NavLink>
                </li>
                <li className="nav-item">
                    <NavLink className="nav-link" to='/addnote'>Add Note</NavLink>
                </li>
                
                <li className="nav-item">
                    <NavLink className="nav-link" to='/about'>About Us</NavLink>
                </li>
            </ul>

        </nav>
    );
};

export default Header;