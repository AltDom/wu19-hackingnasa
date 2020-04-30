import React from 'react';
import './astro.css';

const { REACT_APP_ACCESS_TOKEN } = process.env;

const Astro = () => {

    const [searchResult, setSearchResult] = React.useState(null);

    React.useEffect(() => {
        const url = `https://api.nasa.gov/planetary/apod?api_key=${REACT_APP_ACCESS_TOKEN}`;

        fetch(url, {
            method: 'GET',
        })
        .then((queryResult) => queryResult.json())
        .then((json) => {
            setSearchResult(json);
        })
    }, []);
    
    if (!searchResult) {
        return null;
    } else {
        return (
            <div className="astro-content">
                <img src={searchResult.hdurl} alt=""/>
                <div className="astro-text">
                    <h1>{searchResult.title}</h1>
                    <p>{searchResult.explanation}</p>
                </div>
            </div>
        )
    }
}

export default Astro;