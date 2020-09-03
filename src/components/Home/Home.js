import React, { useEffect } from 'react';
import { useState } from 'react';
import Country from '../Country/Country';

const Home = () => {
    const [countries, setCountries] = useState([]);
    useEffect(() => {
        const url = 'https://restcountries.eu/rest/v2/all';
        fetch(url)
        .then(res => res.json())
        .then(data => setCountries(data))
    }, [])
    // console.log(data);
    return (
        <div>
            <ul>
            {
                countries.map(country => <Country key={country.name} country={country}/>)
            }
            </ul>
        </div>
    );
};

export default Home;