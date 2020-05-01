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
        // const url = `https://api.nasa.gov/neo/rest/v1/neo/3542519?api_key=${REACT_APP_ACCESS_TOKEN}`;
        if (searchText === "") {
            return
        }
        setDate(generateDate(searchText))
        
        fetch(url, {
            method: 'GET',
        })
        .then((queryResult) => queryResult.json())
        .then((json) => {
            console.log(json)
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