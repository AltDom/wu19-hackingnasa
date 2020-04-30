import React from 'react';
import './github.css';
import github from '../../assets/images/github.svg';

const GitHub = () => {
    return (
        <div>
            <img className="github" src={github} alt="github-logo"/>
        </div>
    )
}

export default GitHub;