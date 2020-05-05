import React from 'react';
import './neomisses.css';
import generateDate from '../../functions/generateDate';

const { REACT_APP_ACCESS_TOKEN } = process.env;

const NEOMisses = () => {
    const [searchText, setSearchText] = React.useState("");
    const [searchResult, setSearchResult] = React.useState(null);
    const [date, setDate] = React.useState("");

    React.useEffect(() => {
        const url = `https://api.nasa.gov/neo/rest/v1/feed?start_date=${searchText}&end_date=${searchText}&api_key=${REACT_APP_ACCESS_TOKEN}`;
        if (searchText === "") {
            return
        }
        setDate(generateDate(searchText))
        
        fetch(url, {
            method: 'GET',
        })
        .then((queryResult) => queryResult.json())
        .then((json) => {
            const setPath = json.near_earth_objects[searchText];
            setSearchResult(setPath);
        })
    }, [searchText]);
    
    if (!searchResult) {
        return (
            <div>
                <div className="neomisses-query">
                    <h3>Search for space rocks by date:</h3>
                    <input type="date" onChange={e => {
                        if(!e.target.value.startsWith('20') && !e.target.value.startsWith('19') && !e.target.value.startsWith('18')) {
                        } else {
                            setSearchText(e.target.value)}}} />
                </div>
                <div className="neomisses-content">
                    <h2>Asteroids of historic significance</h2>
                    <a href={`/neomisses/2004486`}><p>Mithra - potentially hazardous and highly eccentric</p></a>
                    <a href={`/neomisses/2001221`}><p>Amor - the namesake asteroid for more than 7000 others</p></a>
                    <a href={`/neomisses/2001981`}><p>Midas - a volcanic fragment from main-belt asteroid Vesta</p></a>
                    <a href={`/neomisses/2002062`}><p>Aten - the first asteroid found with a period less than a year</p></a>
                    <a href={`/neomisses/2002201`}><p>Oljato - an asteroid that was lost for 32 years</p></a>
                    <a href={`/neomisses/2001036`}><p>Ganymed - the largest near earth object</p></a>
                    <a href={`/neomisses/2004183`}><p>Cuno - named after it's South African discoverer</p></a>
                    <a href={`/neomisses/2007088`}><p>Ishtar - a minor planet with a rotational period of 2.7 hours</p></a>
                    <a href={`/neomisses/2001862`}><p>Apollo - the first found of the Apollo type asteroids</p></a>
                    <a href={`/neomisses/2099942`}><p>Apophis - once thought to be passing though a gravitational keyhole to impact Earth</p></a>
                    <a href={`/neomisses/2001566`}><p>Icarus - the first asteroid observed by radar</p></a>
                    <a href={`/neomisses/2003753`}><p>Cruithne - has a bean-shaped orbit relative to Earth</p></a>
                    <a href={`/neomisses/2066391`}><p>Moshup - a two-bodied binary asteroid</p></a>
                    <a href={`/neomisses/2163693`}><p>Atira - a large binary asteroid with a moon on one side</p></a>
                    <a href={`/neomisses/2004179`}><p>Toutatis - an asteroid on a highly chaotic and hazardous orbit</p></a>
                    <a href={`/neomisses/2001685`}><p>Toro - the source of a rock fragment that struck a woman</p></a>
                    <a href={`/neomisses/2003908`}><p>Nyx - shares it's name with one of Pluto's moons (Nix)</p></a>
                    <a href={`/neomisses/2004197`}><p>Morpheus - shares it's name with a Matrix character</p></a>
                    <a href={`/neomisses/2006178`}><p>1986 DA - a metallic asteroid</p></a>
                    <a href={`/neomisses/3024715`}><p>1999 XS35 - an asteroid from beyond Neptune</p></a>

                </div>
                {searchResult===undefined && <div><h3>No results for {date}</h3></div>}
            </div>
        )
    } else {
        return (
            <div>
                <div className="neomisses-query">
                    <h3>Enter another date:</h3>
                    <input type="date" onChange={e => {
                        if(!e.target.value.startsWith('20') && !e.target.value.startsWith('19') && !e.target.value.startsWith('18')) {
                        } else {
                            setSearchText(e.target.value)}}} />
                </div>

                <div>
                    {searchResult && Object.keys(searchResult).length !== 0 && <div><h2>Results for {date}</h2></div>}
                </div>

                {searchResult && searchResult.map((element,i) => {
                    return (
                        <div key={i} className="neomisses-content">
        
                            <div className="neomisses-data">
                                <h3>Name:</h3>
                                <a href={`/neomisses/${element.id}`}><p>{element.name}</p></a>
                            </div>
                            {element.close_approach_data[0].close_approach_date_full &&<div className="neomisses-data">
                                <h3>Time of Closest Approach:</h3>
                                <p>{element.close_approach_data[0].close_approach_date_full.substr(12)}</p>
                            </div>}
                            <div className="neomisses-data">
                                <h3>Distance from Earth:</h3>
                                <p>{parseFloat(element.close_approach_data[0].miss_distance.kilometers).toFixed(0)} kilometers</p>
                            </div>
                            <div className="neomisses-data">
                                <h3>Relative Velocity:</h3>
                                <p>{parseFloat(element.close_approach_data[0].relative_velocity.kilometers_per_hour).toFixed(0)} kilometers per hour</p>
                            </div>
                            <div className="neomisses-diameter-data">
                                <div className="neomisses-data">
                                    <h3>Max. Diameter:</h3>
                                    <p>{parseFloat(element.estimated_diameter.meters.estimated_diameter_max).toFixed(0)} meters</p>
                                </div>
                                <div className="neomisses-data">
                                    <h3>Min. Diameter:</h3>
                                    <p>{parseFloat(element.estimated_diameter.meters.estimated_diameter_min).toFixed(0)} meters</p>
                                </div>
                            </div>
                            
                        </div>
                    )  
                })}
                
            </div>
        )
    }
}


export default NEOMisses;