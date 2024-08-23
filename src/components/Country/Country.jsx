import { useState } from 'react';
import './Country.css'

const Country = ({ country, handleVisitedCountry, handleVisitedFlags}) => {


    const { name, flags, population, area, cca3 } = country;

    const [visited, setVisited] = useState(false)

    const handleVisited = () => {
        setVisited(!visited)
    }


    return (
        <div className={`country ${visited ? 'visited' :'non-visited'}`}>
            <h3>{name.common}</h3>
            <img src={flags.png} alt="" />
            <p>Population: {population}</p>
            <p>Area: {area} km</p>
            <p><small>Code: {cca3}</small></p>
            <button onClick={() => handleVisitedCountry(country)}>Mark as Visited</button>
            <br />
            <button onClick={()=> handleVisitedFlags(flags.png)}>Add Flags</button>
            <br />
            <button onClick={handleVisited}>{visited ? 'Visited': 'Going'}</button>
            {visited ? 'I have visited this Country' :'I want to Visit'}
        </div>
    );
};

export default Country;