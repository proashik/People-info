import React from 'react';
import "./header.css"

const Header = () => {
    return (
        <div>
            <h1 className = "page-name">Profile</h1>
            <div className = "nav">
                <a href="/profile">Profile</a>
                <a href="Home">Home</a>
            </div>
        </div>
    );
};

export default Header;