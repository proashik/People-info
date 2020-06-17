import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome, faPersonBooth, faUser } from '@fortawesome/free-solid-svg-icons'
import "./header.css"

const Header = () => {
    return (
        <div>
            <h1 className = "page-name">Profile</h1>
            <div className = "nav">
                <a href="/profile"><FontAwesomeIcon icon={faUser} /> Profile</a>
                <a href="Home"><FontAwesomeIcon icon={faHome} /> Home</a>
            </div>
        </div>
    );
};

export default Header;