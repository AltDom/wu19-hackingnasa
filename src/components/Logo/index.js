import React from 'react';
import logo from '../../assets/images/nasa-logo.svg';

const Logo = () => {
    return (
        <div>
            <a href="https://www.nasa.gov/"><img className="logo" src={logo} alt="nasa-logo"/></a>
        </div>
    )
}

export default Logo;