import React from 'react';
import generateDate from '../../functions/generateDate';

const { REACT_APP_ACCESS_TOKEN } = process.env;

const SingleRoid = (props) => {
    const [searchResult, setSearchResult] = React.useState(null);

    React.useEffect(() => {
        const url = `https://api.nasa.gov/neo/rest/v1/neo/${props.slug}?api_key=${REACT_APP_ACCESS_TOKEN}`;
        
        fetch(url, {
            method: 'GET',
        })
        .then((queryResult) => queryResult.json())
        .then((json) => {
            console.log(json)
            const setPath = json;
            setSearchResult(setPath);
        })
    }, [props.slug]);
    
    if (!searchResult) {
        return (
            <div>
                {searchResult===undefined && <div><h3>No events were recorded for that object.</h3></div>}
            </div>
        )
    } else {
        return (
            <div>

                <div>
                    {searchResult && Object.keys(searchResult).length !== 0 && <div><h1>{searchResult.name}</h1></div>}
                </div>

                {searchResult && <div className="neomisses-content">

                    {searchResult.orbital_data.orbit_class && <div className="neomisses-data">
                        <h3>Bio:</h3>
                        <p>{searchResult.orbital_data.orbit_class.orbit_class_description}</p>
                    </div>}
                    {searchResult.orbital_data.first_observation_date && <div className="neomisses-data">
                        <h3>First observed:</h3>
                        <p>{generateDate(searchResult.orbital_data.first_observation_date)}</p>
                    </div>}
                    <div className="neomisses-data">
                        <h3>Orbital period:</h3>
                        <p>{parseFloat(searchResult.orbital_data.orbital_period).toFixed(0)} days</p>
                    </div>
                    <div className="neomisses-diameter-data">
                        <div className="neomisses-data">
                            <h3>Max. Diameter:</h3>
                            <p>{parseFloat(searchResult.estimated_diameter.meters.estimated_diameter_max).toFixed(0)} meters</p>
                        </div>
                        <div className="neomisses-data">
                            <h3>Min. Diameter:</h3>
                            <p>{parseFloat(searchResult.estimated_diameter.meters.estimated_diameter_min).toFixed(0)} meters</p>
                        </div>
                    </div>
                    <div className="neomisses-data">
                        <h3>Potentially Hazardous:</h3>
                        <p>{searchResult.is_potentially_hazardous_asteroid ? 'True' : 'False'}</p>
                    </div>
                    <div className="neomisses-data">
                        <h3>Number of encounters:</h3>
                        <p>{searchResult.close_approach_data.length}</p>
                    </div>
                    <div className="neomisses-data">
                        <h3>View object's orbit:</h3>
                        <a href={`${searchResult.nasa_jpl_url};old=0;orb=1;cov=0;log=0;cad=0#orb`}><p>{searchResult.name}</p></a>
                    </div>

                    <h2>Past and upcoming events:</h2>

                    {searchResult.close_approach_data.map((element,i) => {
                        return (
                            <div key={i} className="neomisses-events-content">
        
                                <div className="neomisses-data">
                                    <h3>Date:</h3>
                                    <p>{generateDate(element.close_approach_date)}</p>
                                </div>
                                <div className="neomisses-data">
                                    <h3>Orbiting:</h3>
                                    <p>{element.orbiting_body}</p>
                                </div>
                                <div className="neomisses-data">
                                    <h3>Distance from Earth:</h3>
                                    <p>{parseFloat(element.miss_distance.kilometers).toFixed(0)} kilometers</p>
                                </div>
                                <div className="neomisses-data">
                                    <h3>Relative Velocity:</h3>
                                    <p>{parseFloat(element.relative_velocity.kilometers_per_hour).toFixed(0)} kilometers per hour</p>
                                </div>
                            
                            </div>
                        )  
                    })}
                </div>}    
            </div>
        )
    }
}

export default SingleRoid;