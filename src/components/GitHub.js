import React from 'react';
import './github.css';
import github from '../assets/images/github.svg';

const GitHub = () => {
    return (
        <div>
            <a href="https://github.com/AltDom"><img className="github" src={github} alt="github-logo"/></a>
        </div>
    )
}

export default GitHub;